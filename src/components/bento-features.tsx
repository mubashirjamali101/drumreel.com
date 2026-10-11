import Image from "next/image";
import { MousePointer, Mic, UserCheck, RefreshCw, Shield, Sparkles, Monitor, Layers } from "lucide-react";
import { hosts, voices } from "@/lib/site";

export function BentoFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Under the Hood
          </div>
          <h2 className="display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineered to feel 100% human.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-dim leading-relaxed">
            Headless browser automation usually looks robotic and glitchy. Drumreel is built on a custom physics engine that moves the mouse, types, and talks exactly like a real person.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 60fps Human Cursor Engine (7 cols) */}
          <div className="md:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <MousePointer className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-mono text-indigo-400 border border-indigo-500/20">
                60fps rAF Curve
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">Human Cursor Physics Engine</h3>
            <p className="mt-2 text-sm text-cream-dim leading-relaxed">
              No robotic teleportation or jerky straight lines. The engine executes cubic Bézier curves with natural acceleration, deceleration, and micro-overshoot before clicking.
            </p>

            {/* Visual simulation of cursor bezier curve */}
            <div className="mt-6 rounded-xl border border-white/10 bg-black/60 p-5 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                <span>Start (240, 180)</span>
                <span className="text-indigo-400">cubic-bezier(.22, 1, .36, 1)</span>
                <span>Target: #submit-btn</span>
              </div>

              {/* Graphic curve trail */}
              <div className="h-24 w-full relative flex items-center justify-between px-6 border border-dashed border-white/10 rounded-lg bg-neutral-950/60">
                <div className="h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                
                {/* SVG Bézier curve trail */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 40,60 Q 200,10 380,45 T 500,60"
                    fill="none"
                    stroke="rgba(99, 102, 241, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>

                <div className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-1 text-xs text-white shadow-md z-10">
                  <MousePointer className="h-3.5 w-3.5 fill-white" />
                  <span>Click: Save Changes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: ElevenLabs Neural Narration (5 cols) */}
          <div className="md:col-span-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Mic className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-mono text-purple-400 border border-purple-500/20">
                  ElevenLabs Studio
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">Neural Voiceover Narration</h3>
              <p className="mt-2 text-sm text-cream-dim leading-relaxed">
                Studio-grade narration automatically aligned to on-screen clicks. Choose from multiple professional voices with emotional inflection.
              </p>
            </div>

            {/* Voices Preview Pills */}
            <div className="mt-6 space-y-2">
              {voices.map((v) => (
                <div
                  key={v.id}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 px-3 py-2 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={v.file}
                      alt={v.name}
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <span className="font-semibold text-white block">{v.name}</span>
                      <span className="text-[10px] text-neutral-400">{v.tone}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    Neural TTS
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Circular Talking Presenter Avatars (5 cols) */}
          <div className="md:col-span-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <UserCheck className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400 border border-emerald-500/20">
                Picture-in-Picture
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">Talking Presenter Avatars</h3>
            <p className="mt-2 text-sm text-cream-dim leading-relaxed">
              Add a human face to your walkthroughs without turning on your webcam. Circular avatars in the corner anchor the viewer’s attention.
            </p>

            {/* Presenter Avatars Grid */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {hosts.map((h) => (
                <div
                  key={h.id}
                  className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-black/40 p-2.5"
                >
                  <Image
                    src={h.file}
                    alt={h.name}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">{h.name}</span>
                    <span className="text-[10px] text-neutral-400">{h.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: 1-Click UI Reruns & Parallel Fleet (7 cols) */}
          <div className="md:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <RefreshCw className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-mono text-amber-400 border border-amber-500/20">
                0 Planner Tokens
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">1-Click Updates on UI Changes</h3>
            <p className="mt-2 text-sm text-cream-dim leading-relaxed">
              When your frontend changes color, layout, or copy, your video doesn’t have to die. Click "Rerun" and Drumreel replays the verified scenario against the new UI, cutting a brand new video without re-prompting the AI.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Monitor className="h-4 w-4 text-indigo-400" />
                  <span>2x Retina High-DPI</span>
                </div>
                <p className="mt-1 text-neutral-400 text-[11px] leading-relaxed">
                  Recorded in 2x device scale factor so code, buttons, and typography render razor-sharp on high-res screens.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>Auto Credential Masking</span>
                </div>
                <p className="mt-1 text-neutral-400 text-[11px] leading-relaxed">
                  Passwords and secrets are redacted in headless frames automatically. Zero accidental credential leaks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
