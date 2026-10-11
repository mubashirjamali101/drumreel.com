"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Is the video AI-generated (like Sora or Runway)?",
    a: "No. Drumreel does not hallucinate pixels or invent software interfaces. A headless browser worker navigates your actual web application, clicks your buttons, fills out your inputs, and captures 100% genuine screen frames. What appears in the video is your real code and design.",
  },
  {
    q: "How is this different from Loom or Screen Studio?",
    a: "With Loom or Screen Studio, you must manually perform the entire walkthrough, talk into a microphone, avoid stumbling on words, and clean your desktop. If you make a mistake in minute 3, you either live with an amateur video or restart from scratch. With Drumreel, you write what you want to show and walk away. The recording is deterministic, smooth, and repeatable.",
  },
  {
    q: "What happens when our product UI updates next week?",
    a: "With Loom, any UI update renders your videos obsolete, forcing hours of manual re-recording. With Drumreel, you simply click 'Re-run' on the existing scenario. Our cloud worker replays the workflow against your updated staging URL and outputs a fresh, up-to-date video in 60 seconds with zero manual effort.",
  },
  {
    q: "How does Drumreel access private staging or password-protected apps?",
    a: "Drumreel can navigate login screens, accept session cookies, and authenticate test accounts on staging environments. Furthermore, Drumreel includes automatic password masking and credential blur filters to ensure sensitive tokens never leak in the final render.",
  },
  {
    q: "Can I record without a voice or without an avatar presenter?",
    a: "Yes. Both ElevenLabs neural voiceover and circular talking avatars are optional toggles. You can generate silent product GIFs, voice-only tutorials, or full picture-in-picture master videos depending on your audience.",
  },
  {
    q: "What video resolutions are supported?",
    a: "Recordings capture at high-DPI 2x Retina scaling. You can export in standard 720p HD (fast turnaround, lightweight file size) or 1080p Full HD (maximum clarity for marketing and presentations).",
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
            Common Questions
          </div>
          <h2 className="display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-dim">
            Everything you need to know about autonomous software demo recording.
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
