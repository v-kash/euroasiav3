import { allPosts } from "@/lib/blog/posts";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.euroasias.com";

async function getBlogSlugs() {
  try {
    const { Blog } = await import("@/lib/models");
    const blogs = await Blog.findAll({
      where: { status: "published" },
      attributes: ["slug", "updatedAt"],
    });
    return blogs.map((blog) => ({
      slug: blog.slug,
      lastModified: blog.updatedAt,
    }));
  } catch (error) {
    console.error("Error fetching blog slugs for sitemap:", error);
    return [];
  }
}

// Static pages carry no lastModified: a build-time date on every URL is ignored by search engines.
// /search is intentionally excluded (it is noindex).
const staticPages = [
  ["", "weekly", 1],
  ["/about", "monthly", 0.8],
  ["/services", "monthly", 0.9],
  ["/schemes", "weekly", 0.9],
  ["/services/pmegp", "monthly", 0.85],
  ["/services/mudra", "monthly", 0.85],
  ["/services/startup-india", "monthly", 0.85],
  ["/services/zed-certification", "monthly", 0.85],
  ["/services/gem-registration", "monthly", 0.85],
  ["/services/80-iac", "monthly", 0.85],
  ["/services/cgtmse", "monthly", 0.85],
  ["/services/msme-registration", "monthly", 0.85],
  ["/services/iec-registration", "monthly", 0.85],
  ["/services/government-grants", "monthly", 0.85],
  ["/services/business-funding", "monthly", 0.85],
  ["/services/gst-compliance", "monthly", 0.85],
  ["/services/business-certifications", "monthly", 0.8],
  ["/services/compliance-legal", "monthly", 0.8],
  ["/services/tender-assistance", "monthly", 0.8],
  ["/services/digital-marketing", "monthly", 0.8],
  ["/services/tax-exemption", "monthly", 0.8],
  ["/services/business-advisory", "monthly", 0.8],
  ["/blog", "daily", 0.7],
  ["/contact", "monthly", 0.7],
  ["/check-eligibility", "monthly", 0.7],
  ["/privacy-policy", "yearly", 0.3],
  ["/terms-conditions", "yearly", 0.3],
];

export default async function sitemap() {
  const dbBlogs = await getBlogSlugs();

  // Built-in posts are served by /blog/[slug] when the database has no match, so list them too.
  const blogs = new Map(
    allPosts.map((blog) => [
      blog.slug,
      blog.updatedAt || blog.publishedAt,
    ])
  );
  for (const { slug, lastModified } of dbBlogs) {
    blogs.set(slug, lastModified);
  }

  const pages = staticPages.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));

  const blogPages = [...blogs].map(([slug, lastModified]) => ({
    url: `${baseUrl}/blog/${slug}`,
    ...(lastModified && { lastModified: new Date(lastModified) }),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...pages, ...blogPages];
}
