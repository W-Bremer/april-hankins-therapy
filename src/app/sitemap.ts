import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/about", "/services", "/locations", "/faq", "/contact"];

  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const s of SERVICES) {
    entries.push({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }
  for (const l of LOCATIONS) {
    entries.push({
      url: `${SITE.url}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
