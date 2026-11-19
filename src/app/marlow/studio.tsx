"use client";

import { useState } from "react";

type Screen = "board" | "project" | "approved";

const queue = [
  {
    name: "Northline",
    piece: "Homepage, second pass",
    image: "/marlow/harbor.jpg",
    live: true,
  },
  {
    name: "Keel",
    piece: "Pricing, first look",
    image: "/marlow/coast.jpg",
    live: false,
  },
  {
    name: "Arlo",
    piece: "Invite, type only",
    image: "/marlow/steps.jpg",
    live: false,
  },
] as const;

export function MarlowStudio() {
  const [screen, setScreen] = useState<Screen>("board");
  const [note, setNote] = useState("");

  return (
    <div className="flex min-h-svh bg-[#efe8df] text-[#1c1916]">
      <aside className="hidden w-60 shrink-0 flex-col justify-between bg-[#1c1916] px-6 py-7 text-[#efe8df] md:flex">
        <div>
          <p className="text-[18px] tracking-tight">Marlow</p>
          <p className="mt-1 text-[12px] text-[#efe8df]/45">Studio</p>
          <nav className="mt-12 space-y-1 text-[14px]">
            <p className="rounded-xl bg-white/10 px-3 py-2 text-[#efe8df]">Today</p>
            <p className="px-3 py-2 text-[#efe8df]/55">Reviews</p>
            <p className="px-3 py-2 text-[#efe8df]/55">Library</p>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c4b49a] text-[12px] text-[#1c1916]">
            L
          </span>
          <div>
            <p className="text-[13px]">Leah</p>
            <p className="text-[12px] text-[#efe8df]/45">Thursday</p>
          </div>
        </div>
      </aside>

      <main className="flex-1">
        {screen === "board" ? (
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <p className="text-[13px] text-[#1c1916]/50">Thursday review</p>
            <h1 className="mt-2 max-w-xl text-4xl tracking-tight sm:text-6xl">Three things waiting.</h1>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#1c1916]/60">
              One pass left on the homepage. The other two can wait until this afternoon.
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {queue.map((item) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-[28px] bg-white shadow-[0_30px_60px_-40px_rgba(40,30,20,0.55)]"
                >
                  <img src={item.image} alt="" className="h-52 w-full object-cover" />
                  <div className="px-5 py-5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[18px] tracking-tight">{item.name}</h2>
                      <span className="text-[12px] text-[#1c1916]/40">{item.live ? "Now" : "Later"}</span>
                    </div>
                    <p className="mt-1 text-[13px] text-[#1c1916]/55">{item.piece}</p>
                    {item.live ? (
                      <button
                        type="button"
                        className="mt-5 rounded-full bg-[#1c1916] px-4 py-2.5 text-[13px] text-[#efe8df]"
                        onClick={() => setScreen("project")}
                      >
                        Open Northline
                      </button>
                    ) : (
                      <p className="mt-5 text-[13px] text-[#1c1916]/35">Later today</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {screen === "project" ? (
          <div className="grid min-h-svh lg:grid-cols-[1fr_340px]">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <button type="button" className="text-[13px] text-[#1c1916]/50" onClick={() => setScreen("board")}>
                Today
              </button>
              <div className="mt-6 overflow-hidden rounded-[32px] bg-[#f7f3ee]">
                <div className="flex items-center justify-between px-6 py-4 text-[13px]">
                  <p className="tracking-tight">Northline</p>
                  <p className="text-[#1c1916]/40">Stay · Journal · Visit</p>
                </div>
                <img src="/marlow/harbor.jpg" alt="" className="h-72 w-full object-cover sm:h-96" />
                <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.16em] text-[#1c1916]/40">Homepage</p>
                    <h1 className="mt-3 font-[Iowan_Old_Style,Palatino,Georgia,serif] text-4xl leading-tight tracking-tight sm:text-5xl">
                      The coast, kept quiet.
                    </h1>
                  </div>
                  <p className="self-end text-[15px] leading-relaxed text-[#1c1916]/65">
                    A house above the water, booked by the week. The second pass widens the photograph and leaves the serif alone.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 px-6 pb-6 sm:px-8 sm:pb-8">
                  <img src="/marlow/coast.jpg" alt="" className="h-36 w-full rounded-2xl object-cover sm:h-44" />
                  <img src="/marlow/steps.jpg" alt="" className="h-36 w-full rounded-2xl object-cover sm:h-44" />
                </div>
              </div>
            </div>

            <aside className="border-t border-black/5 bg-white px-6 py-8 lg:border-l lg:border-t-0 lg:px-7 lg:py-10">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#1c1916]/40">In review</p>
              <p className="mt-3 text-[15px]">Homepage, second pass</p>
              <ul className="mt-8 space-y-6 text-[14px] leading-relaxed">
                <li>
                  <p className="text-[12px] text-[#1c1916]/40">Ada · Design</p>
                  <p className="mt-1">Keep the serif. The photograph can be wider.</p>
                </li>
                <li>
                  <p className="text-[12px] text-[#1c1916]/40">Jon · Production</p>
                  <p className="mt-1">Ship if the note is on the file.</p>
                </li>
              </ul>
              <label className="mt-8 block text-[13px] text-[#1c1916]/55">
                Note for the team
                <input
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Note for the team"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f3ee] px-3 py-3 text-[15px] text-[#1c1916] outline-none"
                />
              </label>
              <button
                type="button"
                className="mt-4 w-full rounded-full bg-[#1c1916] py-3 text-[14px] text-[#efe8df]"
                onClick={() => setScreen("approved")}
              >
                Approve
              </button>
            </aside>
          </div>
        ) : null}

        {screen === "approved" ? (
          <div className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16">
            <p className="text-[13px] text-[#1c1916]/50">Northline · Homepage</p>
            <h1 className="mt-3 text-6xl tracking-tight sm:text-8xl">Approved.</h1>
            <p className="mt-6 max-w-lg text-2xl leading-snug text-[#1c1916]/75">
              {note.trim() ? note.trim() : "Ready for the team."}
            </p>
            <div className="mt-12 flex max-w-md items-center gap-4 rounded-3xl bg-white p-3 pr-5">
              <img src="/marlow/harbor.jpg" alt="" className="h-16 w-24 rounded-2xl object-cover" />
              <div>
                <p className="text-[14px]">Filed with the team</p>
                <p className="text-[13px] text-[#1c1916]/45">Second pass · Thursday</p>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
