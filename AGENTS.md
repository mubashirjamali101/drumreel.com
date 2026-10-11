<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Drumreel marketing

This is Next.js 16. The `middleware.ts` file convention is gone. The landing auth check lives in `src/proxy.ts` and the function is named `proxy`. Do not create `src/middleware.ts`. Do not rename `proxy` back to `middleware`. Older Next docs and older agent notes that say otherwise are stale. `next dev` may rewrite the block above this heading. It must not delete this section.

`src/proxy.ts` runs on HTML document loads. If the request has neither `drumreel_signed_in` nor `drumreel_auth_checked`, it redirects to `https://app.drumreel.com/api/auth/landing` and comes back. Requests that are not `text/html` (RSC, prefetch) pass through. If `drcheck=1` is already present and the hint cookie is still missing, pass through. Do not remove this redirect. Do not point it at a different host.

`AuthActions` (`src/components/auth-actions.tsx`) reads `drumreel_signed_in` through `cookies()`. Value `1` shows a Dashboard link to `https://app.drumreel.com/app`. Any other state shows Sign in and Get started. The real session cookie `drumreel_session` is HttpOnly on `app.drumreel.com` and is not sent to this site. Do not read it here. Do not switch the hint cookie to SameSite=None.

The header, the home page, and the 404 render `AuthActions`. `src/components/cta.tsx` always links to signup and is not the signed-in control. Do not replace `AuthActions` with `Cta`. `cookies()` keeps those routes dynamic. Do not add `export const dynamic = "force-static"` or a cache that would freeze the signed-out header for a signed-in visitor.

This site stays on Vercel. The product UI stays on `app.drumreel.com`.
