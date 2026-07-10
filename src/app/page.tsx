import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Video,
  Star,
  Quote,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DynIcon } from "@/components/ui/DynIcon";
import { Marquee } from "@/components/sections/Marquee";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServingAreas } from "@/components/sections/ServingAreas";
import { WaveDivider } from "@/components/ui/Blob";

const cardColor: Record<string, string> = {
  clay: "bg-clay-50 hover:bg-clay-100 text-clay-700",
  marigold: "bg-marigold-50 hover:bg-marigold-100 text-marigold-500",
  sage: "bg-sage-50 hover:bg-sage-100 text-sage-600",
  berry: "bg-berry-50 hover:bg-berry-100 text-berry-500",
};
const iconBg: Record<string, string> = {
  clay: "bg-clay-500",
  marigold: "bg-marigold-400",
  sage: "bg-sage-400",
  berry: "bg-berry-500",
};

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden pb-10 pt-8 sm:pt-14">
        {/* soft color washes */}
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-marigold-100/70 blur-3xl" />
        <div className="absolute -right-16 top-40 h-96 w-96 rounded-full bg-clay-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sage-100/50 blur-3xl" />

        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-clay-200 bg-cream-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-clay-600 shadow-soft">
                <Sparkles className="h-4 w-4" />
                EMDR Therapy for Moms · Canal Fulton, OH
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-[4.2rem]">
                Reclaim your{" "}
                <span className="squiggle text-clay-500">badass</span> self.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                Warm, honest, collaborative therapy for moms and cycle-breakers.
                Using EMDR, we heal childhood, spiritual, and sexual trauma at
                the root, so the past stops running the show.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={SITE.booking} external arrow>
                  Book a free 15-min consult
                </Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-ink-soft">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-sage-500" /> EMDRIA member
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star className="h-5 w-5 fill-marigold-300 text-marigold-400" />{" "}
                  11+ years in practice
                </span>
                <span className="inline-flex items-center gap-2">
                  <Video className="h-5 w-5 text-clay-500" /> In-person &amp;
                  virtual
                </span>
              </div>
            </Reveal>
          </div>

          {/* Portrait cluster */}
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.8rem] bg-marigold-200/50" />
            <div className="absolute -bottom-6 -right-5 h-40 w-40 rounded-blob bg-sage-200/70 blur-[1px]" />
            <div className="relative overflow-hidden rounded-[2.8rem] border-[6px] border-cream-50 shadow-lift">
              <Image
                src="/images/april-therapy-canal-fulton.jpeg"
                alt="April Hankins, LPCC, EMDR therapist in Canal Fulton, Ohio"
                width={1500}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating sticker */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-cream-50 px-4 py-3 shadow-lift sm:-left-8">
              <Image
                src="/images/emdria-badge.png"
                alt="EMDRIA member badge"
                width={44}
                height={44}
                className="h-11 w-11 rounded-lg object-contain"
              />
              <div className="pr-1 text-xs leading-tight">
                <p className="font-bold text-ink">Certified in EMDR</p>
                <p className="text-ink-muted">& perinatal mental health</p>
              </div>
            </div>
            <div className="absolute -right-3 top-8 rotate-6 rounded-2xl bg-berry-500 px-4 py-2 text-xs font-bold text-cream-50 shadow-lift sm:-right-6">
              You matter too ✿
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* ─────────────────── Is this you? ─────────────────── */}
      <section className="relative py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-clay-100/60 [transform:rotate(-3deg)]" />
                <Image
                  src="/images/unsplash-1.jpg"
                  alt="A mother holding her child on the couch"
                  width={1500}
                  height={1001}
                  className="relative rounded-[2.2rem] object-cover shadow-soft"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="eyebrow text-clay-500">Does this sound familiar?</span>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-[2.6rem]">
                  Motherhood cracked you open, and everything you never healed
                  came with it.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mt-7 space-y-4">
                  {[
                    "You love your kids and you're quietly drowning in overwhelm, guilt, or rage.",
                    "You swore you'd parent differently, then heard your mother's words come out of your mouth.",
                    "You've done the talk therapy. You get it intellectually. Your body didn't get the memo.",
                    "Old messages about faith, worth, or your body still run the show.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3.5">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-marigold-400" />
                      <span className="text-lg text-ink-soft">{line}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-7 text-lg font-medium text-ink">
                  You're not too much, and you're not broken. You're a
                  cycle-breaker, and this is exactly the work we can do
                  together.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── Services grid ─────────────────── */}
      <section id="services" className="relative bg-cream-200/50 py-20 sm:py-28">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-sage-500">How I can help</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-5xl">
              Specialized therapy, built around your life
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Six focused paths, one warm, root-level approach. Every service
              blends EMDR with somatic, attachment, and parts work.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`group flex h-full flex-col rounded-[2rem] border border-ink/5 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${cardColor[s.color]}`}
                >
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-cream-50 shadow-soft ${iconBg[s.color]}`}
                  >
                    <DynIcon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    {s.navTitle}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    {s.intro.split(".")[0]}.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── Meet April ─────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-marigold-100/50 blur-3xl" />
        <div className="container-x relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative mx-auto w-full max-w-sm">
              <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.6rem] border-2 border-dashed border-clay-300" />
              <Image
                src="/images/headshot.jpeg"
                alt="Portrait of April Hankins, LPCC"
                width={1500}
                height={1000}
                className="relative rounded-[2.4rem] object-cover shadow-lift"
              />
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow text-berry-500">Meet April</span>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-[2.7rem]">
                  A therapist who&apos;s done her own deep work
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  I&apos;m April, a licensed counselor in Canal Fulton, mom of
                  two toddlers (and two dogs), and a former evangelical pastor
                  who walked my own faith deconstruction. Motherhood and
                  deconstruction cracked me open too, and shaped everything about
                  how I practice.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <figure className="mt-7 rounded-[1.8rem] border-l-4 border-clay-400 bg-clay-50 p-6">
                  <Quote className="h-7 w-7 text-clay-400" />
                  <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-ink">
                    I don&apos;t believe in fixing you, because you aren&apos;t
                    broken.
                  </blockquote>
                </figure>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Button href="/about" variant="secondary" arrow>
                    Read April&apos;s story
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── Process ─────────────────── */}
      <section className="relative bg-sage-500 py-4 text-cream-50">
        <WaveDivider color="#FBF4EA" className="rotate-180" />
      </section>
      <section className="bg-sage-500 pb-24 pt-4 text-cream-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-marigold-200">Getting started</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Brave work, gently paced
            </h2>
            <p className="mt-4 text-lg text-cream-50/85">
              No cold intake forms or clinical distance. Here&apos;s how we
              begin.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Free 15-min consult",
                d: "We hop on a quick video chat so you can get a feel for me and ask anything. No pressure to commit.",
              },
              {
                n: "02",
                t: "Safety & connection first",
                d: "Early sessions build coping skills, grounding, and trust between us, before we go anywhere hard.",
              },
              {
                n: "03",
                t: "Heal at the root",
                d: "Using EMDR, we process what's been stuck at the pace your nervous system needs, weekly or in an intensive.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="h-full rounded-[2rem] bg-cream-50/10 p-8 backdrop-blur-sm ring-1 ring-cream-50/15">
                  <span className="font-display text-5xl font-semibold text-marigold-200">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">
                    {step.t}
                  </h3>
                  <p className="mt-3 leading-relaxed text-cream-50/85">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Button
              href={SITE.booking}
              external
              className="!bg-cream-50 !text-sage-600 hover:!bg-cream-100"
              arrow
            >
              Start with a free consult
            </Button>
          </Reveal>
        </div>
      </section>

      <ServingAreas />
      <CtaBand />
    </>
  );
}
