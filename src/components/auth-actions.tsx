import { site } from "@/lib/site";
import { signedIn } from "@/lib/signed-in";
import { ArrowRight } from "lucide-react";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-white/10 transition-all hover:bg-neutral-100 hover:shadow-white/20 active:scale-[0.98]";
const btnQuiet =
  "inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-cream-dim transition-all hover:border-white/20 hover:bg-white/10 hover:text-white";

export async function AuthActions({
  variant,
  className = "",
}: {
  variant: "bar" | "primary" | "pair" | "hero";
  className?: string;
}) {
  const on = await signedIn();
  if (on) {
    if (variant === "bar") {
      return (
        <a
          href={`${site.app}/app`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-100 shadow-xs"
        >
          Open Drumreel
        </a>
      );
    }
    return (
      <a href={`${site.app}/app`} className={`${btnPrimary} ${className}`}>
        Open Drumreel
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  if (variant === "bar") {
    return (
      <div className="flex items-center gap-3">
        <a
          href={`${site.app}/login`}
          className="text-xs font-medium text-cream-dim transition hover:text-white"
        >
          Sign in
        </a>
        <a
          href={`${site.app}/signup`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-100 shadow-xs"
        >
          Try Drumreel
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    );
  }

  if (variant === "primary") {
    return (
      <a href={`${site.app}/signup`} className={`${btnPrimary} ${className}`}>
        Try Drumreel
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
        <a href={`${site.app}/signup`} className={btnPrimary}>
          Try Drumreel
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#work" className={btnQuiet}>
          See the work
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={`${site.app}/signup`} className={btnPrimary}>
        Try Drumreel
        <ArrowRight className="h-4 w-4" />
      </a>
      <a href={`${site.app}/login`} className={btnQuiet}>
        Sign in
      </a>
    </div>
  );
}
