import Image from "next/image";
import { Cta, CtaGhost } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlayerShot, RunShot, StudioShot } from "@/components/shots";
import { hosts, packs, plans, site, voices } from "@/lib/site";

const faqs = [
  {
    q: "How is this not Loom?",
    a: "Loom needs you on camera, clicking every time. Drumreel drives the live product, rehearses, films Chromium, then lays ElevenLabs + a talking avatar on the MP4. Re-run the saved script after a UI tweak without sitting through it again.",
  },
  {
    q: "Do re-records burn more AI tokens?",
    a: "The planner writes the scenario once. Script re-record replays that YAML — no second authoring pass. You pay record/compute, not another exploration.",
  },
  {
    q: "ElevenLabs and avatars are included?",
    a: "They are first-class in Studio HD. Voiceover is ElevenLabs neural audio (+15 credits). Circular talking avatar is picture-in-picture (+25). Both off until you turn them on.",
  },
  {
    q: "How long does a run take?",
    a: "A typical public site is 8–25 minutes. Hard stop at 45. This is a real browser, not a 12-second slideshow.",
  },
  {
    q: "Localhost?",
    a: "Public HTTPS staging only. Put a disposable demo login in the brief if the flow needs auth.",
  },
  {
    q: "Card to try?",
    a: "No. Verify email, get 50 credits, run one walkthrough. Stripe after that.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1fr_1.05fr] lg:pt-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-amber-2">
                AI camera crew for your product
              </p>
              <h1 className="serif mt-6 text-4xl leading-[1.08] tracking-tight md:text-6xl">
                Ditch 95% of your Looms.
                <span className="block text-amber-2">Describe it. We film it.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream-dim">
                Drumreel logs into your staging URL, rehearses the path, records the live app, then masters
                <strong className="font-medium text-cream"> ElevenLabs narration</strong> and a{" "}
                <strong className="font-medium text-cream">talking avatar</strong> onto the MP4 — while you do something else.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta>Start free — 50 credits</Cta>
                <CtaGhost href="#studio">See the studio</CtaGhost>
              </div>
              <p className="mt-4 text-sm text-cream-dim">No card. Re-record a saved script without a new planner run.</p>
            </div>
            <StudioShot />
          </div>
        </section>

        <section className="border-y border-line bg-ink-2">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
            {[
              ["You never click it twice", "Explore → author → rehearse → record. The scenario is saved."],
              ["ElevenLabs on the take", "Neural HD voiceover, not you clearing your throat on take 9."],
              ["Avatar in the corner", "Circular talking host, any corner, composited on the final MP4."],
            ].map(([t, b]) => (
              <div key={t}>
                <h2 className="text-sm font-semibold text-cream">{t}</h2>
                <p className="mt-2 text-sm text-cream-dim">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="output" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">The MP4</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">A product recording with a host — not a talking head in a bubble.</h2>
              <p className="mt-4 text-cream-dim">
                Chromium walks the real UI. ffmpeg lays the voice. The avatar sits on the glass as a circular
                presenter. Share the file or a revocable link.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-cream-dim">
                <li>· Picture-in-picture: Sarah, Alex, Marcus, or Elena</li>
                <li>· Voices: Rachel, Adam, Antoni, Bella · ElevenLabs</li>
                <li>· Corner placement: any of the four</li>
              </ul>
            </div>
            <PlayerShot />
          </div>
        </section>

        <section id="studio" className="bg-ink-2">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">Studio HD</p>
            <h2 className="serif mt-3 max-w-3xl text-4xl md:text-5xl">ElevenLabs + talking avatar are not an afterthought.</h2>
            <p className="mt-4 max-w-2xl text-cream-dim">
              Toggle neural narration and a circular host before you queue. The worker authors the walkthrough,
              records the live app, then composites audio and PiP on the final render.
            </p>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">Hosts</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {hosts.map((h) => (
                    <div key={h.id} className="flex items-center gap-3 rounded-xl border border-line bg-ink p-3">
                      <Image src={h.file} alt={h.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                      <div>
                        <p className="font-medium">{h.name}</p>
                        <p className="text-xs text-cream-dim">{h.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold">ElevenLabs voices</h3>
                <div className="mt-4 grid gap-3">
                  {voices.map((v) => (
                    <div key={v.id} className="flex items-center gap-3 rounded-xl border border-line bg-ink p-3">
                      <Image src={v.file} alt={v.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{v.name}</p>
                        <p className="truncate text-xs text-cream-dim">
                          {v.tone} · {v.engine}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wide text-indigo-300">HD</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rerun" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <RunShot />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Efficiency</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">Rehearse and re-film. Don’t re-think.</h2>
              <p className="mt-4 text-cream-dim">
                The expensive part is the planner: explore the live site and write the scenario. Drumreel keeps
                that YAML. Script re-record drives the same clicks again — no second authoring pass, no wasted
                tokens when a button moved 8px.
              </p>
              <div className="mt-8 grid gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-medium text-cream">Full run</p>
                  <p className="text-cream-dim">Explore + author + rehearse + record. Use when the flow changed.</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="font-medium text-emerald">Script re-record</p>
                  <p className="text-cream-dim">Replay the saved scenario. Same demo, new take, planner idle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="loom" className="border-y border-line bg-ink-2">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">vs Loom</p>
            <h2 className="serif mt-3 text-4xl">Keep Loom for the 5% that needs your face in a cafe.</h2>
            <p className="mt-3 max-w-2xl text-cream-dim">
              Product tours, onboarding, release notes, sales walkthroughs — that’s the 95%. Drumreel films the
              app so you don’t.
            </p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="bg-ink text-cream-dim">
                  <tr>
                    <th className="px-4 py-3 font-medium"> </th>
                    <th className="px-4 py-3 font-medium">Loom</th>
                    <th className="px-4 py-3 font-medium text-amber-2">Drumreel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    ["Who clicks the product", "You, every take", "The worker, on staging"],
                    ["Voice", "You, live", "ElevenLabs neural HD"],
                    ["On-screen host", "Your webcam", "Circular talking avatar, any corner"],
                    ["Missed a click", "Record the whole thing again", "Script re-record, no new planner tokens"],
                    ["After a release", "Stale the same day", "Re-run the saved scenario"],
                    ["You on camera", "Required", "Optional. Go do real work."],
                  ].map(([row, loom, us]) => (
                    <tr key={row}>
                      <td className="px-4 py-3 text-cream-dim">{row}</td>
                      <td className="px-4 py-3 text-cream-dim">{loom}</td>
                      <td className="px-4 py-3 text-cream">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="serif text-4xl">Four beats. One queue.</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Brief", "Public HTTPS URL + the path a buyer takes."],
              ["02", "Plan & rehearse", "AI writes the scenario, then dry-runs it."],
              ["03", "Record", "Chromium films the live product."],
              ["04", "Master", "ElevenLabs + avatar composited. MP4 in the library."],
            ].map(([n, t, b]) => (
              <li key={n} className="rounded-2xl border border-line p-5">
                <p className="font-mono text-xs text-indigo-300">{n}</p>
                <h3 className="mt-2 text-lg">{t}</h3>
                <p className="mt-2 text-sm text-cream-dim">{b}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="pricing" className="border-t border-line bg-ink-2">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="serif text-4xl md:text-5xl">Credits. Real Stripe. No fake video quotas.</h2>
            <p className="mt-3 max-w-xl text-cream-dim">
              ~25 credits for a plain run. +15 ElevenLabs. +25 avatar. Script re-records skip the planner.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className={`flex flex-col rounded-2xl border p-6 ${plan.featured ? "border-indigo-400 bg-ink" : "border-line"}`}
                >
                  <h3 className="text-sm text-cream-dim">{plan.name}</h3>
                  <p className="serif mt-3 text-4xl">
                    {plan.price}
                    <span className="text-lg text-cream-dim">{plan.period}</span>
                  </p>
                  <p className="mt-3 text-sm">{plan.credits}</p>
                  <p className="mt-2 flex-1 text-sm text-cream-dim">{plan.blurb}</p>
                  <a
                    href={plan.href}
                    className={`mt-6 inline-flex justify-center rounded-full px-4 py-2 text-sm ${
                      plan.featured ? "bg-cream text-ink hover:bg-amber-2" : "border border-line hover:border-cream-dim"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-cream-dim">
              {packs.map((pack) => (
                <span key={pack.name}>
                  <span className="text-cream">{pack.name}</span> · {pack.price}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="serif text-4xl">FAQ</h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-t border-line pt-6">
                <dt className="text-lg">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-cream-dim">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-line bg-gradient-to-br from-indigo-950 via-ink-2 to-ink">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="serif text-4xl md:text-5xl">Stop performing the same demo.</h2>
            <p className="mx-auto mt-4 max-w-lg text-cream-dim">
              Queue it. Get the MP4 with a host and a real voice. Re-film the script when the product moves.
            </p>
            <div className="mt-10 flex justify-center">
              <Cta>Replace your next Loom</Cta>
            </div>
            <p className="mt-4 text-xs text-cream-dim">{site.email}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
