import { Mark } from "./mark";

const agents = [
  { name: "Claude Code", src: "/logos/claude-code.svg", mark: "h-7 md:h-8" },
  { name: "Codex", src: "/logos/codex.svg", mark: "h-8 md:h-10" },
  { name: "Antigravity", src: "/logos/antigravity.svg", mark: "h-11 md:h-14" },
  { name: "Cursor", src: "/logos/cursor.svg", mark: "h-7 md:h-8" },
] as const;

export function AgentShelf() {
  return (
    <ul className="mt-10 grid grid-cols-2 gap-x-2 gap-y-5 border-y border-white/[0.12] py-6 md:mt-14 md:flex md:items-center md:justify-between md:py-8">
      {agents.map((agent) => (
        <li key={agent.name} className="flex items-center gap-2.5 md:gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center md:h-14 md:w-14">
            <img src={agent.src} alt="" className={`${agent.mark} w-auto max-w-full object-contain`} />
          </span>
          <span className="text-[14px] tracking-tight text-white/90 md:text-[16px]">{agent.name}</span>
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
        <Mark className="h-10 w-10" />
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
