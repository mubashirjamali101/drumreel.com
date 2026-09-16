export function LiveRun() {
  const lines = [
    ["//", "drumreel · live run"],
    ["explore", "https://staging.acme.app"],
    ["mapped", "14 pages · same origin"],
    ["author", "scenario.yaml  ·  once"],
    ["rehearse", "12 / 12 steps dry-run"],
    ["record", "chromium + ffmpeg"],
    ["voice", "rachel  ·  elevenlabs multilingual v2"],
    ["avatar", "sarah  ·  pip bottom-right"],
    ["write", "acme-onboarding.mp4"],
    ["//", "script saved · re-record without a new planner pass"],
  ] as const;

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-ink-2 font-mono text-[12px] leading-6 text-cream-dim">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2 text-[11px]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cream" />
        agent · still running
      </div>
      <ol className="space-y-0.5 px-4 py-4">
        {lines.map(([k, v], i) => (
          <li key={i} className="flex gap-4">
            <span className="w-16 shrink-0 text-cream/50">{k}</span>
            <span className="text-cream">{v}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
