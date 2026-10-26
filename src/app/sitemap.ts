import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/content";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = PROJECTS.filter((p) => p.isPublic).map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
  }));

  return [{ url: SITE_URL }, { url: `${SITE_URL}/cv` }, ...projects];
}
