const agents = [
  { name: "Claude Code", src: "/logos/claude-code.svg", mark: "h-11 sm:h-12" },
  { name: "Codex", src: "/logos/codex.svg", mark: "h-[3.25rem] sm:h-14" },
  { name: "Antigravity", src: "/logos/antigravity.svg", mark: "h-16 sm:h-[4.5rem]" },
  { name: "Cursor", src: "/logos/cursor.svg", mark: "h-11 sm:h-12" },
] as const;

export function AgentShelf() {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4 sm:gap-x-4">
      {agents.map((agent) => (
        <li key={agent.name} className="flex flex-col items-center text-center">
          <span className="flex h-[4.5rem] w-full items-center justify-center sm:h-20">
            <img src={agent.src} alt="" className={`${agent.mark} w-auto max-w-[92%] object-contain`} />
          </span>
          <p className="mt-3 text-[13px] tracking-tight text-white/75">{agent.name}</p>
        </li>
      ))}
    </ul>
  );
}

export function SignInWindow() {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white text-[#1d1d1f] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d8d8dc]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d8d8dc]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d8d8dc]" />
        <p className="ml-2 truncate text-[12px] text-[#6e6e73]">app.drumreel.com/login</p>
      </div>
      <div className="px-5 py-7 sm:px-7">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d1d1f]">
          <span className="h-3 w-3 rounded-full border border-white" />
        </div>
        <p className="mt-5 text-[22px] tracking-tight">Sign in</p>
        <div className="mt-5 h-11 rounded-2xl bg-[#f5f5f7]" />
        <div className="mt-3 flex h-11 items-center justify-center rounded-full bg-[#1d1d1f] text-[14px] font-medium text-white">
          Continue
        </div>
        <p className="mt-5 text-[13px] text-[#6e6e73]">The browser opens. You sign in. Done.</p>
      </div>
    </div>
  );
}
