import Link from "next/link";
import { site } from "@/lib/site";
import { Mark } from "./mark";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Mark className="h-5 w-5 text-white" />
          <span className="text-sm font-semibold tracking-tight text-white">Drumreel Studio</span>
          <span className="text-xs text-neutral-500">•</span>
          <span className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All cloud workers operational
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-medium text-neutral-400">
          <Link href="/terms" className="transition hover:text-white">
            Terms of Service
          </Link>
          <Link href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <a href={`mailto:${site.email}`} className="transition hover:text-white">
            {site.email}
          </a>
          <span className="text-neutral-600">© {new Date().getFullYear()} Drumreel Inc.</span>
        </nav>
      </div>
    </footer>
  );
}
