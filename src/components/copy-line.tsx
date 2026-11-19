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
    <div className="rounded-[28px] bg-white p-5 text-left text-[#1d1d1f] sm:p-7">
      <div>
        <p className="text-[12px] tracking-tight text-[#6e6e73]">The line</p>
        <p className="mt-3 text-[16px] leading-relaxed break-words sm:text-[18px]">{agentLine}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#1d1d1f] px-5 text-[15px] font-medium text-white transition hover:bg-black sm:w-fit"
      >
        {copied ? "Copied" : "Copy the line"}
      </button>
    </div>
  );
}
