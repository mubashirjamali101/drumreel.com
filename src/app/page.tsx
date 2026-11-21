import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";
import { CopyLine } from "@/components/copy-line";
import { AgentShelf, SignInWindow } from "@/components/agent-shelf";
import { stories } from "@/lib/stories";

const asks: { title: string; text: string; poster: string; video?: string }[] = [
  {
    title: "The change",
    text: "Explain what shipped. The note and the film go out together.",
    poster: "/films/note.jpg",
  },
  {
    title: "The bug",
    text: "The report has no steps. Leave the broken state on screen.",
    poster: "/demos/filters.jpg",
    video: "/demos/filters.mp4",
  },
  {
    title: "How do I",
    text: "The same question comes back. Answer it on the page, and in writing.",
    poster: "/demos/signup.jpg",
    video: "/demos/signup.mp4",
  },
  {
    title: "Again",
    text: "The tutorial went stale. Film the page as it is now.",
    poster: "/demos/gallery.jpg",
    video: "/demos/gallery.mp4",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-8 sm:pt-24">
          <h1 className="display max-w-4xl text-[clamp(3.1rem,8.4vw,6.4rem)] leading-[0.9] text-white">
            They asked for a video.
          </h1>
          <p className="mt-6 max-w-xl text-[19px] leading-snug text-white/70 sm:text-[24px]">
            Write the note they can send. Film the real page in the same reply.
          </p>
          <div className="mt-8">
            <AuthActions variant="primary" />
          </div>

          <div id="film" className="relative mt-12 scroll-mt-20 sm:mt-16">
            <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_62%)]" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101116] shadow-[0_50px_140px_-48px_rgba(0,0,0,0.95)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <p className="ml-2 truncate font-mono text-[12px] text-white/45">app.drumreel.com</p>
              </div>
              <div className="grid lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
                <div id="talk" className="flex flex-col justify-between gap-6 border-b border-white/10 px-5 py-6 sm:px-7 sm:py-8 lg:border-r lg:border-b-0">
                  <div className="space-y-4">
                    <p className="ml-auto max-w-[22rem] rounded-2xl bg-white/10 px-4 py-3 text-[15px] leading-relaxed">
                      They asked for a video of the Thursday review. Write what I can send, then film it.
                    </p>
                    <div className="max-w-[24rem] text-[15px] leading-relaxed text-white/85">
                      <p>Ship Friday is filed. The board shows the review.</p>
                      <p className="mt-4 text-white/50">Send this:</p>
                      <p className="mt-1">The Thursday review is filed. The page stops on the board.</p>
                    </div>
                  </div>
                  <p className="font-mono text-[12px] text-white/40">The note, then the film.</p>
                </div>
                <video
                  className="aspect-video w-full bg-black object-cover"
                  poster="/films/board.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/films/marlow.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="asks" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-8 sm:py-28">
          <h2 className="display max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.94] text-white">
            Four asks. The same reply.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-snug text-white/60 sm:text-[20px]">
            A change, a bug, a how-do-I, or a tutorial that went stale.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {asks.map((ask) => (
              <li key={ask.title} className="overflow-hidden rounded-3xl border border-white/10 bg-black">
                {ask.video ? (
                  <video
                    className="aspect-video w-full object-cover"
                    poster={ask.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={ask.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={ask.poster} alt="" className="aspect-video w-full object-cover" />
                )}
                <div className="px-5 py-5 sm:px-6">
                  <p className="text-[20px] tracking-tight text-white">{ask.title}</p>
                  <p className="mt-1 text-[15px] leading-snug text-white/55 sm:text-[16px]">{ask.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="stories" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-8 sm:px-8 sm:py-16">
          <h2 className="display max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.94] text-white">
            Two teams. The same ask.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-snug text-white/60 sm:text-[20px]">
            A library of walkthroughs that would not stay true. A film for every change.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {stories.map((story) => (
              <li key={story.slug}>
                <Link
                  href={`/stories/${story.slug}`}
                  className="block overflow-hidden rounded-3xl border border-white/10 bg-[#101116] transition hover:border-white/25"
                >
                  <div className="px-5 py-6 sm:px-6 sm:py-7">
                    <p className="text-[13px] text-white/45">{story.kicker}</p>
                    <p className="mt-3 text-[24px] leading-tight tracking-tight text-white sm:text-[28px]">
                      {story.title}
                    </p>
                    <p className="mt-3 max-w-md text-[15px] leading-snug text-white/55 sm:text-[16px]">{story.lede}</p>
                    <p className="mt-6 text-[14px] text-white">Read the story</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="agents" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-8 sm:px-8 sm:py-16">
          <h2 className="display max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.94] text-white">
            One line for the agent you already use.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-snug text-white/60 sm:text-[20px]">
            No MCP setup. The browser opens. You sign in.
          </p>
          <AgentShelf />
          <div className="mt-8 grid items-start gap-4 sm:mt-10 lg:grid-cols-[1.15fr_0.85fr]">
            <CopyLine />
            <SignInWindow />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-16 pb-[max(5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-24 sm:pb-28">
          <h2 className="display text-[clamp(3.4rem,12vw,7rem)] leading-[0.9] text-white">Drumreel.</h2>
          <div className="mt-8">
            <AuthActions variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
