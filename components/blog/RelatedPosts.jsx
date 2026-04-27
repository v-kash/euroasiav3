import Link from 'next/link';
import BlogCard from '@/components/shared/BlogCard';

const placeholderRelated = [
  {
    id: 101,
    title: 'MSME Udyam Registration: Benefits and Process',
    slug: 'msme-udyam-registration-benefits',
    excerpt: 'Discover the advantages of MSME registration and how to complete the Udyam registration process.',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    category: 'Certifications',
    author: 'Euroasia Team',
    publishedAt: '2023-12-20',
  },
  {
    id: 102,
    title: '80-IAC Tax Exemption: Complete Guide for Startups',
    slug: '80-iac-tax-exemption-guide',
    excerpt: 'Understand how DPIIT-recognized startups can avail income tax exemption under Section 80-IAC.',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    category: 'Tax',
    author: 'Euroasia Team',
    publishedAt: '2024-01-01',
  },
  {
    id: 103,
    title: 'Digital Marketing Strategies for B2B Companies',
    slug: 'digital-marketing-b2b-strategies',
    excerpt: 'Effective digital marketing approaches to generate leads and grow your B2B business online.',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Digital Marketing',
    author: 'Euroasia Team',
    publishedAt: '2023-12-28',
  },
];

export default function RelatedPosts({ blogs, currentCategory }) {
  const displayBlogs = blogs && blogs.length > 0 ? blogs : placeholderRelated;

  return (
    <section className="py-16 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy">
            Related Articles
          </h2>
          <p className="mt-2 text-text-muted">
            More articles about {currentCategory}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBlogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
