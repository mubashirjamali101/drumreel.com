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
    q: "Is the video generated?",
    a: "No. Drumreel records your live product. The pictures on screen are yours, not invented.",
  },
  {
    q: "How is this different from recording it myself?",
    a: "You write what to show and leave. You do not have to click through the app or sit on camera.",
  },
  {
    q: "Can I record more than one at a time?",
    a: "Yes. You can run several recordings together: demos, lessons, walkthroughs, or tutorials.",
  },
  {
    q: "What is it for?",
    a: "Product demos, onboarding, feature walkthroughs, bug walkthroughs, and app tutorials. Anything on a public page.",
  },
  {
    q: "Can there be a person and a voice on the video?",
    a: "Yes. You can add a presenter in the corner and a spoken voice, or neither.",
  },
  {
    q: "When will it be available?",
    a: "Not yet. Leave your email and we will write when it is ready.",
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
              <h1 className="display max-w-xl text-3xl leading-tight md:text-4xl">
                You describe the walkthrough. Drumreel records the screen.
              </h1>
              <Cta>Request access</Cta>
            </div>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-sm font-medium">Demos</h2>
              <p className="mt-2 text-sm text-cream-dim">Show a feature without recording it yourself.</p>
            </div>
            <div>
              <h2 className="text-sm font-medium">Lessons and tutorials</h2>
              <p className="mt-2 text-sm text-cream-dim">How-to videos of the live app.</p>
            </div>
            <div>
              <h2 className="text-sm font-medium">Walkthroughs</h2>
              <p className="mt-2 text-sm text-cream-dim">Onboarding, releases, and bug reports.</p>
            </div>
            <div>
              <h2 className="text-sm font-medium">More than one at once</h2>
              <p className="mt-2 text-sm text-cream-dim">Start several recordings and let them run together.</p>
            </div>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-6xl space-y-24 px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FilmCard
              src="/demos/signup.mp4"
              poster="/demos/signup.jpg"
              avatar="/avatars/sarah.jpg"
              caption="Sign up"
            />
            <div>
              <h2 className="display text-3xl md:text-4xl">A recording of your product, not a generated clip</h2>
              <p className="mt-4 max-w-md text-cream-dim">
                Drumreel opens your public page and records what happens there. The video is a screen
                recording, not something drawn by a model.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="display text-3xl md:text-4xl">A presenter and a voice are optional</h2>
              <p className="mt-4 max-w-md text-cream-dim">
                The product stays in the frame. You can place a person in the corner and add a spoken
                voice, or keep the recording silent.
              </p>
            </div>
            <FilmCard
              src="/demos/gallery.mp4"
              poster="/demos/gallery.jpg"
              avatar="/avatars/elena.jpg"
              caption="Gallery"
            />
          </div>

          <div>
            <p className="text-sm text-cream-dim">Presenters and voices</p>
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
                    <span className="text-xs text-cream-dim">{v.tone}</span>
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
              caption="Filters"
            />
            <div>
              <h2 className="display text-3xl md:text-4xl">Record the same walkthrough again</h2>
              <p className="mt-4 max-w-md text-cream-dim">
                If a screen changed, you do not have to click through it yourself a second time. Ask for
                another recording of the same walkthrough.
              </p>
            </div>
          </div>
        </section>

        <section id="loom" className="border-y border-line">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="display max-w-2xl text-3xl md:text-4xl">
              If you need to be on camera, record it yourself. For the rest, use Drumreel.
            </h2>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="text-cream-dim">
                    <th className="pb-4 font-normal"> </th>
                    <th className="pb-4 font-normal">You record it</th>
                    <th className="pb-4 font-normal text-cream">Drumreel</th>
                  </tr>
                </thead>
                <tbody className="text-cream-dim">
                  {[
                    ["On camera", "You", "A presenter, if you add one"],
                    ["Who uses the product", "You", "Drumreel"],
                    ["Voice", "You, live", "A voice, if you add one"],
                    ["A mistake", "Start again", "Record it again"],
                    ["Several videos", "One after another", "At the same time"],
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
          <h2 className="display text-3xl">Pricing will follow</h2>
          <p className="mt-3 max-w-lg text-cream-dim">
            Nothing is for sale yet. Leave your email if you want to hear when it is.
          </p>
        </section>

        <section id="faq" className="border-t border-line">
          <div className="mx-auto max-w-3xl px-6 py-24">
            <h2 className="display text-3xl">Questions</h2>
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
            <h2 className="display text-3xl md:text-4xl">Request access</h2>
            <p className="mt-3 max-w-md text-cream-dim">We will email you when Drumreel is ready to use.</p>
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
