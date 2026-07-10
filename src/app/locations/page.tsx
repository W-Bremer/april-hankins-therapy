import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Navigation } from "lucide-react";
import { LOCATIONS } from "@/data/locations";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas Served | EMDR Therapy Across Stark County, OH | April Hankins",
  description:
    "April Hankins, LPCC offers EMDR therapy for moms in Canal Fulton, Massillon, North Canton, Canton & Akron, Ohio — in person and virtually across Ohio & Pennsylvania.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Locations", url: `${SITE.url}/locations` },
        ])}
      />
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-sage-100/60 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow text-sage-500">
              <MapPin className="h-4 w-4" /> Areas served
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Rooted in Canal Fulton, here for all of{" "}
              <span className="squiggle text-clay-500">Stark County</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
              In-person EMDR therapy from my Canal Fulton office, plus secure
              virtual sessions anywhere in {SITE.virtualStates.join(" & ")}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-ink/5 bg-cream-50 p-8 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-clay-500 text-cream-50 shadow-soft">
                  <MapPin className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {l.city}, OH
                </h2>
                <p className="mt-2 flex-1 leading-relaxed text-ink-soft">
                  {l.intro}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-ink-muted">
                  <Navigation className="h-4 w-4" /> {l.distance}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-clay-600">
                  Therapy in {l.city}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
