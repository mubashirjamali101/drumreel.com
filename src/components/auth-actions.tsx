import { site } from "@/lib/site";
import { signedIn } from "@/lib/signed-in";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-[#07080c] transition hover:bg-white/85";
const btnQuiet =
  "inline-flex items-center justify-center text-[15px] text-white/70 transition hover:text-white";

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
          className="inline-flex items-center rounded-full bg-white px-3.5 py-1 text-[13px] font-medium text-[#07080c] transition hover:bg-white/85"
        >
          Open Drumreel
        </a>
      );
    }
    return (
      <a href={`${site.app}/app`} className={`${btnPrimary} ${className}`}>
        Open Drumreel
      </a>
    );
  }

  if (variant === "bar") {
    return (
      <div className="flex items-center gap-3">
        <a
          href={`${site.app}/login`}
          className="hidden text-[13px] text-white/65 transition hover:text-white sm:inline"
        >
          Sign in
        </a>
        <a
          href={`${site.app}/signup`}
          className="inline-flex h-8 items-center rounded-full bg-white px-3 text-[13px] font-medium whitespace-nowrap text-[#07080c] transition hover:bg-white/85 sm:px-3.5"
        >
          <span className="sm:hidden">Try</span>
          <span className="hidden sm:inline">Try Drumreel</span>
        </a>
      </div>
    );
  }

  if (variant === "primary") {
    return (
      <a href={`${site.app}/signup`} className={`${btnPrimary} ${className}`}>
        Try Drumreel
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-5 ${className}`}>
        <a href={`${site.app}/signup`} className={btnPrimary}>
          Try Drumreel
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
      </a>
      <a href={`${site.app}/login`} className={btnQuiet}>
        Sign in
      </a>
    </div>
  );
}
