<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Drumreel marketing

- `src/middleware.ts` sends a document load with no `drumreel_signed_in` or `drumreel_auth_checked` cookie to `https://app.drumreel.com/api/auth/landing`. Skip RSC and prefetch requests. Do not loop when `drcheck=1` is already on the URL.
- `AuthActions` shows Dashboard when `drumreel_signed_in` is present, and Sign in / Get started otherwise. The session cookie itself is HttpOnly on `app.drumreel.com` and is not readable here.
- Header, home, and the 404 use `AuthActions`. `cookies()` makes those routes dynamic. Do not statically cache a signed-out header over a signed-in visitor.
- This site stays on Vercel. Do not move the app UI here.
