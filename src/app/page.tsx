import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";
import { CopyLine } from "@/components/copy-line";
import { AgentShelf, SignInWindow } from "@/components/agent-shelf";

const moments = ["/films/board.jpg", "/films/note.jpg", "/films/approved.jpg"];

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <section className="px-4 pb-4 pt-16 text-center sm:px-8 sm:pt-28">
          <h1 className="display mx-auto max-w-[100%] text-[clamp(2.5rem,11vw,7rem)] leading-[0.92] text-[#1d1d1f]">
            Approved.
          </h1>
          <p className="mx-auto mt-4 max-w-md px-2 text-[16px] leading-relaxed text-[#6e6e73] sm:mt-5 sm:text-[21px]">
            Ship Friday. Filed with the team.
          </p>
        </section>

        <section id="film" className="px-0 pb-14 sm:px-8 sm:pb-28">
          <video
            className="mx-auto aspect-video w-full min-w-0 max-w-6xl bg-[#1d1d1f] object-cover sm:rounded-[28px] sm:shadow-[0_40px_80px_-48px_rgba(0,0,0,0.55)]"
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

        <section className="pb-8 sm:pb-16">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {moments.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="aspect-video w-[min(82vw,20rem)] shrink-0 snap-start rounded-3xl object-cover"
              />
            ))}
          </div>
          <div className="mx-auto hidden max-w-6xl gap-6 px-8 sm:grid md:grid-cols-3">
            {moments.map((src) => (
              <img key={src} src={src} alt="" className="aspect-video w-full rounded-3xl object-cover" />
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-20">
            <img src="/films/project.jpg" alt="" className="aspect-video w-full rounded-3xl object-cover sm:rounded-[28px]" />
          </div>
        </section>

        <section id="talk" className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-28">
            <h2 className="display max-w-3xl text-[clamp(2.6rem,9vw,5.5rem)] leading-[0.95] text-[#1d1d1f]">
              The speaking agent.
            </h2>

            <div className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-[0_30px_70px_-46px_rgba(0,0,0,0.45)] sm:mt-12">
              <div className="border-b border-black/[0.06] px-4 py-3.5 sm:px-6">
                <p className="text-[13px] font-medium">Drumreel</p>
              </div>
              <div className="space-y-5 px-4 py-6 sm:px-8 sm:py-8">
                <p className="ml-auto max-w-[34rem] rounded-[22px] bg-[#f5f5f7] px-4 py-3 text-[15px] leading-relaxed sm:text-[16px]">
                  Record the Thursday review. Open Northline, leave Ship Friday, and stop on Approved.
                </p>
                <div className="max-w-[40rem] text-[15px] leading-relaxed sm:text-[16px]">
                  <p>Recording Marlow. I'll stop when the page says Approved.</p>
                  <video
                    className="mt-4 aspect-video w-full rounded-2xl bg-[#1d1d1f] object-cover"
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
          </div>
        </section>

        <section id="agents" className="bg-[#1d1d1f] text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
            <h2 className="display text-[clamp(2.6rem,9vw,5.5rem)] leading-[0.95]">One line.</h2>
            <p className="mt-4 text-[17px] leading-snug text-white/70 sm:text-[21px]">
              <span className="block sm:inline">The agent you already use.</span>{" "}
              <span className="block sm:inline">No MCP setup.</span>
            </p>
            <AgentShelf />
            <div className="mt-8 grid items-start gap-4 sm:mt-10 lg:grid-cols-[1.15fr_0.85fr]">
              <CopyLine />
              <SignInWindow />
            </div>
          </div>
        </section>

        <section className="px-4 py-20 text-center pb-[max(5rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-36">
          <h2 className="display text-[clamp(3.25rem,12vw,6rem)] text-[#1d1d1f]">Drumreel.</h2>
          <div className="mt-8 flex justify-center">
            <AuthActions variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
