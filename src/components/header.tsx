import Link from "next/link";
import { AuthActions } from "./auth-actions";
import { Mark } from "./mark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
            <Mark className="h-5 w-5 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-tight text-white">Drumreel</span>
            <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
              STUDIO
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-medium text-neutral-400 md:flex">
          <a href="#interactive-studio" className="transition hover:text-white">
            Studio
          </a>
          <a href="#comparison" className="transition hover:text-white">
            Why Not Loom
          </a>
          <a href="#features" className="transition hover:text-white">
            Engine
          </a>
          <a href="#voices" className="transition hover:text-white">
            Voices & Presenters
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <AuthActions variant="bar" />
        </div>
      </div>
    </header>
  );
}
