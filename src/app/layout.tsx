import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, practiceSchema, personSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullTitle} | EMDR Therapy for Moms in Canal Fulton, OH`,
    template: `%s`,
  },
  description: SITE.shortPitch,
  keywords: [
    "EMDR therapy Canal Fulton Ohio",
    "therapist for moms Stark County",
    "perinatal mental health Ohio",
    "religious trauma therapist",
    "postpartum therapy Canal Fulton",
    "April Hankins LPCC",
  ],
  authors: [{ name: SITE.therapist }],
  creator: SITE.therapist,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.fullTitle} | EMDR Therapy for Moms in Canal Fulton, OH`,
    description: SITE.shortPitch,
    images: [
      {
        url: "/images/headshot.jpeg",
        width: 1500,
        height: 1000,
        alt: "April Hankins, LPCC, EMDR therapist in Canal Fulton, Ohio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.fullTitle} | EMDR Therapy for Moms`,
    description: SITE.shortPitch,
    images: ["/images/headshot.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <JsonLd data={[practiceSchema(), personSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-clay-500 focus:px-5 focus:py-2 focus:text-sm focus:font-bold focus:text-cream-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
