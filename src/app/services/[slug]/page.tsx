import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles, HelpCircle } from "lucide-react";
import { SERVICES, getService } from "@/data/services";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DynIcon } from "@/components/ui/DynIcon";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServingAreas } from "@/components/sections/ServingAreas";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  const url = `${SITE.url}/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url,
      images: [{ url: s.image, width: 1500, height: 1000, alt: s.imageAlt }],
    },
  };
}

const theme: Record<
  string,
  { band: string; pill: string; iconBg: string; accentText: string; soft: string }
> = {
  clay: {
    band: "bg-clay-50",
    pill: "bg-clay-100 text-clay-700",
    iconBg: "bg-clay-500",
    accentText: "text-clay-600",
    soft: "border-clay-400 bg-clay-50",
  },
  marigold: {
    band: "bg-marigold-50",
    pill: "bg-marigold-100 text-marigold-500",
    iconBg: "bg-marigold-400",
    accentText: "text-marigold-500",
    soft: "border-marigold-300 bg-marigold-50",
  },
  sage: {
    band: "bg-sage-50",
    pill: "bg-sage-100 text-sage-600",
    iconBg: "bg-sage-400",
    accentText: "text-sage-600",
    soft: "border-sage-400 bg-sage-50",
  },
  berry: {
    band: "bg-berry-50",
    pill: "bg-berry-100 text-berry-500",
    iconBg: "bg-berry-500",
    accentText: "text-berry-500",
    soft: "border-berry-400 bg-berry-50",
  },
};

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const s = getService(params.slug);
  if (!s) notFound();
  const t = theme[s.color];
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: s.navTitle,
            description: s.metaDescription,
            slug: s.slug,
          }),
          faqSchema(s.faqs),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services` },
            { name: s.navTitle, url: `${SITE.url}/services/${s.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-8 pt-8 sm:pt-12">
        <div className={`absolute -right-24 -top-16 h-96 w-96 rounded-full ${t.band} blur-3xl`} />
        <div className="container-wide relative">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-clay-600">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/services" className="hover:text-clay-600">Services</Link></li>
              <li aria-hidden>/</li>
              <li className="font-semibold text-ink">{s.navTitle}</li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${t.pill}`}>
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-cream-50 ${t.iconBg}`}>
                    <DynIcon name={s.icon} className="h-4 w-4" />
                  </span>
                  {s.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.05] text-ink sm:text-5xl">
                  {s.h1}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                  {s.intro}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href={SITE.booking} external arrow>
                    Book a free consult
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Ask a question
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="relative mx-auto w-full max-w-md">
              <div className={`absolute -bottom-5 -left-5 h-40 w-40 rounded-blob ${t.band}`} />
              <Image
                src={s.image}
                alt={s.imageAlt}
                width={1500}
                height={1000}
                priority
                className="relative rounded-[2.6rem] border-[6px] border-cream-50 object-cover shadow-lift"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lede */}
      <section className="container-x py-14">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug text-ink sm:text-[1.9rem]">
            {s.lede}
          </p>
        </Reveal>
      </section>

      {/* Signs / who it's for */}
      <section className={`${t.band} py-20`}>
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className={`eyebrow ${t.accentText}`}>Does this sound like you?</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              You might be ready for this work if…
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {s.signs.map((sign, i) => (
              <Reveal key={sign.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.8rem] bg-cream-50 p-7 shadow-soft">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {sign.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {sign.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className={`eyebrow ${t.accentText}`}>The approach</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              How we&apos;ll work together
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Warm, honest, and collaborative, grounded in EMDR and paced to
              your nervous system, never rushed.
            </p>
            <div className="mt-8">
              <Button href="/services/emdr-therapy" variant="ghost" arrow>
                More on how EMDR works
              </Button>
            </div>
          </Reveal>
          <div className="space-y-4">
            {s.approach.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex gap-5 rounded-[1.5rem] border border-ink/5 bg-cream-50 p-6 shadow-soft">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-cream-50 ${t.iconBg}`}>
                    {i + 1}
                  </span>
                  <p className="text-lg leading-relaxed text-ink-soft">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="container-x pb-8">
        <Reveal>
          <figure className={`rounded-[2.5rem] border-l-[6px] ${t.soft} p-8 sm:p-12`}>
            <Sparkles className={`h-8 w-8 ${t.accentText}`} />
            <blockquote className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              “{s.pullQuote}”
            </blockquote>
            <figcaption className="mt-5 text-sm font-bold uppercase tracking-wider text-ink-muted">
, April Hankins, {SITE.credentials}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Outcomes */}
      <section className="container-x py-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className={`eyebrow ${t.accentText}`}>What can shift</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            What healing can look like
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <div className="h-full rounded-[1.8rem] border border-ink/5 bg-cream-50 p-7 shadow-soft">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-cream-50 ${t.iconBg}`}>
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {o.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${t.band} py-20`}>
        <div className="container-x max-w-3xl">
          <Reveal className="text-center">
            <span className={`eyebrow ${t.accentText}`}>Good questions</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {s.navTitle} FAQ
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {s.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group rounded-[1.5rem] bg-cream-50 p-6 shadow-soft [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-ink">
                    <span className="flex items-center gap-3">
                      <HelpCircle className={`h-5 w-5 shrink-0 ${t.accentText}`} />
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
        </div>
      </section>

      {/* Related */}
      <section className="container-x py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Explore related support
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.08}>
              <Link
                href={`/services/${r.slug}`}
                className="group flex h-full items-center gap-4 rounded-[1.5rem] border border-ink/5 bg-cream-50 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-cream-50 ${theme[r.color].iconBg}`}>
                  <DynIcon name={r.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-lg font-semibold text-ink">
                  {r.navTitle}
                </span>
                <ArrowRight className="ml-auto h-5 w-5 text-ink-muted transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ServingAreas />
      <CtaBand heading="Ready to feel more like yourself?" />
    </>
  );
}
