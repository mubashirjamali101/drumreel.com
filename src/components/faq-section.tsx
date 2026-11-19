"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Is this only for making videos?",
    a: "No. You talk to it the way you talk to a chat assistant. A video starts when you ask for one.",
  },
  {
    q: "Where do my instructions go?",
    a: "Write them once under Instructions. Every new chat uses that note, so you do not repeat your tone, sites, or recording preferences.",
  },
  {
    q: "Is the video invented?",
    a: "No. Drumreel opens the page you name and records what is actually on screen, including the pointer and the typing.",
  },
  {
    q: "Can I ask for a video inside the chat?",
    a: "Yes. Say which page to open and what to show. The take stays in that thread.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  function toggle(idx: number) {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-400" />
            Questions
          </div>
          <h2 className="display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            What it is
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-dim">
            A chat assistant, with a recorder you can ask to use.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all hover:border-white/15 backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white bg-white/10" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed text-neutral-400 border-t border-white/5 mt-1 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
