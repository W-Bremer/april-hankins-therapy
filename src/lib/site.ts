// ── Single source of truth for business info (NAP) used across pages + schema ──

export const SITE = {
  name: "April Hankins Therapy",
  therapist: "April Hankins",
  credentials: "LPCC",
  fullTitle: "April Hankins, LPCC",
  role: "Licensed Professional Clinical Counselor",
  // Set NEXT_PUBLIC_SITE_URL in Vercel to override for the real production domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aprilhankinstherapy.com",
  tagline: "Reclaim your badass self.",
  shortPitch:
    "EMDR therapy for moms and cycle-breakers in Canal Fulton, Ohio — healing childhood, spiritual, and sexual trauma so the past stops running the show.",
  email: "april@aprilhankinstherapy.com",
  phone: "(330) 476-7216",
  phoneHref: "tel:+13304767216",
  booking: "https://aprilhankins.sessionshealth.com/",
  address: {
    street: "919 Cherry St East, Suite 103",
    city: "Canal Fulton",
    state: "OH",
    stateLong: "Ohio",
    zip: "44614",
    county: "Stark County",
  },
  geo: { lat: 40.8895, lng: -81.5979 },
  hours: "Mo-Fr 09:00-17:00",
  priceRange: "$$",
  fees: {
    session: "$155 / 55-min session",
    intensive: "$444 / 3-hour intensive",
    consult: "Free 15-minute consultation",
  },
  serviceAreas: [
    "Canal Fulton",
    "Massillon",
    "North Canton",
    "Canton",
    "Akron",
    "Jackson Township",
  ],
  virtualStates: ["Ohio", "Pennsylvania"],
  social: {
    psychologyToday:
      "https://www.psychologytoday.com/us/therapists/april-hankins-canal-fulton-oh/822808",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "EMDR", href: "/services/emdr-therapy" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
