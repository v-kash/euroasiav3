import PageHero from '@/components/shared/PageHero';
import BlogList from '@/components/blog/BlogList';

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
  {
    id: 4,
    title: '80-IAC Tax Exemption: Complete Guide for Startups',
    slug: '80-iac-tax-exemption-guide',
    excerpt: 'Understand how DPIIT-recognized startups can avail income tax exemption under Section 80-IAC.',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    category: 'Tax',
    author: 'Euroasia Team',
    publishedAt: '2024-01-01',
  },
  {
    id: 5,
    title: 'Digital Marketing Strategies for B2B Companies',
    slug: 'digital-marketing-b2b-strategies',
    excerpt: 'Effective digital marketing approaches to generate leads and grow your B2B business online.',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Digital Marketing',
    author: 'Euroasia Team',
    publishedAt: '2023-12-28',
  },
  {
    id: 6,
    title: 'MSME Udyam Registration: Benefits and Process',
    slug: 'msme-udyam-registration-benefits',
    excerpt: 'Discover the advantages of MSME registration and how to complete the Udyam registration process.',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    category: 'Certifications',
    author: 'Euroasia Team',
    publishedAt: '2023-12-20',
  },
];

export default async function BlogPage() {
  let blogs = await getBlogs();
  
  // Use placeholder blogs if database is empty
  if (blogs.length === 0) {
    blogs = placeholderBlogs;
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
