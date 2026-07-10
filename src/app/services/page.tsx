import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { DynIcon } from "@/components/ui/DynIcon";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Therapy Services in Canal Fulton, OH | EMDR for Moms | April Hankins",
  description:
    "Explore April Hankins' therapy services in Canal Fulton, Ohio, EMDR therapy, EMDR intensives, perinatal mental health, childhood & spiritual trauma, and intimacy after purity culture.",
  alternates: { canonical: "/services" },
};

const iconBg: Record<string, string> = {
  clay: "bg-clay-500",
  marigold: "bg-marigold-400",
  sage: "bg-sage-400",
  berry: "bg-berry-500",
};

export default function ServicesIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
        ])}
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-marigold-100/60 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sage-100/50 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow text-clay-500">Ways we can work together</span>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Therapy for moms who are done{" "}
              <span className="squiggle text-clay-500">just coping</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
              Every path here is rooted in EMDR and woven with somatic,
              attachment, and parts work, in person in Canal Fulton or virtually
              across {SITE.virtualStates.join(" & ")}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alternating feature rows */}
      <section className="container-x space-y-8 pb-16">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={0.04}>
            <Link
              href={`/services/${s.slug}`}
              className="group grid overflow-hidden rounded-[2.5rem] border border-ink/5 bg-cream-50 shadow-soft transition-all hover:shadow-lift md:grid-cols-2"
            >
              <div
                className={`relative aspect-[16/10] md:aspect-auto ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-cream-50 shadow-soft ${iconBg[s.color]}`}
                >
                  <DynIcon name={s.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
                  {s.navTitle}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.intro}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-clay-600">
                  Learn about {s.navTitle.toLowerCase()}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* Pricing snapshot */}
      <section className="container-x pb-20">
        <Reveal className="rounded-[2.5rem] bg-berry-500 p-8 text-cream-50 sm:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="eyebrow text-marigold-200">Simple &amp; transparent</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Investment
              </h2>
              <p className="mt-4 text-cream-50/85">
                A free 15-minute consult comes first, always. Insurance is
                accepted through September 2026 for weekly sessions
                (intensives are private pay).
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Clock, label: "Weekly session (55 min)", price: "$155" },
                { icon: Zap, label: "3-hour EMDR intensive", price: "$444" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-cream-50/10 p-5 ring-1 ring-cream-50/15"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <row.icon className="h-5 w-5 text-marigold-200" />
                    {row.label}
                  </span>
                  <span className="font-display text-2xl font-semibold text-marigold-200">
                    {row.price}
                  </span>
                </div>
              ))}
              <p className="text-sm text-cream-50/70">
                Multi-day intensive packages available on request.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
