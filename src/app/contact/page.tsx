import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Video, CalendarHeart } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact April Hankins, LPCC | EMDR Therapy in Canal Fulton, OH",
  description:
    "Get in touch with April Hankins, LPCC in Canal Fulton, Ohio. Book a free 15-minute consult, call (330) 476-7216, or send a message. In-person & virtual EMDR therapy for moms.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Phone,
    label: "Call or text",
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Weekdays, daytime — by appointment",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Contact", url: `${SITE.url}/contact` },
        ])}
      />

      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="absolute -right-16 top-0 h-80 w-80 rounded-full bg-clay-100/60 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow text-clay-500">Reach out</span>
            <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Let&apos;s take the{" "}
              <span className="squiggle text-clay-500">first step</span> together
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              The bravest thing is often just reaching out. Book a free
              15-minute consult, or send a note and I&apos;ll reply within two
              business days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form card */}
          <Reveal className="rounded-[2.5rem] border border-ink/5 bg-cream-200/40 p-7 shadow-soft sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Send a message
            </h2>
            <p className="mt-2 text-ink-soft">
              No pressure and no perfect words required.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>

          {/* Details + consult */}
          <div className="space-y-6">
            <Reveal className="overflow-hidden rounded-[2.5rem] bg-berry-500 text-cream-50 shadow-soft">
              <div className="relative h-44">
                <Image
                  src="/images/spiritual-trauma.jpeg"
                  alt="April Hankins' welcoming Canal Fulton therapy space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-marigold-200">
                  <CalendarHeart className="h-4 w-4" /> Free 15-min consult
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">
                  Not sure where to start?
                </h3>
                <p className="mt-2 text-cream-50/85">
                  Book a no-pressure video chat and we&apos;ll figure out the
                  right next step together.
                </p>
                <a
                  href={SITE.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-bold text-berry-600 transition-colors hover:bg-cream-100"
                >
                  Book your consult
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="rounded-[2.5rem] border border-ink/5 bg-cream-50 p-8 shadow-soft">
              <ul className="space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage-500">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-medium text-ink transition-colors hover:text-clay-600"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-medium text-ink">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage-500">
                    <Video className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                      Virtual sessions
                    </p>
                    <p className="font-medium text-ink">
                      Available across {SITE.virtualStates.join(" & ")}
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-x pb-20">
        <Reveal className="overflow-hidden rounded-[2.5rem] border border-ink/5 shadow-soft">
          <iframe
            title="Map to April Hankins Therapy in Canal Fulton, Ohio"
            src="https://www.google.com/maps?q=919+Cherry+St+East,+Canal+Fulton,+OH+44614&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </Reveal>
      </section>
    </>
  );
}
