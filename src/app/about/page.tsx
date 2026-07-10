import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Award, MapPin, Heart, Quote } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About April Hankins, LPCC | EMDR Therapist in Canal Fulton, OH",
  description:
    "Meet April Hankins, LPCC — a Canal Fulton, Ohio counselor, mom, and former evangelical pastor using EMDR to help moms heal trauma. Warm, honest, collaborative therapy.",
  alternates: { canonical: "/about" },
};

const credentials = [
  {
    icon: Award,
    title: "Licensed & certified",
    body: "LPCC in Ohio & Pennsylvania · EMDR certified · EMDRIA member · IFS informed",
  },
  {
    icon: GraduationCap,
    title: "Trained where it matters",
    body: "M.A. in Counseling, Missio Seminary · specialized training in perinatal mental health, EMDR intensives & spiritual trauma",
  },
  {
    icon: Heart,
    title: "11+ years of practice",
    body: "Over a decade walking alongside people through their hardest, bravest work",
  },
  {
    icon: MapPin,
    title: "Rooted in Stark County",
    body: "Canal Fulton office serving Massillon, North Canton, Canton & Akron — plus virtual across OH & PA",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "About", url: `${SITE.url}/about` },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-8 pt-10 sm:pt-16">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-clay-100/60 blur-3xl" />
        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Reveal>
              <span className="eyebrow text-berry-500">Hi, I&apos;m April</span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
                A therapist who&apos;s been in the{" "}
                <span className="squiggle text-clay-500">deep end</span> too
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                I&apos;m a Licensed Professional Clinical Counselor in Canal
                Fulton, Ohio, specializing in therapy for mothers. Originally
                from Pennsylvania (yes, my heart still aches for Wawa), I&apos;m
                now raising two toddlers and two dogs here in Ohio. My claim to
                fame? I once worked as a Chuck E. Cheese character.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button href={SITE.booking} external arrow>
                  Book a free consult with me
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.6rem] bg-marigold-200/50" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-blob bg-sage-200/70" />
            <Image
              src="/images/headshot.jpeg"
              alt="April Hankins, LPCC, EMDR therapist in Canal Fulton, Ohio"
              width={1500}
              height={1000}
              priority
              className="relative rounded-[2.4rem] border-[6px] border-cream-50 object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              How I got here
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              My path into therapy started in an unexpected place — as a middle
              school pastor at a large evangelical megachurch. Sitting with
              people&apos;s real, complicated questions, I realized they deserved
              deeper care than I could offer from a pulpit. So I went back to
              school for a Master&apos;s in Counseling at Missio Seminary.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              At the same time, I was quietly living my own faith
              deconstruction — questioning what I&apos;d been taught about faith,
              authority, sexuality, and belonging. It wasn&apos;t a loss of
              myself. It was a reclaiming of my own voice and values.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Then came motherhood, which cracked me open all over again. I
              realized the childhood fears and triggers I&apos;d been carrying
              needed tending — not just for me, but so I could break generational
              cycles for my own kids. Those two transitions — deconstruction and
              becoming a mom — shape everything about how I show up in the room
              with you.
            </p>
          </Reveal>
        </div>

        {/* Big quote */}
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <figure className="rounded-[2.5rem] bg-clay-500 p-8 text-cream-50 sm:p-12">
            <Quote className="h-9 w-9 text-marigold-200" />
            <blockquote className="mt-3 font-display text-2xl font-medium leading-snug sm:text-3xl">
              My style is warm, honest, and collaborative. I don&apos;t believe
              in fixing you, because you aren&apos;t broken. My job is to help
              you rebuild trust in yourself and your intuition.
            </blockquote>
          </figure>
        </Reveal>
      </section>

      {/* Approach split with office photo */}
      <section className="bg-cream-200/50 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-sage-100/70 [transform:rotate(3deg)]" />
            <Image
              src="/images/emdr-session.jpeg"
              alt="April Hankins in her Canal Fulton therapy office"
              width={1500}
              height={1000}
              className="relative rounded-[2.2rem] object-cover shadow-soft"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow text-sage-500">My approach</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Rooted in EMDR, tuned to your nervous system
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-ink-soft">
                I primarily use EMDR to process trauma so it doesn&apos;t keep
                running the show, alongside Internal Family Systems (IFS) to
                explore the different parts of you with compassion. Sessions are
                55 minutes, usually weekly or biweekly, paced to what your body
                can hold.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-6 space-y-3">
                {[
                  "You don't have to be in crisis to deserve support.",
                  "Your path doesn't need to look like mine — that difference is celebrated here.",
                  "LGBTQ+ individuals and families are genuinely welcomed and affirmed.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-ink-soft">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay-400" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="container-x py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-clay-500">The credentials</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Training you can trust
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="flex h-full gap-5 rounded-[1.8rem] border border-ink/5 bg-cream-50 p-7 shadow-soft">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-berry-50 text-berry-500">
                  <c.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Let's break cycles together."
        sub="If any of this resonates, I'd love to hear from you. Book a free 15-minute consult and let's see if we're a fit."
      />
    </>
  );
}
