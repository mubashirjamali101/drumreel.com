import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { AuthActions } from "./auth-actions";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/[0.08] relative overflow-hidden bg-black">
      {/* Ambient Radial Spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-emerald-500/10 blur-[130px] rounded-full -z-10" />

      <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black p-10 sm:p-16 backdrop-blur-2xl shadow-2xl relative ring-1 ring-white/10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Open a chat
          </div>

          <h2 className="display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Tell it what you need. Ask it to record when you want a video.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            The thread stays open. A recording of the live page shows up in the same place as the answer.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <AuthActions variant="pair" />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 border-t border-white/5 pt-8">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              Same chat for answers and videos
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Records the page you name
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              Pointer and typing stay human
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
