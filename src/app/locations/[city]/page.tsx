import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Navigation, Video, ArrowRight, Check } from "lucide-react";
import { LOCATIONS, getLocation } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DynIcon } from "@/components/ui/DynIcon";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd, breadcrumbSchema, practiceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const l = getLocation(params.city);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `/locations/${l.slug}` },
    openGraph: {
      title: l.metaTitle,
      description: l.metaDescription,
      url: `${SITE.url}/locations/${l.slug}`,
      images: [{ url: "/images/april-therapy-canal-fulton.jpeg" }],
    },
  };
}

const iconBg: Record<string, string> = {
  clay: "bg-clay-500",
  marigold: "bg-marigold-400",
  sage: "bg-sage-400",
  berry: "bg-berry-500",
};

export default function LocationPage({
  params,
}: {
  params: { city: string };
}) {
  const l = getLocation(params.city);
  if (!l) notFound();

  return (
    <>
      <JsonLd
        data={[
          practiceSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Locations", url: `${SITE.url}/locations` },
            { name: l.city, url: `${SITE.url}/locations/${l.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-8 pt-8 sm:pt-12">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-marigold-100/60 blur-3xl" />
        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-clay-600">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/locations" className="hover:text-clay-600">Locations</Link></li>
                <li aria-hidden>/</li>
                <li className="font-semibold text-ink">{l.city}</li>
              </ol>
            </nav>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sage-600">
                <MapPin className="h-4 w-4" /> Serving {l.city}, Ohio
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.05] text-ink sm:text-5xl">
                EMDR therapy for moms in {l.city}, OH
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {l.intro} {l.blurb}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={SITE.booking} external arrow>
                  Book a free consult
                </Button>
                <Button href="/services" variant="secondary">
                  See all services
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink-soft">
                <span className="inline-flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-clay-500" /> {l.distance}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Video className="h-4 w-4 text-sage-500" /> Virtual across OH &amp; PA
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-blob bg-clay-100" />
            <Image
              src="/images/april-therapy-canal-fulton.jpeg"
              alt={`April Hankins, LPCC — EMDR therapist serving ${l.city}, Ohio`}
              width={1500}
              height={1000}
              priority
              className="relative rounded-[2.6rem] border-[6px] border-cream-50 object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Local intro + neighborhoods */}
      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Local, warm, and genuinely in your corner
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                If you&apos;re a mom in {l.city} carrying overwhelm, old trauma,
                or the weight of breaking cycles you never chose, you don&apos;t
                have to keep white-knuckling it. I help {l.city}-area moms heal
                childhood, spiritual, and sexual trauma at the root using EMDR —
                so the past stops running your present.
              </p>
              <p>
                Come to my Canal Fulton office in person, or meet virtually from
                the comfort of home — same warm, honest, collaborative work
                either way.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-ink/5 bg-cream-50 p-8 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-ink">
              Proudly supporting
            </h3>
            <ul className="mt-4 space-y-3">
              {l.neighborhoods.map((n) => (
                <li key={n} className="flex items-center gap-3 text-ink-soft">
                  <Check className="h-5 w-5 text-sage-500" /> {n}
                </li>
              ))}
              <li className="flex items-center gap-3 text-ink-soft">
                <Check className="h-5 w-5 text-sage-500" /> All of {SITE.address.county}
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services available here */}
      <section className="bg-cream-200/50 py-16">
        <div className="container-wide">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Support available to {l.city} clients
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full items-center gap-4 rounded-[1.5rem] border border-ink/5 bg-cream-50 p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cream-50 ${iconBg[s.color]}`}>
                    <DynIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-ink">{s.navTitle}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="container-x py-16">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-wider text-ink-muted">
            Also serving nearby
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {LOCATIONS.filter((x) => x.slug !== l.slug).map((x) => (
              <Link
                key={x.slug}
                href={`/locations/${x.slug}`}
                className="rounded-full border border-ink/10 bg-cream-50 px-5 py-2.5 text-sm font-semibold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-clay-300 hover:text-clay-600"
              >
                {x.city}, OH
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand heading={`Therapy for ${l.city} moms starts here.`} />
    </>
  );
}
