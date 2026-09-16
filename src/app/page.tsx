import Image from "next/image";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FilmCard } from "@/components/film-card";
import { PromptStage } from "@/components/prompt-stage";
import { WaitlistForm } from "@/components/waitlist-form";
import { hosts, site, voices } from "@/lib/site";

const faqs = [
  {
    q: "Do you generate the video?",
    a: "No. We record your real app on screen. What you see is what happened — not a made-up clip.",
  },
  {
    q: "How is this not Loom?",
    a: "You don’t click through or sit on camera. You write what to show. You get a finished screen recording.",
  },
  {
    q: "Can I record more than one at a time?",
    a: "Yes. Queue several demos, lessons, or walkthroughs and they record in parallel.",
  },
  {
    q: "What can I record?",
    a: "Product demos, app tutorials, lessons, onboarding, and walkthroughs. If it’s on a public page, we can record it.",
  },
  {
    q: "Can it talk and show a host?",
    a: "If you want. Pick a voice and a presenter, or leave both off.",
  },
  {
    q: "When can I use it?",
    a: "Soon. Join the waitlist.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 lg:pt-14">
            <PromptStage />
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] tracking-[0.14em] text-cream-dim">coming soon</p>
                <h1 className="display mt-2 max-w-xl text-3xl leading-tight md:text-5xl">
                  Write a prompt.
                  <span className="font-normal text-cream-dim"> Get a screen recording.</span>
                </h1>
              </div>
              <Cta>Join waitlist</Cta>
            </div>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Demos", "Show the product without sitting on camera."],
              ["Tutorials", "App lessons and how-tos, recorded for you."],
              ["Walkthroughs", "Onboarding, features, bug fixes."],
              ["In parallel", "Several recordings at once. Not one after another."],
            ].map(([t, b]) => (
              <div key={t}>
                <h2 className="text-sm font-medium">{t}</h2>
                <p className="mt-2 text-sm text-cream-dim">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="product" className="mx-auto max-w-6xl space-y-24 px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FilmCard
              src="/demos/signup.mp4"
              poster="/demos/signup.jpg"
              avatar="/avatars/sarah.jpg"
              caption="Signup flow"
            />
            <div>
              <h2 className="display text-3xl md:text-4xl">We record it. We don’t invent it.</h2>
              <p className="mt-4 max-w-md text-cream-dim">
                Your real screens. Your real clicks. A video of what actually happened — not a generated fake.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="display text-3xl md:text-4xl">A host and a voice, if you want.</h2>
              <p className="mt-4 max-w-md text-cream-dim">
                Your product fills the frame. A presenter can sit in the corner. A voice can talk over it.
              </p>
            </div>
            <FilmCard
              src="/demos/gallery.mp4"
              poster="/demos/gallery.jpg"
              avatar="/avatars/elena.jpg"
              caption="Gallery tour"
            />
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

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FilmCard
              src="/demos/filters.mp4"
              poster="/demos/filters.jpg"
              avatar="/avatars/alex.jpg"
              caption="Filters walkthrough"
            />
            <div>
              <h2 className="display text-3xl md:text-4xl">Need another take? Ask.</h2>
              <p className="mt-4 max-w-md text-cream-dim">
                Same walkthrough, new video. You don’t sit through it again.
              </p>
            </div>
          </div>
        </section>

        <section id="loom" className="border-y border-line">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="display max-w-2xl text-3xl md:text-5xl">
              Keep Loom for the times you need your face.
            </h2>
            <div className="mt-12 overflow-x-auto">
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
                    ["Voice", "You, live", "Optional voice"],
                    ["A miss", "Start over", "Another take"],
                    ["Several at once", "One at a time", "Record in parallel"],
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

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="display text-3xl">Pricing is coming soon.</h2>
          <p className="mt-3 max-w-lg text-cream-dim">Join the waitlist. We’ll write when seats open.</p>
        </section>

        <section id="faq" className="border-t border-line">
          <div className="mx-auto max-w-3xl px-6 py-24">
            <h2 className="display text-3xl">FAQ</h2>
            <dl className="mt-10 space-y-8">
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
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="display text-3xl md:text-4xl">Join the waitlist.</h2>
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
