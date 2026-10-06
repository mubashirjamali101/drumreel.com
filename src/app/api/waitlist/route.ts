import { NextResponse } from "next/server";
import { saveSignup, type WaitlistEntry } from "@/lib/waitlist-store";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL = 120;
const MAX_BODY = 4096; // bytes; a real signup body is well under 1 KB
const MAX_TRACKED_IPS = 10_000;
const hits = new Map<string, { n: number; reset: number }>();

function limited(ip: string) {
  const now = Date.now();
  if (hits.size > MAX_TRACKED_IPS) {
    // Keep the in-memory limiter bounded on long-lived instances.
    for (const [key, value] of hits) if (now > value.reset) hits.delete(key);
    if (hits.size > MAX_TRACKED_IPS) hits.clear();
  }
  const row = hits.get(ip);
  if (!row || now > row.reset) {
    hits.set(ip, { n: 1, reset: now + 60_000 });
    return false;
  }
  row.n += 1;
  return row.n > 8;
}

function clip(value: unknown, max: number) {
  if (typeof value !== "string") return undefined;
  const v = value.trim();
  return v ? v.slice(0, max) : undefined;
}

/** Optional email to the team via Resend. Returns true only if Resend accepted it. */
async function notify(entry: WaitlistEntry, note?: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const to = process.env.WAITLIST_NOTIFY_EMAIL ?? "hello@drumreel.com";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM ?? "Drumreel <noreply@drumreel.com>",
        to: [to],
        subject: `Waitlist: ${entry.email}`,
        text: [note, JSON.stringify(entry, null, 2)].filter(Boolean).join("\n\n"),
      }),
    });
    if (!res.ok) {
      console.error(`[waitlist] Resend notification failed: ${res.status} ${await res.text()}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[waitlist] Resend notification failed:", error);
    return false;
  }
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many tries. Wait a minute." }, { status: 429 });
  }

  // JSON only. Also blocks simple cross-site form posts (text/plain).
  if (!req.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Invalid request." }, { status: 415 });
  }
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY) {
    return NextResponse.json({ error: "Invalid request." }, { status: 413 });
  }

  let email = "";
  let referrer: string | undefined;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY) {
      return NextResponse.json({ error: "Invalid request." }, { status: 413 });
    }
    const body = JSON.parse(raw) as { email?: unknown; referrer?: unknown } | null;
    if (!body || typeof body !== "object") throw new Error("not an object");
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    referrer = clip(body.referrer, 500);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  // Length check first so the regex never runs on huge input.
  if (email.length > MAX_EMAIL || !EMAIL.test(email)) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  const entry: WaitlistEntry = {
    email,
    ts: new Date().toISOString(),
    referrer,
    page: clip(req.headers.get("referer"), 500),
    ua: clip(req.headers.get("user-agent"), 300),
  };

  const saved = await saveSignup(entry);

  if (saved.status === "duplicate") {
    // Already on the list. Same response as a new signup; no repeat email.
    return NextResponse.json({ ok: true });
  }

  if (saved.status === "stored") {
    await notify(entry);
    return NextResponse.json({ ok: true });
  }

  // Storage is missing or failing. Shout in the logs; never pretend it worked.
  if (saved.status === "unconfigured") {
    console.error(
      "[waitlist] STORAGE NOT CONFIGURED: set KV_REST_API_URL + KV_REST_API_TOKEN " +
        "(connect Upstash for Redis in Vercel > Storage) or UPSTASH_REDIS_REST_URL + " +
        `UPSTASH_REDIS_REST_TOKEN. Signup NOT stored: ${email}`,
    );
  } else {
    console.error(`[waitlist] STORAGE WRITE FAILED. Signup NOT stored: ${email}`, saved.error);
  }

  // If the team email went out, the signup is still captured there.
  const emailed = await notify(entry, "WARNING: waitlist storage unavailable; this email is the only record.");
  if (emailed) {
    return NextResponse.json({ ok: true });
  }

  console.error(`[waitlist] SIGNUP LOST (no storage, no Resend): ${email}`);
  return NextResponse.json(
    { error: "We could not save your request right now. Please email hello@drumreel.com." },
    { status: 503 },
  );
}
