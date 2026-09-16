import { appendFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hits = new Map<string, { n: number; reset: number }>();

function limited(ip: string) {
  const now = Date.now();
  const row = hits.get(ip);
  if (!row || now > row.reset) {
    hits.set(ip, { n: 1, reset: now + 60_000 });
    return false;
  }
  row.n += 1;
  return row.n > 8;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many tries. Wait a minute." }, { status: 429 });
  }

  let email = "";
  try {
    const body = (await req.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!EMAIL.test(email) || email.length > 120) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  const line = `${new Date().toISOString()}\t${email}\n`;
  const file = join(process.cwd(), "data", "waitlist.jsonl");
  try {
    await mkdir(dirname(file), { recursive: true });
    await appendFile(file, line, "utf8");
  } catch {
    /* Vercel FS is read-only except /tmp */
    try {
      await appendFile("/tmp/drumreel-waitlist.jsonl", line, "utf8");
    } catch {
      /* still try notify */
    }
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.WAITLIST_NOTIFY_EMAIL ?? "hello@drumreel.com";
  if (key) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM ?? "Drumreel <noreply@drumreel.com>",
        to: [to],
        subject: `Waitlist: ${email}`,
        text: email,
      }),
    }).catch(() => undefined);
  }

  return NextResponse.json({ ok: true });
}
