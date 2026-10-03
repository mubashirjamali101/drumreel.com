#!/usr/bin/env node
// Export waitlist signups from Upstash Redis as CSV (stdout).
//
// Access is protected by the store's REST token, which only the project owner has.
//   vercel env pull .env.local
//   pnpm waitlist:export > waitlist.csv
//
// Reads KV_REST_API_URL / KV_REST_API_TOKEN or UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.
import { Redis } from "@upstash/redis";

const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const token =
  process.env.KV_REST_API_READ_ONLY_TOKEN ||
  process.env.KV_REST_API_TOKEN ||
  process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  console.error(
    "Missing store credentials. Run `vercel env pull .env.local` first, or set " +
      "KV_REST_API_URL + KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN).",
  );
  process.exit(1);
}

const redis = new Redis({ url, token, enableTelemetry: false });
const all = (await redis.hgetall("waitlist:signups")) ?? {};

const rows = Object.values(all)
  .map((v) => (typeof v === "string" ? JSON.parse(v) : v))
  .sort((a, b) => String(a.ts).localeCompare(String(b.ts)));

const cols = ["ts", "email", "referrer", "page", "ua"];
const cell = (v) => {
  const s = v == null ? "" : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

process.stdout.write(cols.join(",") + "\n");
for (const r of rows) process.stdout.write(cols.map((c) => cell(r[c])).join(",") + "\n");
console.error(`${rows.length} signup(s) exported.`);
