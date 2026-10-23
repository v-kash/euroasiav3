import Link from 'next/link';
import BlogCard from '@/components/shared/BlogCard';

const placeholderRelated = [
  {
    id: 101,
    title: 'MSME Udyam Registration: Benefits and Process',
    slug: 'msme-udyam-registration-benefits',
    excerpt: 'Who counts as an MSME under the limits revised in April 2025, what Udyam registration gets you, and how to register for free on the official portal.',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    category: 'Certifications',
    author: 'Euroasia Team',
    publishedAt: '2026-10-23',
  },
  {
    id: 102,
    title: '80-IAC Tax Exemption: Complete Guide for Startups',
    slug: '80-iac-tax-exemption-guide',
    excerpt: 'How DPIIT-recognised startups can claim a 3-year, 100% income tax deduction under Section 80-IAC, now Section 140 of the Income-tax Act, 2025.',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    category: 'Tax',
    author: 'Euroasia Team',
    publishedAt: '2026-10-23',
  },
  {
    id: 103,
    title: 'Digital Marketing Strategies for B2B Companies',
    slug: 'digital-marketing-b2b-strategies',
    excerpt: 'A practical plan for Indian manufacturers and B2B service firms to win more enquiries online, from website and SEO to LinkedIn, marketplaces and follow-up.',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Digital Marketing',
    author: 'Euroasia Team',
    publishedAt: '2026-10-23',
  },
];

export default function RelatedPosts({ blogs, currentCategory }) {
  const displayBlogs = blogs && blogs.length > 0 ? blogs : placeholderRelated;

  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <h2 className="font-display font-extrabold text-primary-navy text-4xl md:text-5xl leading-[1.02] tracking-[-0.035em]">
            Related Articles
          </h2>
          <p className="text-text-muted text-lg">
            More articles about {currentCategory}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBlogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-bold rounded-xl hover:bg-primary-navy hover:text-white transition-colors duration-200"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
