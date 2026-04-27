import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { FiCalendar, FiUser, FiClock, FiArrowLeft } from "react-icons/fi";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";

export const revalidate = 3600;

const placeholderBlogs = {
  "startup-india-registration-guide": {
    id: 1,
    title: "How to Register Your Startup Under Startup India Scheme",
    slug: "startup-india-registration-guide",
    excerpt:
      "A complete guide to registering your startup with DPIIT and unlocking benefits under the Startup India initiative.",
    content: `
# Introduction to Startup India

The **Startup India** initiative was launched by the Government of India on January 16, 2016, to build a strong ecosystem for nurturing innovation and startups in the country. The initiative aims to drive sustainable economic growth and generate large-scale employment opportunities.

## Who Can Register?

An entity shall be considered a Startup if it fulfills the following conditions:

1. **Age**: Up to 10 years from the date of incorporation
2. **Type**: Registered as a Private Limited Company, Partnership Firm, or LLP
3. **Turnover**: Annual turnover not exceeding ₹100 crores
4. **Innovation**: Working towards innovation, development, or improvement of products/services

## Benefits of Startup India Registration

### 1. Tax Exemptions
- Income tax exemption for 3 consecutive years under Section 80-IAC
- Capital gains tax exemption under Section 54GB

### 2. Easier Compliance
- Self-certification for 6 labor laws and 3 environmental laws
- Fast-track patent applications with 80% rebate on fees

### 3. Funding Support
- Access to Fund of Funds worth ₹10,000 crores
- Credit Guarantee scheme for loans

## Step-by-Step Registration Process

### Step 1: Incorporate Your Business
First, register your company as a Private Limited Company, LLP, or Partnership Firm.

### Step 2: Create Account on Startup India Portal
Visit [startupindia.gov.in](https://www.startupindia.gov.in) and create your account.

### Step 3: Fill Application Form
Provide details about your startup including:
- Business description
- Nature of business
- Business model

### Step 4: Upload Documents
- Certificate of Incorporation
- Proof of Innovation (patents, pitch deck, etc.)
- Business details

### Step 5: Get Recognition
Upon verification, you'll receive your Startup India Recognition Certificate.

## Required Documents

- Certificate of Incorporation/Registration
- Brief description of your innovative product/service
- Authorization letter from the startup
- PAN of the entity
- Director/Partner details

## Timeline

The typical timeline for Startup India recognition is **3-7 working days** after submission of complete documents.

## Common Mistakes to Avoid

1. Incomplete or incorrect documentation
2. Not clearly explaining the innovation aspect
3. Missing deadlines for additional information requests
4. Not utilizing the benefits after registration

## Conclusion

Startup India registration provides significant benefits for new businesses. With proper documentation and guidance, the process can be completed quickly. Contact us for expert assistance with your Startup India registration.
    `,
    featuredImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    category: "Certifications",
    author: "Euroasia Team",
    publishedAt: "2024-01-15",
    metaTitle:
      "How to Register Your Startup Under Startup India Scheme | Complete Guide",
    metaDescription:
      "Learn the step-by-step process to register your startup under the Startup India scheme. Get DPIIT recognition and unlock tax benefits, funding support, and more.",
    keywords:
      "Startup India registration, DPIIT recognition, startup benefits India, how to register startup",
  },
  "zed-certification-msme-guide": {
    id: 2,
    title: "Understanding ZED Certification for MSMEs",
    slug: "zed-certification-msme-guide",
    excerpt:
      "Learn about Zero Defect Zero Effect certification and how it can improve your manufacturing quality standards.",
    content: `
# What is ZED Certification?

**ZED (Zero Defect Zero Effect)** is a certification scheme launched by the Ministry of MSME to enable and facilitate MSMEs to improve their quality and environmental performance.

## The Vision Behind ZED

The ZED certification aims to achieve:
- **Zero Defect**: Products manufactured without any defects
- **Zero Effect**: Manufacturing processes with minimal environmental impact

## Levels of ZED Certification

### Bronze Level
- Basic quality management practices
- Essential compliance requirements
- Entry-level certification

### Silver Level
- Advanced quality systems
- Improved process controls
- Environmental management basics

### Gold Level
- World-class manufacturing practices
- Complete environmental management system
- Industry-leading quality standards

## Benefits of ZED Certification

1. **Government Subsidies**: Up to ₹5 lakhs for certification costs
2. **Tender Preferences**: Priority in government procurement
3. **Market Credibility**: Enhanced brand value
4. **Process Improvement**: Systematic quality enhancement
5. **Export Opportunities**: Better acceptance in global markets

## How to Apply

1. Register on the ZED portal
2. Complete self-assessment
3. Upload required documents
4. Schedule audit
5. Implement recommendations
6. Get certified

## Conclusion

ZED certification is a valuable credential for MSMEs looking to enhance their competitiveness and sustainability. Contact Euroasia for expert guidance on your certification journey.
    `,
    featuredImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    category: "Compliance",
    author: "Euroasia Team",
    publishedAt: "2024-01-10",
    metaTitle: "ZED Certification Guide for MSMEs | Zero Defect Zero Effect",
    metaDescription:
      "Complete guide to ZED certification for MSMEs. Learn about benefits, levels, and the application process for Zero Defect Zero Effect certification.",
    keywords:
      "ZED certification, MSME certification, Zero Defect Zero Effect, quality certification India",
  },
  "gem-portal-registration-guide": {
    id: 3,
    title: "GEM Portal Registration: Step-by-Step Guide",
    slug: "gem-portal-registration-guide",
    excerpt:
      "Everything you need to know about registering on the Government e-Marketplace and winning government tenders.",
    content: `
# Introduction to GEM Portal

**Government e-Marketplace (GeM)** is the national public procurement portal launched to facilitate online procurement of goods and services required by government departments and organizations.

## Why Register on GEM?

- Access to ₹3+ lakh crores of government procurement annually
- Direct selling to government buyers
- Transparent and efficient procurement process
- No middlemen or agents required

## Who Can Register?

1. Manufacturers
2. Service Providers
3. Resellers (with authorization)
4. OEMs and Distributors
5. Startups and MSMEs

## Registration Requirements

### Documents Needed
- GST Registration Certificate
- PAN Card
- Bank Account Details
- Business Registration Certificate
- Address Proof
- ITR (for certain categories)

## Step-by-Step Registration

### Step 1: Visit GeM Portal
Go to [gem.gov.in](https://gem.gov.in) and click on 'Sign Up'

### Step 2: Choose Registration Type
Select Primary User or Secondary User

### Step 3: Complete OTP Verification
Verify your mobile number and email

### Step 4: Fill Business Details
Enter company information, GST details, etc.

### Step 5: Upload Documents
Submit all required documents

### Step 6: Create Product/Service Catalog
List your products or services

## Tips for Success on GEM

1. Keep competitive pricing
2. Maintain good ratings
3. Respond quickly to bids
4. Keep catalog updated
5. Ensure timely delivery

## Conclusion

GEM registration opens doors to government procurement opportunities. With proper setup and competitive offerings, you can build a sustainable government business. Contact us for expert GEM registration assistance.
    `,
    featuredImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "Tenders",
    author: "Euroasia Team",
    publishedAt: "2024-01-05",
    metaTitle: "GEM Portal Registration Guide | Government e-Marketplace",
    metaDescription:
      "Complete step-by-step guide to register on Government e-Marketplace (GEM). Learn how to access government tenders and sell to government buyers.",
    keywords:
      "GEM registration, Government e-Marketplace, government tenders, GeM portal",
  },
};

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
      <section className="bg-gradient-to-br from-primary-navy to-secondary-navy pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-silver-grey hover:text-white transition-colors mb-6"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full mb-4">
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-silver-grey">
            <span className="flex items-center">
              <FiUser className="w-4 h-4 mr-2" />
              {blog.author || "Euroasia Team"}
            </span>
            <span className="flex items-center">
              <FiCalendar className="w-4 h-4 mr-2" />
              {formatDate(blog.publishedAt)}
            </span>
            <span className="flex items-center">
              <FiClock className="w-4 h-4 mr-2" />
              {readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
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
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none prose-headings:text-primary-navy prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-border-color">
                <h3 className="text-lg font-semibold text-primary-navy mb-4">
                  Share this article
                </h3>
                <ShareButtons title={blog.title} slug={blog.slug} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <div className="bg-primary-navy rounded-xl p-6 text-white">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-silver-grey text-sm mb-4">
                    Our experts can help you with {blog.category.toLowerCase()}{" "}
                    services.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center py-2 bg-white text-primary-navy font-semibold rounded-lg hover:bg-light-bg transition-colors"
                  >
                    Get Consultation
                  </Link>
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
