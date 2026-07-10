import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-berry-600 text-cream-100">
      <div className="container-wide grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <p className="font-display text-2xl font-semibold text-cream-50">
            April Hankins Therapy
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream-100/80">
            {SITE.role} helping moms and cycle-breakers heal trauma with EMDR,             in Canal Fulton, Ohio and virtually across Ohio &amp; Pennsylvania.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-2 text-xs font-semibold tracking-wide">
            <span className="h-2 w-2 animate-pulse rounded-full bg-marigold-200" />
            Now accepting new clients
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-marigold-200">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-cream-100/80 transition-colors hover:text-cream-50"
                >
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-marigold-200">
            Areas Served
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="text-cream-100/80 transition-colors hover:text-cream-50"
                >
                  Therapy in {l.city}, OH
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-marigold-200">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="flex items-start gap-3 text-cream-100/80 transition-colors hover:text-cream-50"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-marigold-200" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 break-all text-cream-100/80 transition-colors hover:text-cream-50"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-marigold-200" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-cream-100/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-marigold-200" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} April Hankins Therapy, LPCC. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 fill-clay-300 text-clay-300" />{" "}
            for cycle-breakers in Stark County.
          </p>
        </div>
      </div>
    </footer>
  );
}
