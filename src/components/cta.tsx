import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Cta({
  children = "Get started",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`${site.app}/signup`}
      className={`inline-flex items-center justify-center rounded-md bg-cream px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-white ${className}`}
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
      className="inline-flex items-center justify-center rounded-md border border-line px-4 py-2.5 text-sm text-cream-dim transition hover:border-cream-dim hover:text-cream"
    >
      {children}
    </a>
  );
}
