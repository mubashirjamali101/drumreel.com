import type { ReactNode } from "react";
import Image from "next/image";

function Window({
  title,
  light,
  children,
}: {
  title: string;
  light?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`glow-ring overflow-hidden rounded-2xl ${light ? "bg-white text-slate-900" : "bg-[#0b0b14] text-cream"}`}>
      <div className={`flex items-center gap-2 border-b px-4 py-2.5 ${light ? "border-slate-200 bg-slate-50" : "border-white/10"}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <p className={`ml-3 text-xs ${light ? "text-slate-500" : "text-cream-dim"}`}>{title}</p>
      </div>
      {children}
    </div>
  );
}

export function StudioShot() {
  return (
    <Window title="app.drumreel.com/app/runs/new" light>
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 px-5 py-4 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-200">
              Drumreel Studio HD · ElevenLabs + talking avatar
            </p>
            <p className="mt-2 text-lg font-semibold">Create AI video walkthrough</p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <Image src="/avatars/sarah.jpg" alt="Sarah" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
            <Image src="/avatars/adam.jpg" alt="Adam" width={36} height={36} className="-ml-2 h-9 w-9 rounded-full object-cover ring-2 ring-slate-900" />
            <div className="text-[11px] leading-tight">
              <p className="font-semibold">Sarah + Rachel</p>
              <p className="text-slate-400">PiP · Eleven Multilingual v2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 p-5 text-left text-sm">
        <div>
          <p className="text-[11px] font-semibold text-slate-500">Target web application URL</p>
          <p className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-indigo-700">
            https://staging.acme.app
          </p>
        </div>
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-indigo-900">AI voiceover narration</p>
            <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] text-white">Active</span>
          </div>
          <p className="mt-1 text-[11px] text-indigo-700">ElevenLabs Neural HD · Rachel · Calm & professional</p>
          <div className="mt-3 flex h-8 items-end gap-0.5">
            {Array.from({ length: 42 }).map((_, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-indigo-500"
                style={{ height: `${20 + ((i * 37) % 80)}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-emerald-900">Circular AI talking avatar</p>
            <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] text-white">Active</span>
          </div>
          <p className="mt-1 text-[11px] text-emerald-800">Sarah · Product host · bottom-right PiP</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-500">Walkthrough goal</p>
          <p className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-xs leading-relaxed text-slate-600">
            Log in with the demo account. Search John Doe. Open the profile. Send “Welcome to Acme.”
          </p>
        </div>
        <div className="flex justify-end">
          <span className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white">Record walkthrough</span>
        </div>
      </div>
    </Window>
  );
}

export function PlayerShot() {
  return (
    <Window title="Library · acme-onboarding.mp4">
      <div className="relative aspect-video overflow-hidden bg-black">
        <Image src="/product-ui.jpg" alt="Recorded product dashboard" fill className="object-cover opacity-90" sizes="(min-width: 1024px) 40rem, 100vw" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          REC · Chromium
        </div>
        <div className="absolute bottom-4 left-4 right-24 rounded-xl bg-black/55 px-3 py-2 text-xs text-white backdrop-blur">
          <p className="font-medium">Rachel · ElevenLabs</p>
          <p className="text-[11px] text-white/70">“Search John Doe, open the profile, send the welcome note.”</p>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="relative h-24 w-24 rounded-full ring-4 ring-emerald-400/80 ring-offset-2 ring-offset-black">
            <Image src="/avatars/sarah.jpg" alt="Talking avatar Sarah" fill className="rounded-full object-cover" />
          </div>
        </div>
      </div>
    </Window>
  );
}

export function RunShot() {
  const steps = [
    ["Exploring", "Mapping live pages", true],
    ["Authoring", "AI writes the scenario once", true],
    ["Rehearsing", "Dry-run clicks before film", true],
    ["Recording", "Chromium + ffmpeg", false],
  ] as const;
  return (
    <Window title="Run · 7m elapsed">
      <div className="grid gap-5 p-5 sm:grid-cols-2">
        <ol className="space-y-3 text-sm">
          {steps.map(([name, detail, done]) => (
            <li key={name} className="flex gap-3">
              <span className={`mt-1 h-2.5 w-2.5 rounded-full ${done ? "bg-emerald" : "bg-indigo animate-pulse"}`} />
              <span>
                <span className="block font-medium">{name}</span>
                <span className="text-xs text-cream-dim">{detail}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
          <p className="text-cream-dim">Saved scenario.yaml</p>
          <pre className="mt-2 overflow-hidden font-mono leading-relaxed text-indigo-200">
            {`start:
  url: https://staging.acme.app
steps:
  - click: Login
  - fill: john.doe
  - click: Profile`}
          </pre>
          <p className="mt-3 text-emerald">Re-record this script without a new planner run.</p>
        </div>
      </div>
    </Window>
  );
}
