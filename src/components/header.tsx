import Link from "next/link";
import { AuthActions } from "./auth-actions";
import { Mark } from "./mark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[#f5f5f7]/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Mark className="h-5 w-5" />
          <span className="text-[15px] font-medium tracking-tight text-[#1d1d1f]">Drumreel</span>
        </Link>
        <nav className="hidden items-center gap-5 text-[13px] text-[#1d1d1f]/80 md:flex">
          <a href="#film" className="transition hover:text-[#1d1d1f]">
            Film
          </a>
          <a href="#talk" className="transition hover:text-[#1d1d1f]">
            Talk
          </a>
          <a href="#agents" className="transition hover:text-[#1d1d1f]">
            Agents
          </a>
        </nav>
        <AuthActions variant="bar" />
      </div>
    </header>
  );
}
