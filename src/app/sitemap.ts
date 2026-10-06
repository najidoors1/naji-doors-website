import type { MetadataRoute } from "next";
import { products, companyData, projectsData } from "@/data/content";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://najidoor.com";

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about-us`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/products`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/advantages`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/downloads`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/partners`, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicePages = companyData.services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages, ...servicePages, ...projectPages];
}
