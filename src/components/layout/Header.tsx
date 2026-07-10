"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream-100/90 shadow-[0_10px_30px_-24px_rgba(51,38,31,0.6)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-[70px] items-center justify-between gap-4">
        {/* Wordmark */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-semibold text-ink sm:text-2xl">
            April Hankins
          </span>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-clay-500">
            Therapy · LPCC
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-semibold text-ink-soft transition-colors hover:text-clay-600"
            >
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            <div
              className={cn(
                "absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4 transition-all duration-200",
                servicesOpen
                  ? "visible opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              )}
            >
              <div className="overflow-hidden rounded-3xl border border-ink/5 bg-cream-50 p-2 shadow-lift">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-clay-50 hover:text-clay-600"
                  >
                    {s.navTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {primaryNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-clay-600"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-clay-500 px-5 py-2.5 text-sm font-bold text-cream-50 shadow-soft transition-all hover:bg-clay-600 hover:shadow-lift"
          >
            Book a free consult
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-50 text-ink shadow-soft lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[70px] z-40 origin-top overflow-y-auto bg-cream-100 px-5 pb-16 pt-4 transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1">
          <p className="px-4 pt-3 text-xs font-bold uppercase tracking-[0.2em] text-clay-500">
            Services
          </p>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-2xl px-4 py-3 text-lg font-medium text-ink transition-colors hover:bg-clay-50"
            >
              {s.navTitle}
            </Link>
          ))}
          <div className="my-3 h-px bg-ink/10" />
          {primaryNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-2xl px-4 py-3 text-lg font-medium text-ink transition-colors hover:bg-clay-50"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-4 flex items-center gap-2 rounded-2xl px-4 py-3 text-lg font-medium text-sage-500"
          >
            <Phone className="h-5 w-5" /> {SITE.phone}
          </a>
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 rounded-full bg-clay-500 px-5 py-4 text-center text-base font-bold text-cream-50 shadow-soft"
          >
            Book a free consult
          </a>
        </nav>
      </div>
    </header>
  );
}
