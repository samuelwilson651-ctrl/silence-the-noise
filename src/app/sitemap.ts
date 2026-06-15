import type { MetadataRoute } from "next";
const base = "https://samuelewilson.org";
const pages = [
  ["/", 1, "daily"],
  ["/framework", 0.8, "weekly"],
  ["/journey", 0.8, "weekly"],
  ["/pillars", 0.7, "weekly"],
  ["/teachings", 0.7, "weekly"],
  ["/anxiety", 0.8, "weekly"],
  ["/depression", 0.8, "weekly"],
  ["/ptsd", 0.8, "weekly"],
  ["/faith", 0.8, "weekly"],
  ["/body", 0.7, "weekly"],
  ["/purpose", 0.7, "weekly"],
  ["/articles", 0.8, "daily"],
  ["/devotionals", 0.8, "daily"],
  ["/podcast", 0.7, "weekly"],
  ["/videos", 0.7, "weekly"],
  ["/resources", 0.7, "weekly"],
  ["/speaking", 0.6, "monthly"],
  ["/about", 0.6, "monthly"],
  ["/contact", 0.5, "monthly"],
  ["/membership", 0.8, "weekly"],
  ["/course", 0.7, "weekly"],
  ["/privacy", 0.3, "yearly"],
  ["/terms", 0.3, "yearly"],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, priority, freq]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: priority as number,
  }));
}
