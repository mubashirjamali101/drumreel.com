import { Check, X, Sparkles, Clock, RefreshCw, Layers, ShieldCheck, Video } from "lucide-react";

export function ComparisonSection() {
  const comparisonItems = [
    {
      feature: "Handling a stumble or mistake",
      loom: "Start over from the beginning. 5-7 retakes per video are common.",
      drumreel: "Autonomous 1-shot perfection. Deterministic script execution.",
    },
    {
      feature: "Camera & environment setup",
      loom: "Clean your desk, fix your hair, turn off Slack, check ring light.",
      drumreel: "Zero camera setup. Runs in headless cloud containers.",
    },
    {
      feature: "Time required from you",
      loom: "30-45 minutes wasted for every 2-minute feature tour.",
      drumreel: "15 seconds. Type what you want shown and close your laptop.",
    },
    {
      feature: "When your frontend UI updates",
      loom: "Video is immediately obsolete. You must re-record from scratch.",
      drumreel: "1-click re-run. Drumreel walks the new UI and cuts a fresh video.",
    },
    {
      feature: "Parallel production scale",
      loom: "1 recording at a time, strictly limited by human physical hours.",
      drumreel: "Queue 20 walkthroughs at once across our cloud worker fleet.",
    },
    {
      feature: "Voice & audio mastering",
      loom: "Background microphone noise, mouth clicks, room echo, filler words.",
      drumreel: "ElevenLabs neural studio voiceover with dynamic audio leveling.",
    },
    {
      feature: "Staging passwords & API keys",
      loom: "Accidentally exposed on screen unless manually edited out.",
      drumreel: "Automatic password masking and field redaction in the recording pipeline.",
    },
  ];

  return (
    <section id="comparison" className="relative border-y border-white/[0.08] bg-black/40 py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-indigo-600/10 blur-[140px] -z-10" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            The Loom Alternative for Software Teams
          </div>
          <h2 className="display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Why teams are replacing manual screen recordings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-dim leading-relaxed">
            Manual screen recording was designed for quick webcam messages, not polished software product walkthroughs.
            Drumreel automates the entire production pipeline.
          </p>
        </div>

        {/* Head-to-Head Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Left: The Old Way (Loom / Manual) */}
          <div className="rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-500/[0.03] to-transparent p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">The Old Way</span>
                <h3 className="text-xl font-bold text-white mt-1">Manual Recording (Loom)</h3>
              </div>
              <span className="rounded-full bg-red-500/10 p-2 text-red-400 border border-red-500/20">
                <X className="h-5 w-5" />
              </span>
            </div>

            <ul className="mt-6 space-y-5">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-neutral-300 block">{item.feature}</span>
                    <span className="text-neutral-400 text-xs mt-0.5 block leading-relaxed">{item.loom}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: The New Way (Drumreel Autonomous) */}
          <div className="relative rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.08] via-indigo-950/[0.05] to-transparent p-6 sm:p-8 backdrop-blur-xl shadow-2xl ring-1 ring-indigo-500/20">
            {/* Top highlight badge */}
            <div className="absolute -top-3 right-6 rounded-full bg-indigo-500 px-3 py-0.5 text-[11px] font-semibold text-white shadow-md">
              Zero Retakes
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-indigo-500/20">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">The Autonomous Way</span>
                <h3 className="text-xl font-bold text-white mt-1">Drumreel Studio</h3>
              </div>
              <span className="rounded-full bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
                <Check className="h-5 w-5" />
              </span>
            </div>

            <ul className="mt-6 space-y-5">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">{item.feature}</span>
                    <span className="text-neutral-300 text-xs mt-0.5 block leading-relaxed">{item.drumreel}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metric Callouts */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">0s</p>
            <p className="mt-1 text-xs text-neutral-400">Camera / Mic Setup Time</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400">100%</p>
            <p className="mt-1 text-xs text-neutral-400">Real Product DOM (No Hallucinations)</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">1-Click</p>
            <p className="mt-1 text-xs text-neutral-400">Instant UI Reruns on Code Change</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-purple-400">20x</p>
            <p className="mt-1 text-xs text-neutral-400">Parallel Cloud Worker Throughput</p>
          </div>
        </div>
      </div>
    </section>
  );
}
