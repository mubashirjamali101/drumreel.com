import type { ReactNode } from "react";
import { signupUrl } from "@/lib/site";

export function Cta({
  children = "Start free — 50 credits",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={signupUrl}
      className={`inline-flex items-center justify-center rounded-full bg-cream px-5 py-3 text-sm font-medium text-ink transition hover:bg-amber-2 ${className}`}
    >
      {children}
    </a>
  );
}

export function CtaGhost({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-cream-dim transition hover:border-cream-dim hover:text-cream"
    >
      {children}
    </a>
  );
}
