import { SITE } from "./site";

const businessId = `${SITE.url}/#practice`;
const personId = `${SITE.url}/#april`;

// Core LocalBusiness / MedicalBusiness node, the anchor for local SEO.
export function practiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Psychologist", "ProfessionalService"],
    "@id": businessId,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: SITE.priceRange,
    image: `${SITE.url}/images/headshot.jpeg`,
    logo: `${SITE.url}/images/headshot.jpeg`,
    description: SITE.shortPitch,
    medicalSpecialty: "Psychiatric",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`
    )}`,
    openingHours: SITE.hours,
    areaServed: SITE.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, Ohio`,
    })),
    founder: { "@id": personId },
    sameAs: [SITE.social.psychologyToday],
    knowsAbout: [
      "EMDR therapy",
      "Perinatal mental health",
      "Religious trauma",
      "Childhood trauma",
      "Faith deconstruction",
      "Postpartum anxiety",
    ],
  };
}

// Person node for April herself (E-E-A-T signal).
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: SITE.therapist,
    honorificSuffix: SITE.credentials,
    jobTitle: SITE.role,
    worksFor: { "@id": businessId },
    image: `${SITE.url}/images/headshot.jpeg`,
    url: `${SITE.url}/about`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Missio Seminary",
    },
    knowsLanguage: "en",
    memberOf: {
      "@type": "Organization",
      name: "EMDR International Association (EMDRIA)",
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}/services/${opts.slug}`,
    provider: { "@id": businessId },
    areaServed: SITE.serviceAreas.map((c) => `${c}, OH`),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}
