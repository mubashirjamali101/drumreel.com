import Image from "next/image";
import { Cta, CtaGhost } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FilmCard } from "@/components/film-card";
import { PromptStage } from "@/components/prompt-stage";
import { WaitlistForm } from "@/components/waitlist-form";
import { hosts, site, voices } from "@/lib/site";

const faqs = [
  {
    q: "How is this not Loom?",
    a: "You don’t have to click through the product or sit on camera. You write what to show. Drumreel sends back a finished video.",
  },
  {
    q: "What if I need another take?",
    a: "Ask for it. Same walkthrough, new video. You don’t start over from a blank recording.",
  },
  {
    q: "Can it talk and show a host?",
    a: "Yes, if you want. Pick a voice and a presenter, or leave both off. Your product stays the star.",
  },
  {
    q: "When can I use it?",
    a: "Soon. Join the waitlist and we’ll write when a seat opens.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:pt-24">
            <p className="text-[11px] tracking-[0.14em] text-cream-dim">coming soon</p>
            <h1 className="display mt-4 max-w-3xl text-5xl leading-[1.08] md:text-7xl">
              Write the prompt.
              <br />
              <span className="font-normal text-cream-dim">Get the video.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-cream-dim">
              You describe the flow. Drumreel films your live product, adds a host and a studio voice if you
              want, and sends the MP4.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta>Join waitlist</Cta>
              <CtaGhost href="#product">See the product</CtaGhost>
            </div>
            <div className="mt-14">
              <PromptStage />
            </div>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="max-w-2xl text-lg leading-relaxed text-cream-dim">
              Loom made you the camera operator. Drumreel is the crew. You write the prompt. You get a
              walkthrough of the real product — with a host and a voice, if you want. Keep Loom for the 5%
              that needs your face in a cafe.
            </p>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-6xl space-y-28 px-6 py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-[11px] tracking-[0.14em] text-cream-dim">01</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">You write it. We send the video.</h2>
              <p className="mt-4 text-cream-dim">
                A public link and a sentence are enough. Go do something else. The walkthrough shows up as an
                MP4.
              </p>
            </div>
            <FilmCard
              src="/demos/signup.mp4"
              poster="/demos/signup.jpg"
              avatar="/avatars/sarah.jpg"
              caption="signup-flow.mp4"
            />
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <FilmCard
              src="/demos/gallery.mp4"
              poster="/demos/gallery.jpg"
              avatar="/avatars/elena.jpg"
              caption="gallery-tour.mp4"
            />
            <div>
              <p className="text-[11px] tracking-[0.14em] text-cream-dim">02</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">A host and a voice. Not your webcam.</h2>
              <p className="mt-4 text-cream-dim">
                Your product fills the frame. A presenter sits in the corner. A studio voice talks over it.
                Optional, both of them.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.14em] text-cream-dim">hosts · voices</p>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <ul className="grid grid-cols-2 gap-4">
                {hosts.map((h) => (
                  <li key={h.id} className="flex items-center gap-3">
                    <Image src={h.file} alt={h.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                    <span>
                      <span className="block text-sm">{h.name}</span>
                      <span className="text-xs text-cream-dim">{h.role}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {voices.map((v) => (
                  <li key={v.id} className="flex items-center justify-between border-b border-line pb-3 text-sm">
                    <span className="flex items-center gap-3">
                      <Image src={v.file} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                      {v.name}
                    </span>
                    <span className="text-xs text-cream-dim">{v.tone.split(" · ")[0]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-[11px] tracking-[0.14em] text-cream-dim">03</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">A new take. Not a new afternoon.</h2>
              <p className="mt-4 text-cream-dim">
                Product moved? Ask for another take of the same walkthrough. You don’t sit through it again.
              </p>
            </div>
            <FilmCard
              src="/demos/filters.mp4"
              poster="/demos/filters.jpg"
              avatar="/avatars/alex.jpg"
              caption="filters-bugfix.mp4"
            />
          </div>
        </section>

        <section id="loom" className="border-y border-line">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <p className="text-[11px] tracking-[0.14em] text-cream-dim">vs loom</p>
            <h2 className="display mt-3 max-w-2xl text-4xl md:text-5xl">
              Ditch 95% of the Looms. Keep the ones that need you.
            </h2>
            <div className="mt-14 overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="text-cream-dim">
                    <th className="pb-4 font-normal"> </th>
                    <th className="pb-4 font-normal">Loom</th>
                    <th className="pb-4 font-normal text-cream">Drumreel</th>
                  </tr>
                </thead>
                <tbody className="text-cream-dim">
                  {[
                    ["On camera", "You", "Optional host"],
                    ["Who clicks", "You, every time", "Drumreel"],
                    ["Voice", "You, live", "Studio voice"],
                    ["A miss", "Start over", "Another take of the same walkthrough"],
                    ["After a release", "Out of date", "Film it again from the same prompt"],
                  ].map(([row, loom, us]) => (
                    <tr key={row} className="border-t border-line">
                      <td className="py-4 pr-6">{row}</td>
                      <td className="py-4 pr-6">{loom}</td>
                      <td className="py-4 text-cream">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-[11px] tracking-[0.14em] text-cream-dim">access</p>
          <h2 className="display mt-3 text-4xl">Pricing is coming soon.</h2>
          <p className="mt-4 max-w-lg text-cream-dim">
            No public plans yet. Join the waitlist. We’ll send a seat when Studio opens — not a drip campaign.
          </p>
        </section>

        <section id="faq" className="border-t border-line">
          <div className="mx-auto max-w-3xl px-6 py-28">
            <h2 className="display text-4xl">FAQ</h2>
            <dl className="mt-12 space-y-10">
              {faqs.map((item) => (
                <div key={item.q}>
                  <dt className="text-lg">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-cream-dim">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="waitlist" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <h2 className="display text-4xl md:text-5xl">Ready when you are.</h2>
            <p className="mt-4 max-w-md text-cream-dim">
              Drop a work email. We open Studio in waves.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
            <p className="mt-4 text-xs text-cream-dim">{site.email}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
