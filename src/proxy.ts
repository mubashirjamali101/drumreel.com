import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next.js 16 renamed middleware.ts to proxy.ts. Do not move this back.
// A document with neither cookie is sent to the app, which sets the hint
// and returns the visitor here. drcheck stops that from looping.
const APP = "https://app.drumreel.com";

export function proxy(req: NextRequest) {
  if (!req.headers.get("accept")?.includes("text/html")) return NextResponse.next();
  const hasHint = req.cookies.has("drumreel_signed_in") || req.cookies.has("drumreel_auth_checked");
  const checking = req.nextUrl.searchParams.get("drcheck") === "1";
  if (checking) {
    if (!hasHint) return NextResponse.next();
    const clean = req.nextUrl.clone();
    clean.searchParams.delete("drcheck");
    return NextResponse.redirect(clean);
  }
  if (hasHint) return NextResponse.next();
  const next = req.nextUrl.clone();
  next.searchParams.set("drcheck", "1");
  const url = new URL("/api/auth/landing", APP);
  url.searchParams.set("next", next.toString());
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
