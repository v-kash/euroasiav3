import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactButton from "@/components/contact/ContactButton";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { FiCalendar, FiUser, FiClock, FiArrowLeft } from "react-icons/fi";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { placeholderBlogs } from "@/lib/blog/placeholderPosts";

export const revalidate = 3600;

async function getBlog(slug) {
  try {
    const { Blog } = await import("@/lib/models");
    const blog = await Blog.findOne({
      where: { slug, status: "published" },
    });
    return blog ? blog.toJSON() : null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

async function getRelatedBlogs(category, currentSlug) {
  try {
    const { Blog } = await import("@/lib/models");
    const { Op } = await import("sequelize");
    const blogs = await Blog.findAll({
      where: {
        category,
        slug: { [Op.ne]: currentSlug },
        status: "published",
      },
      limit: 3,
      order: [["publishedAt", "DESC"]],
    });
    return blogs.map((blog) => blog.toJSON());
  } catch (error) {
    return [];
  }
}

export async function generateStaticParams() {
  try {
    const { Blog } = await import("@/lib/models");
    const blogs = await Blog.findAll({
      where: { status: "published" },
      attributes: ["slug"],
    });
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch (error) {
    return Object.keys(placeholderBlogs).map((slug) => ({ slug }));
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let blog = await getBlog(slug);

  if (!blog) {
    blog = placeholderBlogs[slug];
  }

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.keywords?.split(",").map((k) => k.trim()) || [],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author],
      images: [blog.featuredImage],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.featuredImage],
    },
  };
}

function estimateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content?.split(/\s+/).length || 0;
  return Math.ceil(words / wordsPerMinute);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  let blog = await getBlog(slug);

  if (!blog) {
    blog = placeholderBlogs[slug];
  }

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(blog.category, slug);
  const readTime = estimateReadTime(blog.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.featuredImage,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,
    author: {
      "@type": "Organization",
      name: blog.author || "Euroasia Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Euroasia Aquatic Pvt Ltd",
      logo: {
        "@type": "ImageObject",
        url: "https://www.euroasias.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-light-bg border-b border-[#D5DDE9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-20 lg:pb-24">
          <Link
            href="/blog"
            className="inline-flex items-center font-semibold text-primary-navy hover:text-accent-text transition-colors mb-7"
          >
            <FiArrowLeft aria-hidden="true" className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div>
            <span className="inline-flex items-center gap-2.5 px-3.5 py-2 mb-6 border-[1.5px] border-primary-navy rounded-full text-primary-navy font-ledger text-xs font-semibold uppercase tracking-[0.12em]">
              <span aria-hidden="true" className="w-2 h-2 rounded-[2px] bg-accent" />
              {blog.category}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-primary-navy text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.04em] mb-7">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-ledger text-sm font-medium text-primary-navy">
            <span className="flex items-center">
              <FiUser aria-hidden="true" className="w-4 h-4 mr-2 text-accent-text" />
              {blog.author || "Euroasia Team"}
            </span>
            <span className="flex items-center">
              <FiCalendar aria-hidden="true" className="w-4 h-4 mr-2 text-accent-text" />
              {formatDate(blog.publishedAt)}
            </span>
            <span className="flex items-center">
              <FiClock aria-hidden="true" className="w-4 h-4 mr-2 text-accent-text" />
              {readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 lg:-mt-14 relative">
        <div className="relative h-[260px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-primary-navy shadow-hard bg-white">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 min-w-0">
              <div className="article-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t-2 border-primary-navy">
                <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-4">
                  Share this article
                </h3>
                <ShareButtons title={blog.title} slug={blog.slug} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-40 space-y-8">
                {/* CTA Card */}
                <div className="bg-primary-navy rounded-2xl p-6 text-white">
                  <h3 className="font-display font-bold text-xl tracking-[-0.02em] mb-2">Need Help?</h3>
                  <p className="text-white/70 text-sm mb-5">
                    Our experts can help you with {blog.category.toLowerCase()}{" "}
                    services.
                  </p>
                  <ContactButton
                    className="flex items-center justify-center min-h-[44px] bg-accent text-primary-navy font-bold rounded-xl hover:bg-accent-dark transition-colors text-sm"
                  >
                    Get Consultation
                  </ContactButton>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts blogs={relatedBlogs} currentCategory={blog.category} />
    </>
  );
}
