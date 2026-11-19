"use client";

import { useState } from "react";

type Screen = "board" | "project" | "approved";

const waiting = [
  { name: "Northline", piece: "Homepage, second pass", tone: "from-[#c4b49a] to-[#efe7dc]", live: true },
  { name: "Keel", piece: "Pricing, first look", tone: "from-[#9aabb8] to-[#e7eef2]", live: false },
  { name: "Arlo", piece: "Invite, type only", tone: "from-[#b7a3c9] to-[#f3eef6]", live: false },
];

export function MarlowStudio() {
  const [screen, setScreen] = useState<Screen>("board");
  const [note, setNote] = useState("");

  return (
    <div className="flex min-h-svh bg-[#f3efe8] text-[#1c1b19]">
      <aside className="hidden w-56 shrink-0 flex-col justify-between bg-[#1c1b19] px-5 py-6 text-[#f3efe8] sm:flex">
        <div>
          <p className="text-[15px] tracking-tight">Marlow</p>
          <nav className="mt-10 space-y-3 text-[13px] text-[#f3efe8]/70">
            <p className="text-[#f3efe8]">Today</p>
            <p>Reviews</p>
            <p>Library</p>
          </nav>
        </div>
        <p className="text-[12px] text-[#f3efe8]/50">Thursday</p>
      </aside>

      <main className="flex-1 px-6 py-8 sm:px-12 sm:py-12">
        {screen === "board" ? (
          <div>
            <p className="text-[13px] text-[#1c1b19]/55">Thursday review</p>
            <h1 className="mt-2 text-4xl tracking-tight sm:text-5xl">Three things waiting.</h1>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {waiting.map((item) => (
                <article key={item.name} className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-36px_rgba(0,0,0,0.45)]">
                  <div className={`h-40 bg-gradient-to-br ${item.tone}`} />
                  <div className="px-5 py-5">
                    <h2 className="text-lg">{item.name}</h2>
                    <p className="mt-1 text-[13px] text-[#1c1b19]/55">{item.piece}</p>
                    {item.live ? (
                      <button
                        type="button"
                        className="mt-5 rounded-full bg-[#1c1b19] px-4 py-2 text-[13px] text-[#f3efe8]"
                        onClick={() => setScreen("project")}
                      >
                        Open Northline
                      </button>
                    ) : (
                      <p className="mt-5 text-[13px] text-[#1c1b19]/35">Later today</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {screen === "project" ? (
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <button type="button" className="text-[13px] text-[#1c1b19]/55" onClick={() => setScreen("board")}>
                Today
              </button>
              <h1 className="mt-3 text-4xl tracking-tight sm:text-5xl">Northline</h1>
              <p className="mt-2 text-[15px] text-[#1c1b19]/55">Homepage, second pass</p>
              <div className="mt-8 overflow-hidden rounded-[28px] bg-white">
                <div className="h-72 bg-gradient-to-br from-[#d8c7b0] via-[#f7f1e8] to-[#8ea0ae] sm:h-96" />
                <div className="flex items-end justify-between px-6 py-5">
                  <div>
                    <p className="text-[13px] text-[#1c1b19]/45">Serif, wide measure</p>
                    <p className="mt-1 text-2xl tracking-tight">The coast, kept quiet.</p>
                  </div>
                  <p className="text-[13px] text-[#1c1b19]/45">02</p>
                </div>
              </div>
            </div>
            <aside className="rounded-[28px] bg-white px-6 py-6">
              <p className="text-[12px] uppercase tracking-[0.14em] text-[#1c1b19]/40">In review</p>
              <ul className="mt-6 space-y-4 text-[14px] leading-relaxed">
                <li>
                  <span className="text-[#1c1b19]/45">Ada</span>
                  <p>Keep the serif. The photograph can be wider.</p>
                </li>
                <li>
                  <span className="text-[#1c1b19]/45">Jon</span>
                  <p>Ship if the note is on the file.</p>
                </li>
              </ul>
              <label className="mt-8 block text-[13px] text-[#1c1b19]/55">
                Note for the team
                <input
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Note for the team"
                  className="mt-2 w-full rounded-2xl border border-black/10 px-3 py-3 text-[15px] text-[#1c1b19] outline-none"
                />
              </label>
              <button
                type="button"
                className="mt-4 w-full rounded-full bg-[#1c1b19] py-3 text-[14px] text-[#f3efe8]"
                onClick={() => setScreen("approved")}
              >
                Approve
              </button>
            </aside>
          </div>
        ) : null}

        {screen === "approved" ? (
          <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center">
            <p className="text-[13px] text-[#1c1b19]/55">Northline</p>
            <h1 className="mt-3 text-5xl tracking-tight sm:text-7xl">Approved.</h1>
            <p className="mt-6 max-w-md text-xl text-[#1c1b19]/70">
              {note.trim() ? note.trim() : "Ready for the team."}
            </p>
          </div>
        ) : null}
      </main>
    </div>
  );
}
