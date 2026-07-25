import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/retreat";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/inquiry/success"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
