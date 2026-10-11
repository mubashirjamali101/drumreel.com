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
            Get Started in Seconds
          </div>

          <h2 className="display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Stop recording demos. Start directing them.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Write two sentences describing what you want shown. Drumreel records the screen, speaks the script, and cuts your video in the cloud.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <AuthActions variant="pair" />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 border-t border-white/5 pt-8">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              Instant cloud browser launch
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              100% genuine DOM recording
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              ElevenLabs neural audio included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
