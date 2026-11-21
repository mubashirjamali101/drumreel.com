import Link from "next/link";
import { AuthActions } from "./auth-actions";
import { Mark } from "./mark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080c]/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Mark className="h-5 w-5" />
          <span className="text-[15px] font-medium tracking-tight text-[#f4f4f5]">Drumreel</span>
        </Link>
        <nav className="hidden items-center gap-6 text-[14px] text-white/60 md:flex">
          <a href="#film" className="transition hover:text-white">
            Film
          </a>
          <a href="#asks" className="transition hover:text-white">
            Asks
          </a>
          <a href="#agents" className="transition hover:text-white">
            Agents
          </a>
        </nav>
        <AuthActions variant="bar" />
      </div>
    </header>
  );
}
