import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';

const placeholderBlogs = [
  {
    id: 1,
    title: 'How to Register Your Startup Under Startup India Scheme',
    slug: 'startup-india-registration-guide',
    excerpt: 'A complete guide to registering your startup with DPIIT and unlocking benefits under the Startup India initiative.',
    featuredImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    category: 'Certifications',
    author: 'Euroasia Team',
    publishedAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'Understanding ZED Certification for MSMEs',
    slug: 'zed-certification-msme-guide',
    excerpt: 'Learn about Zero Defect Zero Effect certification and how it can improve your manufacturing quality standards.',
    featuredImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    category: 'Compliance',
    author: 'Euroasia Team',
    publishedAt: '2024-01-10',
  },
  {
    id: 3,
    title: 'GEM Portal Registration: Step-by-Step Guide',
    slug: 'gem-portal-registration-guide',
    excerpt: 'Everything you need to know about registering on the Government e-Marketplace and winning government tenders.',
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    category: 'Tenders',
    author: 'Euroasia Team',
    publishedAt: '2024-01-05',
  },
];

export default async function BlogPreview() {
  // In production, this would fetch from the database
  // const blogs = await fetchLatestBlogs(3);
  const blogs = placeholderBlogs;

  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="BLOG"
          title="Read Our Latest News & Articles"
          description="Stay updated with the latest in business compliance, certifications, and growth strategies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-bold rounded-xl hover:bg-primary-navy hover:text-white transition-colors duration-200"
          >
            View All Articles
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
