import { site } from "@/lib/site";
import { signedIn } from "@/lib/signed-in";

const primary =
  "inline-flex items-center justify-center rounded-md bg-cream px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-white";
const quiet =
  "inline-flex items-center justify-center rounded-md border border-line px-4 py-2.5 text-sm text-cream-dim transition hover:border-cream-dim hover:text-cream";

export async function AuthActions({ variant }: { variant: "bar" | "primary" | "pair" }) {
  const on = await signedIn();
  if (on) {
    const className = variant === "bar" ? "rounded-md bg-cream px-3 py-1.5 text-[13px] font-medium text-ink hover:bg-white" : primary;
    return (
      <a href={`${site.app}/app`} className={className}>
        Dashboard
      </a>
    );
  }
  if (variant === "bar") {
    return (
      <>
        <a href={`${site.app}/login`} className="text-[13px] text-cream-dim hover:text-cream">
          Sign in
        </a>
        <a href={`${site.app}/signup`} className="rounded-md bg-cream px-3 py-1.5 text-[13px] font-medium text-ink hover:bg-white">
          Get started
        </a>
      </>
    );
  }
  if (variant === "primary") {
    return (
      <a href={`${site.app}/signup`} className={primary}>
        Get started
      </a>
    );
  }
  return (
    <>
      <a href={`${site.app}/signup`} className={primary}>
        Get started
      </a>
      <a href={`${site.app}/login`} className={quiet}>
        Sign in
      </a>
    </>
  );
}
