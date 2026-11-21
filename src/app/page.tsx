import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";
import { CopyLine } from "@/components/copy-line";
import { AgentShelf, SignInWindow } from "@/components/agent-shelf";

const moments = ["/films/board.jpg", "/films/note.jpg", "/films/approved.jpg"];

const rows = [
  { n: "01", title: "The ask", text: "They wanted a video of the change." },
  { n: "02", title: "The note", text: "Written in full, ready to send." },
  { n: "03", title: "The film", text: "Recorded on the real page, in that same reply." },
];

const asks = [
  { n: "01", title: "The change", text: "Explain what shipped. The note and the film go out together." },
  { n: "02", title: "The bug", text: "The report has no steps. Leave the broken state on screen." },
  { n: "03", title: "How do I", text: "The same question comes back. Answer it on the page, and in writing." },
  { n: "04", title: "Again", text: "The tutorial went stale. Film the page as it is now." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-8 sm:pt-20">
          <p className="font-mono text-[13px] text-white/45">// film</p>
          <h1 className="display mt-4 max-w-5xl text-[clamp(3.4rem,12vw,7.4rem)] leading-[0.9] text-white">
            Approved.
          </h1>
          <p className="mt-5 max-w-xl text-[18px] leading-snug text-white/60 sm:text-[22px]">
            Ship Friday. Filed with the team.
          </p>
        </section>

        <section id="film" className="px-4 pb-10 sm:px-8 sm:pb-16">
          <video
            className="mx-auto aspect-video w-full min-w-0 max-w-6xl rounded-2xl border border-white/10 bg-black object-cover"
            poster="/films/board.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src="/films/marlow.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-8">
          <ul className="border-t border-white/10">
            {rows.map((row) => (
              <li
                key={row.n}
                className="grid gap-2 border-b border-white/10 py-5 sm:grid-cols-[4rem_14rem_1fr] sm:items-baseline sm:gap-6 sm:py-6"
              >
                <span className="font-mono text-[13px] text-white/40">{row.n}</span>
                <span className="text-[18px] tracking-tight text-white sm:text-[20px]">{row.title}</span>
                <span className="text-[16px] leading-snug text-white/55 sm:text-[18px]">{row.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-12 sm:pb-20">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {moments.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="aspect-video w-[min(82vw,20rem)] shrink-0 snap-start rounded-2xl border border-white/10 object-cover"
              />
            ))}
          </div>
          <div className="mx-auto hidden max-w-6xl gap-4 px-8 sm:grid md:grid-cols-3">
            {moments.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="aspect-video w-full rounded-2xl border border-white/10 object-cover"
              />
            ))}
          </div>
        </section>

        <section id="asks" className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <p className="font-mono text-[13px] text-white/45">// asks</p>
          <h2 className="display mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.92] text-white">
            They asked for a video.
          </h2>
          <ul className="mt-8 border-t border-white/10">
            {asks.map((row) => (
              <li
                key={row.n}
                className="grid gap-2 border-b border-white/10 py-5 sm:grid-cols-[4rem_14rem_1fr] sm:items-baseline sm:gap-6 sm:py-6"
              >
                <span className="font-mono text-[13px] text-white/40">{row.n}</span>
                <span className="text-[18px] tracking-tight text-white sm:text-[20px]">{row.title}</span>
                <span className="text-[16px] leading-snug text-white/55 sm:text-[18px]">{row.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="talk" className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <p className="font-mono text-[13px] text-white/45">// talk</p>
          <h2 className="display mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.92] text-white">
            The speaking agent.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:mt-10">
            <div className="border-b border-white/10 px-4 py-3 sm:px-6">
              <p className="font-mono text-[12px] text-white/45">~/drumreel</p>
            </div>
            <div className="space-y-5 px-4 py-6 sm:px-8 sm:py-8">
              <p className="ml-auto max-w-[34rem] rounded-2xl bg-white/10 px-4 py-3 text-[15px] leading-relaxed sm:text-[16px]">
                They asked for a video of the Thursday review. Write what I can send, then film it.
              </p>
              <div className="max-w-[40rem] text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
                <p>Ship Friday is filed. The board shows Approved.</p>
                <p className="mt-4 text-white/55">Send this:</p>
                <p className="mt-1">The Thursday review is filed. The page stops on Approved.</p>
                <video
                  className="mt-4 aspect-video w-full rounded-xl border border-white/10 bg-black object-cover"
                  poster="/films/approved.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/films/marlow.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="agents" className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <p className="font-mono text-[13px] text-white/45">// agents</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.92] text-white">One line.</h2>
          <p className="mt-4 max-w-xl text-[17px] leading-snug text-white/60 sm:text-[21px]">
            The agent you already use. No MCP setup.
          </p>
          <AgentShelf />
          <div className="mt-8 grid items-start gap-4 sm:mt-10 lg:grid-cols-[1.15fr_0.85fr]">
            <CopyLine />
            <SignInWindow />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-8 pb-[max(5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-16 sm:pb-28">
          <p className="font-mono text-[13px] text-white/45">// drumreel</p>
          <h2 className="display mt-4 text-[clamp(3.4rem,12vw,7rem)] leading-[0.9] text-white">Drumreel.</h2>
          <div className="mt-8">
            <AuthActions variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
