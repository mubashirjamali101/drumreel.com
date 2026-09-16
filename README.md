# drumreel.com

Marketing site for [Drumreel](https://drumreel.com) — product demos, recorded for you.

CTAs go to the hosted studio (`NEXT_PUBLIC_APP_URL`, default `https://app.drumreel.com`).

## Local

```bash
pnpm install
pnpm dev
```

## Vercel

Import this GitHub repo. Set:

```
NEXT_PUBLIC_APP_URL=https://app.drumreel.com
```

Attach domain `drumreel.com` (and `www` → apex). Point `app.drumreel.com` at the SaaS host, not this project.
