import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Copyright {new Date().getFullYear()} Drumreel.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
