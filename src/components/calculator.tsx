"use client";

import { useState } from "react";
import { Clock, TrendingUp, Sparkles, DollarSign } from "lucide-react";
import { site } from "@/lib/site";

export function RoiCalculator() {
  const [videosPerMonth, setVideosPerMonth] = useState(12);

  // Constants based on real user workflows:
  // Manual Loom takes ~35 minutes per video (scripting, recording, 4 retakes, editing, trimming)
  // Drumreel takes ~2 minutes per video (type prompt, cloud runs asynchronously)
  const manualHoursPerMonth = Math.round((videosPerMonth * 35) / 60);
  const drumreelHoursPerMonth = Math.round((videosPerMonth * 2) / 60);
  const hoursSaved = Math.max(1, manualHoursPerMonth - drumreelHoursPerMonth);
  // Average blended tech hourly rate ($85/hr for engineers/PMs/DevRel)
  const estimatedCostSaved = hoursSaved * 85;

  return (
    <section className="py-20 sm:py-28 border-t border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-neutral-950 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: Slider Controls */}
            <div className="w-full lg:max-w-md space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20 mb-3">
                  <TrendingUp className="h-3 w-3" />
                  ROI Calculator
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Calculate your team’s time saved
                </h3>
                <p className="mt-2 text-sm text-cream-dim leading-relaxed">
                  How many product demos, changelog walkthroughs, or onboarding videos does your team create each month?
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm font-semibold mb-3">
                  <span className="text-neutral-300">Videos per month</span>
                  <span className="text-2xl font-bold text-indigo-400 font-mono">{videosPerMonth} videos</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="50"
                  step="1"
                  value={videosPerMonth}
                  onChange={(e) => setVideosPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono">
                  <span>3 / mo (Solo founder)</span>
                  <span>25 / mo (Growth team)</span>
                  <span>50 / mo (Scale)</span>
                </div>
              </div>
            </div>

            {/* Right: Results Display */}
            <div className="w-full lg:max-w-sm rounded-2xl border border-white/10 bg-black/60 p-6 sm:p-8 space-y-6 text-center">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Total Engineering Time Saved</span>
                <div className="mt-2 text-4xl sm:text-5xl font-extrabold text-white font-mono flex items-center justify-center gap-2">
                  <span>{hoursSaved}</span>
                  <span className="text-xl font-normal text-cream-dim">hours/mo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                <div className="rounded-xl bg-white/[0.03] p-3 border border-white/5">
                  <span className="text-neutral-400 block text-[11px]">With Loom</span>
                  <span className="text-base font-bold text-red-400 font-mono mt-0.5 block">~{manualHoursPerMonth} hrs</span>
                </div>
                <div className="rounded-xl bg-indigo-500/10 p-3 border border-indigo-500/20">
                  <span className="text-indigo-300 block text-[11px]">With Drumreel</span>
                  <span className="text-base font-bold text-emerald-400 font-mono mt-0.5 block">&lt; 1 hr</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-neutral-400">
                  Equivalent to <span className="text-white font-semibold">${estimatedCostSaved.toLocaleString()}</span> in recovered engineering & product focus.
                </p>
                <a
                  href={`${site.app}/signup`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-100 shadow-md"
                >
                  Start Saving Time Today →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
