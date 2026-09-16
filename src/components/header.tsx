import Link from "next/link";
import { loginUrl, signupUrl } from "@/lib/site";
import { Mark } from "./mark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="text-sm tracking-wide">Drumreel</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-cream-dim md:flex">
          <a href="#studio" className="hover:text-cream">
            Studio
          </a>
          <a href="#rerun" className="hover:text-cream">
            Re-record
          </a>
          <a href="#loom" className="hover:text-cream">
            vs Loom
          </a>
          <a href="#pricing" className="hover:text-cream">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={loginUrl} className="hidden text-sm text-cream-dim hover:text-cream sm:inline">
            Sign in
          </a>
          <a
            href={signupUrl}
            className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink hover:bg-amber-2"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
