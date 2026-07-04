import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = "https://happytoothdental.in";
 
 const pages = [
  "",
  "/about",
  "/services",
  "/facilities",
  "/blog",
  "/contact",
  "/faq",
  "/international",
  "/privacy",
  "/terms",
  "/clinics/kallambalam",
  "/clinics/murukkumpuzha",
  "/5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them"
 ];

 return pages.map((page) => ({
  url: `${baseUrl}${page}`,
  lastModified: new Date(),
  changeFrequency: page === "" || page === "/blog" ? "weekly" : "monthly",
  priority: page === "" ? 1.0 : page === "/contact" || page === "/services" ? 0.9 : 0.8,
 }));
}
