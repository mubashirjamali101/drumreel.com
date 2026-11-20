import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";
import { CopyLine } from "@/components/copy-line";
import { AgentShelf, SignInWindow } from "@/components/agent-shelf";

const moments = ["/films/board.jpg", "/films/note.jpg", "/films/approved.jpg"];

const rows = [
  { n: "01", title: "The film", text: "Thursday review, on the real page." },
  { n: "02", title: "The speaking agent", text: "You talk. The recording comes back in the chat." },
  { n: "03", title: "One line", text: "Claude Code, Codex, Antigravity, Cursor, and the rest." },
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
                Record the Thursday review. Open Northline, leave Ship Friday, and stop on Approved.
              </p>
              <div className="max-w-[40rem] text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
                <p>Recording Marlow. I'll stop when the page says Approved.</p>
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
