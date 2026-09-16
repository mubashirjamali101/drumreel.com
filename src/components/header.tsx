import Link from "next/link";
import { Mark } from "./mark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/50 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Mark className="h-6 w-6" />
          <span className="text-[13px] tracking-wide">Drumreel</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] text-cream-dim md:flex">
          <a href="#product" className="hover:text-cream">
            Product
          </a>
          <a href="#loom" className="hover:text-cream">
            vs Loom
          </a>
          <a href="#faq" className="hover:text-cream">
            FAQ
          </a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-md bg-cream px-3 py-1.5 text-[13px] font-medium text-ink hover:bg-white"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
