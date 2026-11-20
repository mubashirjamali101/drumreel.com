"use client";

import { useState } from "react";
import { agentLine } from "@/lib/agent-line";

export function CopyLine() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(agentLine);
    } catch {
      const area = document.createElement("textarea");
      area.value = agentLine;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 p-5 text-left sm:p-7">
      <p className="font-mono text-[12px] text-white/40">~/drumreel</p>
      <p className="mt-4 font-mono text-[15px] leading-relaxed break-words text-[#f4f4f5] sm:text-[16px]">
        {agentLine}
      </p>
      <button
        type="button"
        onClick={copy}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-[15px] font-medium text-[#07080c] transition hover:bg-white/85 sm:w-fit"
      >
        {copied ? "Copied" : "Copy the line"}
      </button>
    </div>
  );
}
