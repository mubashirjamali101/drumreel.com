import { Redis } from "@upstash/redis";

/**
 * Durable waitlist storage backed by Upstash Redis (Vercel Marketplace).
 *
 * Connecting "Upstash for Redis" to the Vercel project injects
 * KV_REST_API_URL / KV_REST_API_TOKEN. A database created directly in the
 * Upstash console uses UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.
 * Either pair works.
 *
 * Layout: one Redis hash, field = lowercased email, value = JSON entry.
 * HSETNX makes the write idempotent, so the first signup for an email wins
 * and repeats are reported as duplicates.
 */
export const WAITLIST_KEY = "waitlist:signups";

export type WaitlistEntry = {
  email: string;
  ts: string;
  referrer?: string;
  page?: string;
  ua?: string;
};

export type StoreResult =
  | { status: "stored" }
  | { status: "duplicate" }
  | { status: "unconfigured" }
  | { status: "error"; error: unknown };

function credentials() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

let client: Redis | null = null;

function redis(): Redis | null {
  if (client) return client;
  const creds = credentials();
  if (!creds) return null;
  client = new Redis({ ...creds, enableTelemetry: false });
  return client;
}

export function storeConfigured() {
  return credentials() !== null;
}

export async function saveSignup(entry: WaitlistEntry): Promise<StoreResult> {
  const db = redis();
  if (!db) return { status: "unconfigured" };
  try {
    const added = await db.hsetnx(WAITLIST_KEY, entry.email, JSON.stringify(entry));
    return added === 1 ? { status: "stored" } : { status: "duplicate" };
  } catch (error) {
    return { status: "error", error };
  }
}
