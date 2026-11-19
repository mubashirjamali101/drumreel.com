import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#f5f5f7]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-[12px] text-[#6e6e73] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Copyright {new Date().getFullYear()} Drumreel.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/terms" className="hover:text-[#1d1d1f]">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-[#1d1d1f]">
            Privacy
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-[#1d1d1f]">
            {site.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
