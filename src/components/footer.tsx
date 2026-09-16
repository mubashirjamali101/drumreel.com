import Link from "next/link";
import { site } from "@/lib/site";
import { Mark } from "./mark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Mark className="h-6 w-6" />
          <div>
            <p className="text-sm">Drumreel</p>
            <p className="text-xs text-cream-dim">Product demos, recorded for you.</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream-dim">
          <a href="#pricing" className="hover:text-cream">
            Pricing
          </a>
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
