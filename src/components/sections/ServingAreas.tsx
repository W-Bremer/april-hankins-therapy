import Link from "next/link";
import { MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/locations";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function ServingAreas() {
  return (
    <section className="container-x py-16">
      <Reveal className="rounded-[2.5rem] border border-ink/5 bg-cream-50 p-8 shadow-soft sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <span className="eyebrow text-sage-500">
              <MapPin className="h-4 w-4" /> Local &amp; Virtual
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Serving moms across Stark County &amp; beyond
            </h2>
            <p className="mt-4 text-ink-soft">
              In-person in Canal Fulton, plus secure virtual sessions everywhere
              in {SITE.virtualStates.join(" & ")}. Wherever you are, healing can
              come to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-md lg:justify-end">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="rounded-full border border-ink/10 bg-cream-100 px-5 py-2.5 text-sm font-semibold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-clay-300 hover:text-clay-600"
              >
                {l.city}, OH
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
