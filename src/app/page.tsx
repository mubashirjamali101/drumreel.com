import Image from "next/image";
import { Cta, CtaGhost } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductMock } from "@/components/product-mock";
import { packs, plans, site } from "@/lib/site";

const faqs = [
  {
    q: "How long does a run take?",
    a: "A typical public site is 8–25 minutes. The worker hard-stops at 45. This is a real browser recording, not a 12-second AI slideshow.",
  },
  {
    q: "Does it work on my localhost app?",
    a: "No. The worker only records public HTTPS URLs. Point it at staging, not 127.0.0.1, and not a VPN-only host.",
  },
  {
    q: "Can it log in?",
    a: "Yes, if you put a test account in the brief. Use a disposable demo user. Do not send production admin passwords you cannot rotate.",
  },
  {
    q: "What do credits cost?",
    a: "A plain run reserves about 25 credits. Voiceover adds 15. Avatar adds 25. You are charged the settled amount when the MP4 is stored. Failed or cancelled runs before that are refunded.",
  },
  {
    q: "Do I need a card to try it?",
    a: "No. Verify email, get 50 credits, run one short walkthrough. Paid packs and plans are Stripe Checkout.",
  },
  {
    q: "Who sees the target site?",
    a: "An isolated worker on our host. You must be allowed to record that URL. We send screenshots and the brief to the AI model that authors the script (OpenAI by default).",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
            <p className="text-sm tracking-[0.2em] text-amber uppercase">Product demos, recorded for you</p>
            <h1 className="serif mt-6 max-w-3xl text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Describe the walkthrough.
              <span className="italic text-amber-2"> Get the MP4.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-dim">
              Paste a public staging URL. Write what a buyer should see. Drumreel drives the live product,
              films it, and puts a shareable video in your library.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Cta />
              <CtaGhost href="#pricing">See pricing</CtaGhost>
            </div>
            <p className="mt-5 text-sm text-cream-dim">
              No card to start. 50 credits after you verify email. Usually 8–25 minutes per run.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <ProductMock />
        </section>

        <section className="border-y border-line bg-ink-2">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
            {[
              ["Founders", "Ship a current demo without blocking Friday on Loom."],
              ["Sales", "Send a clean walkthrough instead of a 40-minute Zoom."],
              ["CS & success", "Record the same flow after every release, without a studio."],
            ].map(([title, body]) => (
              <div key={title}>
                <h2 className="text-sm tracking-[0.16em] text-amber uppercase">{title}</h2>
                <p className="serif mt-3 text-2xl leading-snug">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm tracking-[0.2em] text-amber uppercase">How it works</p>
          <h2 className="serif mt-4 max-w-2xl text-4xl md:text-5xl">Three steps. No timeline editor.</h2>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["01", "You write the brief", "URL plus the path a customer takes. Include a test login if the flow needs one."],
              ["02", "We drive the product", "The worker maps live pages, authors a scenario, rehearses, then records Chromium."],
              ["03", "You get the MP4", "Download it or share a link. Revoke the link when you are done."],
            ].map(([n, title, body]) => (
              <li key={n} className="border-t border-line pt-6">
                <p className="font-mono text-xs text-amber">{n}</p>
                <h3 className="mt-3 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-ink-2">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
            <div>
              <p className="text-sm tracking-[0.2em] text-amber uppercase">Honest limits</p>
              <h2 className="serif mt-4 text-4xl">Built for public staging, not magic.</h2>
              <ul className="mt-8 space-y-4 text-cream-dim">
                <li>Public HTTPS only. No localhost, no private VPC, no cloud metadata.</li>
                <li>One recording at a time on the first machine. Jobs are minutes, not seconds.</li>
                <li>Voiceover and talking avatar are optional add-ons, off by default.</li>
                <li>You must be allowed to capture the site you submit.</li>
              </ul>
              <div className="mt-10">
                <Cta>Try it on staging</Cta>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line">
              <Image src="/still-reel.jpg" alt="Film reel against a laptop — Drumreel records the product like a camera crew." fill className="object-cover" sizes="(min-width: 1024px) 28rem, 100vw" />
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm tracking-[0.2em] text-amber uppercase">Pricing</p>
          <h2 className="serif mt-4 text-4xl md:text-5xl">Credits, not fake video quotas.</h2>
          <p className="mt-4 max-w-xl text-cream-dim">
            Monthly plans grant credits on each paid Stripe invoice. Extra packs are one-time Checkout.
            Credits land only after payment succeeds.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.id}
                className={`flex flex-col rounded-2xl border p-6 ${plan.featured ? "border-amber bg-ink-2" : "border-line"}`}
              >
                <h3 className="text-sm tracking-wide text-cream-dim">{plan.name}</h3>
                <p className="serif mt-3 text-4xl">
                  {plan.price}
                  <span className="text-lg text-cream-dim">{plan.period}</span>
                </p>
                <p className="mt-3 text-sm text-cream">{plan.credits}</p>
                <p className="mt-2 flex-1 text-sm text-cream-dim">{plan.blurb}</p>
                <a
                  href={plan.href}
                  className={`mt-6 inline-flex justify-center rounded-full px-4 py-2 text-sm ${
                    plan.featured ? "bg-cream text-ink hover:bg-amber-2" : "border border-line text-cream hover:border-cream-dim"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-line px-6 py-5">
            <p className="text-sm text-cream-dim">One-time top-ups if you do not want a subscription</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {packs.map((pack) => (
                <span key={pack.name}>
                  <span className="text-cream">{pack.name}</span>
                  <span className="text-cream-dim"> · {pack.price}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-line">
          <div className="mx-auto max-w-3xl px-6 py-24">
            <h2 className="serif text-4xl">Before you paste a URL</h2>
            <dl className="mt-12 space-y-8">
              {faqs.map((item) => (
                <div key={item.q} className="border-t border-line pt-6">
                  <dt className="text-lg">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-cream-dim">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-line bg-ink-2">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="serif text-4xl md:text-5xl">Stop re-recording the same demo.</h2>
            <p className="mx-auto mt-4 max-w-lg text-cream-dim">
              Verify your email, spend the 50 credits on a real staging URL, and keep the MP4 if it earns
              the next call.
            </p>
            <div className="mt-10 flex justify-center">
              <Cta>Start free</Cta>
            </div>
            <p className="mt-4 text-xs text-cream-dim">
              Studio lives at app.drumreel.com · questions to {site.email}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
