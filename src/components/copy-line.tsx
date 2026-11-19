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
    <div className="rounded-[28px] bg-[#1d1d1f] p-4 text-left text-white sm:p-6">
      <p className="text-[15px] leading-relaxed break-words sm:text-[17px]">{agentLine}</p>
      <button
        type="button"
        onClick={copy}
        className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-[15px] font-medium text-[#1d1d1f] transition hover:bg-[#f5f5f7] sm:w-auto"
      >
        {copied ? "Copied" : "Copy the line"}
      </button>
    </div>
  );
}
