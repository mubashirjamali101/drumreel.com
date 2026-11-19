const agents = [
  { id: "claude", name: "Claude Code", face: "#e8d3c4", ink: "#2a1c14" },
  { id: "codex", name: "Codex", face: "#17191c", ink: "#f4f1ea" },
  { id: "anti", name: "Antigravity", face: "#d5e4f2", ink: "#16202b" },
  { id: "cursor", name: "Cursor", face: "#e4def4", ink: "#221c2e" },
] as const;

function Glyph({ id, ink }: { id: (typeof agents)[number]["id"]; ink: string }) {
  if (id === "claude") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <circle cx="24" cy="24" r="7" fill={ink} />
        <path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l6 6M31 31l6 6M37 11l-6 6M17 31l-6 6" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "codex") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <rect x="7" y="11" width="34" height="26" rx="6" stroke={ink} strokeWidth="2.2" fill="none" />
        <path d="M16 22l5 4-5 4" stroke={ink} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 30h8" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "anti") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <path d="M8 34c6-12 10-16 16-16s10 4 16 16" stroke={ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M14 28c4-8 7-10 10-10s6 2 10 10" stroke={ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="14" r="2.4" fill={ink} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      <path d="M14 8l22 16-10 2-6 12-6-30z" fill={ink} />
    </svg>
  );
}

export function AgentShelf() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {agents.map((agent) => (
        <li
          key={agent.id}
          className="flex min-h-[148px] flex-col justify-between rounded-[28px] p-4 sm:min-h-[176px] sm:p-5"
          style={{ background: agent.face, color: agent.ink }}
        >
          <Glyph id={agent.id} ink={agent.ink} />
          <p className="text-[15px] font-medium tracking-tight sm:text-[16px]">{agent.name}</p>
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
