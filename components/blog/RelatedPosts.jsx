import Link from 'next/link';
import BlogCard from '@/components/shared/BlogCard';

export default function RelatedPosts({ blogs, currentCategory }) {
  if (!blogs || blogs.length === 0) return null;

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
          {blogs.slice(0, 3).map((blog, index) => (
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
