import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Schibsted_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const serif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Drumreel — Product demos, recorded for you",
    template: "%s · Drumreel",
  },
  description: site.description,
  applicationName: "Drumreel",
  keywords: [
    "product demo video",
    "automated walkthrough",
    "SaaS demo recording",
    "Playwright demo",
    "sales demo MP4",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: "Drumreel",
    title: "Superintelligence for product demos.",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumreel",
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Drumreel",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: site.domain,
    description: site.description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      description: "Waitlist · Studio coming soon",
    },
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
