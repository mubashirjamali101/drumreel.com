import Image from "next/image";
import { Cta, CtaGhost } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LiveRun } from "@/components/live-run";
import { PlayerShot, RunShot, StudioShot } from "@/components/shots";
import { WaitlistForm } from "@/components/waitlist-form";
import { hosts, site, voices } from "@/lib/site";

const faqs = [
  {
    q: "How is this not Loom?",
    a: "Loom needs you on camera, clicking every time. Drumreel drives the live product, rehearses, films Chromium, then lays ElevenLabs and a talking avatar on the MP4. Re-run the saved script after a UI tweak without sitting through it again.",
  },
  {
    q: "Do re-records burn more AI tokens?",
    a: "The planner writes the scenario once. Script re-record replays that YAML — no second authoring pass. You pay record and compute, not another exploration.",
  },
  {
    q: "ElevenLabs and avatars?",
    a: "First-class in Studio HD. Neural HD voiceover and a circular talking host, composited on the final render. Off until you turn them on.",
  },
  {
    q: "When can I use it?",
    a: "Studio is coming soon. Join the waitlist. No pricing yet — we’ll write when seats open.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto grid max-w-6xl items-end gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
          <div>
            <p className="font-mono text-[11px] tracking-wide text-cream-dim">coming soon</p>
            <h1 className="serif mt-5 text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Superintelligence
              <br />
              for product demos.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-cream-dim">
              Describe the walkthrough. We log into staging, rehearse, film the live app, and master
              ElevenLabs + a talking avatar onto the MP4. Re-film the script without wasting a planner run.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Cta>Join waitlist</Cta>
              <CtaGhost href="#product">See the product</CtaGhost>
            </div>
          </div>
          <LiveRun />
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="max-w-2xl text-lg leading-relaxed text-cream-dim">
              Loom made you the camera operator. Drumreel is the crew: it clicks the product, speaks in a
              neural voice, puts a host in the corner, and keeps the scenario so the next take is cheap.
              Keep Loom for the 5% that needs your face in a cafe.
            </p>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-6xl space-y-28 px-6 py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] text-cream-dim">01 · studio hd</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">Paste a URL. Leave.</h2>
              <p className="mt-4 text-cream-dim">
                Public staging, a brief, optional ElevenLabs, optional circular avatar. The worker explores,
                authors, rehearses, then records Chromium.
              </p>
            </div>
            <StudioShot />
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <PlayerShot />
            <div className="lg:order-first lg:col-start-2 lg:row-start-1">
              <p className="font-mono text-[11px] text-cream-dim">02 · the mp4</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">A host on the glass. A real voice.</h2>
              <p className="mt-4 text-cream-dim">
                Not you in a bubble. The product fills the frame. Sarah (or Alex, Marcus, Elena) sits
                picture-in-picture. Rachel, Adam, Antoni, or Bella speak through ElevenLabs.
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] text-cream-dim">voices · hosts</p>
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
                    <span className="font-mono text-[11px] text-cream-dim">{v.engine}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] text-cream-dim">03 · rehearse · re-record</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">The expensive thought happens once.</h2>
              <p className="mt-4 text-cream-dim">
                Exploring and authoring is the token burn. We save the YAML. Script re-record drives the same
                clicks again — no second planner pass when a button moved eight pixels.
              </p>
            </div>
            <RunShot />
          </div>
        </section>

        <section id="loom" className="border-y border-line">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <p className="font-mono text-[11px] text-cream-dim">vs loom</p>
            <h2 className="serif mt-3 max-w-2xl text-4xl md:text-5xl">
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
                    ["Who clicks", "You, every take", "The worker, on staging"],
                    ["Voice", "You, live", "ElevenLabs neural HD"],
                    ["Host", "Webcam", "Circular talking avatar"],
                    ["A miss", "The whole take again", "Script re-record, planner idle"],
                    ["After a release", "Stale", "Re-run the saved scenario"],
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
          <p className="font-mono text-[11px] text-cream-dim">access</p>
          <h2 className="serif mt-3 text-4xl">Pricing is coming soon.</h2>
          <p className="mt-4 max-w-lg text-cream-dim">
            No public plans yet. Join the waitlist. We’ll send a seat when Studio opens — not a drip campaign.
          </p>
        </section>

        <section id="faq" className="border-t border-line">
          <div className="mx-auto max-w-3xl px-6 py-28">
            <h2 className="serif text-4xl">FAQ</h2>
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
            <h2 className="serif text-4xl md:text-5xl">Ready when you are.</h2>
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
