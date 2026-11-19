import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";
import { WorkExamples } from "@/components/work-examples";

const capabilities = [
  {
    n: "01",
    title: "Think it through",
    body: "Ask the way you would ask a colleague who already knows the product. Get a draft, a plan, or a decision you can send.",
  },
  {
    n: "02",
    title: "Show the real thing",
    body: "When the work is on a page, Drumreel opens that page and records it. The pointer moves. The typing is a person’s. The file comes back in the thread.",
  },
  {
    n: "03",
    title: "Start further along",
    body: "It keeps the shape of the sites you have opened. The next task does not begin on a blank tab.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:px-8 sm:pt-28 sm:pb-28">
          <h1 className="display max-w-4xl text-5xl text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
            Give Drumreel the task.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            More than an answer. A draft, a plan, or a recording of the live product, in one conversation.
          </p>
          <div className="mt-10">
            <AuthActions variant="hero" />
          </div>
        </section>

        <section id="work" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <WorkExamples />
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:px-8 sm:py-28 md:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.n}>
                <p className="text-xs tracking-[0.14em] text-neutral-500">{item.n}</p>
                <h2 className="display mt-4 text-3xl text-white">{item.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
            <h2 className="display max-w-3xl text-4xl text-white sm:text-6xl">Start with the task.</h2>
            <div className="mt-10">
              <AuthActions variant="primary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
