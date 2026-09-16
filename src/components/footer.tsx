import Link from "next/link";
import { site } from "@/lib/site";
import { Mark } from "./mark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Mark className="h-5 w-5" />
          <p className="text-[13px] text-cream-dim">Drumreel · coming soon</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-cream-dim">
          <Link href="/terms" className="hover:text-cream">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-cream">
            Privacy
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-cream">
            {site.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
