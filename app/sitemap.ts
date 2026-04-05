import { MetadataRoute } from "next";
import { getProjects, getBlogs, getCaseStudies } from "@/lib/data";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const projects = getProjects().map((p) => ({
    url: `${base}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogs = getBlogs().map((b) => ({
    url: `${base}/blogs/${b.id}`,
    lastModified: new Date(b.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const caseStudies = getCaseStudies().map((cs) => ({
    url: `${base}/case-studies/${cs.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...projects,
    ...blogs,
    ...caseStudies,
  ];
}
