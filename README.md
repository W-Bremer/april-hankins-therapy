# April Hankins Therapy — Website

A production-grade, SEO-optimized marketing site for **April Hankins, LPCC** — an
EMDR therapist for moms in Canal Fulton, Ohio. Built to rank locally for her
specialties (EMDR, perinatal/maternal mental health, spiritual trauma) across
Stark County.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom warm, colorful design system
- **Framer Motion** for scroll animations
- **Lucide** icons
- Fonts: **Fraunces** (display) + **Plus Jakarta Sans** (body) via `next/font`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, story, services, process, CTAs |
| `/about` | April's bio, approach, credentials |
| `/services` | Services hub with pricing snapshot |
| `/services/[slug]` | 6 SEO landing pages (EMDR, intensives, perinatal, childhood trauma, spiritual trauma, intimacy) |
| `/locations` | Areas-served hub |
| `/locations/[city]` | 5 local-SEO city pages (Canal Fulton, Massillon, North Canton, Canton, Akron) |
| `/faq` | FAQ with FAQPage schema |
| `/contact` | Contact form, details, embedded map |
| `/sitemap.xml`, `/robots.txt` | Auto-generated |

## SEO features

- Per-page `<title>`, meta descriptions, canonical URLs, and OpenGraph/Twitter tags
- JSON-LD structured data: `MedicalBusiness` + `Psychologist`, `Person`,
  `MedicalTherapy` (per service), `FAQPage`, and `BreadcrumbList`
- Local signals: NAP consistency, `areaServed`, geo coordinates, service-area &
  city landing pages targeting "[service] in [city], OH" queries
- Semantic headings, descriptive image alt text, skip-link, keyboard focus rings
- `sitemap.ts` + `robots.ts` generated from the content data

All business info lives in one place: [`src/lib/site.ts`](src/lib/site.ts).
Services and locations are data-driven ([`src/data/`](src/data)) — add a service or
city by editing those files and the page, sitemap, and nav update automatically.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → import the repo**. Framework preset auto-detects
   *Next.js* — no config needed.
3. (Optional) Set `NEXT_PUBLIC_SITE_URL` env var to the production domain, and
   update `SITE.url` in `src/lib/site.ts` to match.
4. Deploy. Vercel's Git integration rebuilds on every push to `main`.

## Notes before launch

- **Images** in `/public/images` are April's real photos pulled from her current
  site. Swap/optimize as desired.
- **Phone/booking link** point to her real Sessions Health scheduler and phone.
- The **contact form** opens the visitor's email client (no backend). To capture
  submissions server-side, wire `ContactForm` to a Vercel Route Handler,
  Formspree, or Resend.
- Confirm the **insurance note** (accepted through Sept 2026) is still accurate at
  launch — edit in [`src/data/faqs.ts`](src/data/faqs.ts) and
  [`src/app/services/page.tsx`](src/app/services/page.tsx).
