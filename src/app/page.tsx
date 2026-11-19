import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";
import { WorkExamples } from "@/components/work-examples";

const capabilities = [
  {
    title: "Think it through",
    body: "Ask the way you would ask a colleague who already knows the product. A draft, a plan, or a decision comes back ready to use.",
  },
  {
    title: "Show the real page",
    body: "When the work is on a site, Drumreel opens that site and records it. The pointer moves. The typing is a person’s. The file returns in the thread.",
  },
  {
    title: "Remember the place",
    body: "The shape of a site stays with your account. The next task starts further along, not on a blank tab.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="px-5 pb-24 pt-16 text-center sm:px-8 sm:pt-24">
          <h1 className="display mx-auto max-w-4xl text-[44px] leading-[1.02] text-[#1d1d1f] sm:text-7xl lg:text-[80px]">
            Give Drumreel the task.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[19px] leading-relaxed text-[#6e6e73] sm:text-[21px]">
            A draft, a plan, or a recording of the live product. One conversation.
          </p>
          <div className="mt-8 flex justify-center">
            <AuthActions variant="hero" />
          </div>
          <div className="mt-16 sm:mt-20">
            <WorkExamples />
          </div>
        </section>

        <section className="border-t border-black/[0.08]">
          <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 md:grid-cols-3 md:py-32">
            {capabilities.map((item) => (
              <div key={item.title}>
                <h2 className="display text-[28px] leading-tight text-[#1d1d1f]">{item.title}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-[#6e6e73]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1d1d1f] text-white">
          <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32">
            <h2 className="display text-4xl leading-tight sm:text-6xl">It records the page you mean.</h2>
            <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-white/70">
              Not a generated clip. The live site, with a moving pointer and real typing.
            </p>
            <video
              className="mt-12 aspect-video w-full rounded-2xl bg-black object-cover"
              poster="/demos/signup.jpg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/demos/signup.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="px-5 py-28 text-center sm:py-36">
          <h2 className="display text-5xl text-[#1d1d1f] sm:text-7xl">Start with the task.</h2>
          <div className="mt-8 flex justify-center">
            <AuthActions variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
