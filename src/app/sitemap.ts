import type { MetadataRoute } from "next";
const base = "https://samuelewilson.org";
const pages = ["/","/framework","/journey","/pillars","/anxiety","/depression","/ptsd","/faith","/body","/purpose","/articles","/devotionals","/podcast","/videos","/resources","/speaking","/about","/contact","/membership","/course"];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(p => ({ url:`${base}${p}`, lastModified: new Date(), changeFrequency: p==="/"?"daily":"weekly", priority: p==="/"?1:0.7 }));
}
