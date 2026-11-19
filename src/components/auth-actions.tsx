import { site } from "@/lib/site";
import { signedIn } from "@/lib/signed-in";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-5 py-2.5 text-[15px] font-medium text-white transition hover:bg-black";
const btnQuiet =
  "inline-flex items-center justify-center text-[15px] text-[#0066cc] transition hover:underline";

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
          className="inline-flex items-center rounded-full bg-[#1d1d1f] px-3.5 py-1 text-[13px] font-medium text-white transition hover:bg-black"
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
          className="text-[13px] text-[#1d1d1f]/80 transition hover:text-[#1d1d1f]"
        >
          Sign in
        </a>
        <a
          href={`${site.app}/signup`}
          className="inline-flex items-center rounded-full bg-[#1d1d1f] px-3.5 py-1 text-[13px] font-medium text-white transition hover:bg-black"
        >
          Try Drumreel
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
