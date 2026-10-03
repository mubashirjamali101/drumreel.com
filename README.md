# drumreel.com

Public site for Drumreel.

```bash
pnpm install
pnpm dev
```

Deploy on Vercel. Every push to `main` deploys to production.

## Waitlist storage (required)

Signups from the "Request access" form are stored in **Upstash Redis** (Vercel Marketplace).
One Redis hash, `waitlist:signups`, keyed by lowercased email (deduped), value = JSON
`{ email, ts (ISO), referrer?, page?, ua? }`.

One-time setup:

1. Vercel dashboard → project **drumreel.com** → **Storage** → **Create Database** →
   **Upstash for Redis** (free plan is plenty) → connect it to this project for
   Production, Preview, and Development.
2. That adds these env vars automatically: `KV_REST_API_URL`, `KV_REST_API_TOKEN`
   (plus `KV_REST_API_READ_ONLY_TOKEN`, `KV_URL`, `REDIS_URL`, which this code does not need).
3. Redeploy so the new env vars are picked up.

A database made directly in the Upstash console also works: set
`UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` instead.

If neither pair is set, `/api/waitlist` logs `[waitlist] STORAGE NOT CONFIGURED` with
`console.error` (visible in Vercel → Logs). If the optional Resend email still goes out it
returns success (the email is the record); otherwise it returns 503 and asks the visitor to
email hello@drumreel.com. Nothing is written to the local filesystem.

### Export signups

```bash
vercel env pull .env.local     # needs the store connected to Development
pnpm waitlist:export > waitlist.csv
```

You can also browse the `waitlist:signups` hash in the Upstash console (Data Browser).

## Optional env vars

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Email each new signup to the team via Resend |
| `WAITLIST_NOTIFY_EMAIL` | Recipient (default `hello@drumreel.com`) |
| `EMAIL_FROM` | Sender (default `Drumreel <noreply@drumreel.com>`; domain must be verified in Resend) |
| `NEXT_PUBLIC_APP_URL` | Product app URL |

## Analytics

`@vercel/analytics` and `@vercel/speed-insights` are mounted in the root layout. A custom
`waitlist_signup` event fires on each successful signup. Turn them on once in the Vercel
project: **Analytics** tab → Enable, and **Speed Insights** tab → Enable. No cookie banner is
needed (Vercel Analytics is cookieless). Custom events show up under Analytics → Events
(custom events need a Vercel Pro plan).
