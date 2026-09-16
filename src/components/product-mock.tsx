export function ProductMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3d3330]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3d3330]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3d3330]" />
        <p className="ml-3 text-xs text-cream-dim">Studio · New walkthrough</p>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 p-6 md:p-8">
          <label className="block text-xs uppercase tracking-[0.16em] text-cream-dim">Public staging URL</label>
          <div className="rounded-lg border border-line bg-ink px-4 py-3 font-mono text-sm text-amber-2">
            https://staging.acme.app
          </div>
          <label className="block text-xs uppercase tracking-[0.16em] text-cream-dim">Brief</label>
          <div className="rounded-lg border border-line bg-ink px-4 py-4 text-sm leading-relaxed text-cream-dim">
            Log in with the demo account. Search <span className="text-cream">John Doe</span>. Open the
            profile. Send a message that says “Welcome to Acme.” Stay on that origin.
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-cream-dim">
            <span className="rounded-full border border-line px-3 py-1">Voiceover off</span>
            <span className="rounded-full border border-line px-3 py-1">Avatar off</span>
            <span className="rounded-full border border-line px-3 py-1">~25 credits reserved</span>
          </div>
          <div className="pt-2">
            <span className="inline-flex rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink">
              Record walkthrough
            </span>
          </div>
        </div>
        <div className="border-t border-line bg-ink p-6 md:border-l md:border-t-0 md:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-cream-dim">Live run</p>
          <ol className="mt-5 space-y-4 text-sm">
            {[
              ["Exploring", "Mapping live pages"],
              ["Authoring", "Writing the scenario"],
              ["Recording", "Filming the flow"],
              ["Ready", "MP4 in your library"],
            ].map(([phase, detail], i) => (
              <li key={phase} className="flex gap-3">
                <span
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full ${i < 3 ? "bg-amber" : "bg-cream-dim/40"}`}
                />
                <span>
                  <span className="text-cream">{phase}</span>
                  <span className="block text-cream-dim">{detail}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-xs text-cream-dim">Typical public site: 8–25 minutes. Hard cap 45.</p>
        </div>
      </div>
    </div>
  );
}
