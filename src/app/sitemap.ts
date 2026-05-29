import { getAllPosts } from "@/lib/blog/mdx";
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: getSiteUrl(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  if (process.env.NEXT_PUBLIC_ENABLE_BLOG === "true") {
    staticPages.push({
      url: getSiteUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    });

    const posts = await getAllPosts();

    staticPages.push(
      ...posts.map((post) => ({
        url: getSiteUrl(`/blog/${post.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    );
  }

  return staticPages;
}
