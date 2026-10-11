import Image from "next/image";
import { Mic, UserCheck, Sparkles, Volume2, ShieldCheck } from "lucide-react";
import { hosts, voices } from "@/lib/site";

export function VoicesSection() {
  return (
    <section id="voices" className="py-24 sm:py-32 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 mb-4">
            <Mic className="h-3.5 w-3.5" />
            Neural Narration & AI Presenters
          </div>
          <h2 className="display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Give your product a voice and a human face.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-dim leading-relaxed">
            Choose from neural ElevenLabs voices for narration, and add an AI talking presenter avatar in the corner to guide your users through complex flows.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Voices Showcase */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Mic className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">ElevenLabs Studio Voices</h3>
                <p className="text-xs text-neutral-400">Mastered on final video export with dynamic loudness leveling</p>
              </div>
            </div>

            <div className="space-y-3">
              {voices.map((v) => (
                <div
                  key={v.id}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-black/40 p-3.5 transition-all hover:border-white/15"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={v.file}
                      alt={v.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover border border-white/15"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{v.name}</p>
                      <p className="text-xs text-neutral-400">{v.tone} • English (US/UK)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-purple-500/10 px-2 py-1 text-[11px] font-mono text-purple-400 border border-purple-500/20">
                      Neural HD
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presenter Avatars Showcase */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <UserCheck className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">Circular Presenter Avatars</h3>
                <p className="text-xs text-neutral-400">Position in any corner (bottom-right, bottom-left, top-right)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {hosts.map((h) => (
                <div
                  key={h.id}
                  className="flex flex-col items-center rounded-xl border border-white/5 bg-black/40 p-4 text-center transition-all hover:border-white/15"
                >
                  <div className="relative mb-2.5">
                    <Image
                      src={h.file}
                      alt={h.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover border-2 border-white/20 shadow-md"
                    />
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-black" />
                  </div>
                  <p className="text-sm font-bold text-white">{h.name}</p>
                  <p className="text-xs text-neutral-400">{h.role} Presenter</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
