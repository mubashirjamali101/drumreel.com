import Link from "next/link";
import { AuthActions } from "./auth-actions";
import { Mark } from "./mark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Mark className="h-5 w-5 text-white" />
          <span className="text-sm font-medium tracking-tight text-white">Drumreel</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <AuthActions variant="bar" />
        </div>
      </div>
    </header>
  );
}
