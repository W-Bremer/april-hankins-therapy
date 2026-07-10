import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { GENERAL_FAQS } from "@/data/faqs";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | April Hankins Therapy, LPCC | Canal Fulton, OH",
  description:
    "Answers to common questions about EMDR therapy with April Hankins, LPCC, fees, insurance, virtual sessions, what to expect, and how to get started in Canal Fulton, Ohio.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(GENERAL_FAQS),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "FAQ", url: `${SITE.url}/faq` },
          ]),
        ]}
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-sage-100/60 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-marigold-100/60 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow text-clay-500">The details</span>
            <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Questions, answered{" "}
              <span className="squiggle text-clay-500">honestly</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              Everything you might want to know before reaching out. Still
              wondering something? Just ask, no question is too small.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x max-w-3xl pb-16">
        <div className="space-y-4">
          {GENERAL_FAQS.map((f, i) => (
            <Reveal key={i} delay={(i % 4) * 0.04}>
              <details className="group rounded-[1.5rem] border border-ink/5 bg-cream-50 p-6 shadow-soft [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-ink">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-clay-500" />
                    {f.q}
                  </span>
                  <span className="text-2xl text-ink-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-8 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
