import PageHero from '@/components/shared/PageHero';
import BlogList from '@/components/blog/BlogList';
import { getPostCards } from '@/lib/blog/posts';

export const metadata = {
  title: 'Business Insights & Compliance Guides',
  description: 'Read our latest articles on business certifications, compliance, tax exemptions, tender assistance, and growth strategies for Indian businesses.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Euroasia Blog | Business Insights & Compliance Guides',
    description: 'Expert articles on business compliance and growth.',
  },
};

async function getBlogs() {
  try {
    const { Blog } = await import('@/lib/models');
    const blogs = await Blog.findAll({
      where: { status: 'published' },
      order: [['publishedAt', 'DESC']],
    });
    return blogs.map(blog => blog.toJSON());
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function BlogPage() {
  let blogs = await getBlogs();
  
  // Use the built-in posts from lib/blog/posts if the database is empty
  if (blogs.length === 0) {
    blogs = getPostCards();
  }

  return (
    <>
      <PageHero
        title="Blog"
        description="Expert insights on business compliance, certifications, and growth strategies."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <BlogList initialBlogs={blogs} />
    </>
  );
}
  