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
    id: 4,
    title: '80-IAC Tax Exemption: Complete Guide for Startups',
    slug: '80-iac-tax-exemption-guide',
    excerpt: 'How DPIIT-recognised startups can claim a 3-year, 100% income tax deduction under Section 80-IAC, now Section 140 of the Income-tax Act, 2025.',
    featuredImage: '/images/blog/80-iac-tax-exemption-guide.webp',
    category: 'Tax',
    author: 'Euroasia Team',
    publishedAt: '2026-10-23',
  },
  {
    id: 6,
    title: 'MSME Udyam Registration: Benefits and Process',
    slug: 'msme-udyam-registration-benefits',
    excerpt: 'Who counts as an MSME under the limits revised in April 2025, what Udyam registration gets you, and how to register for free on the official portal.',
    featuredImage: '/images/blog/msme-udyam-registration-benefits.webp',
    category: 'Certifications',
    author: 'Euroasia Team',
    publishedAt: '2026-10-23',
  },
  {
    id: 5,
    title: 'Digital Marketing Strategies for B2B Companies',
    slug: 'digital-marketing-b2b-strategies',
    excerpt: 'A practical plan for Indian manufacturers and B2B service firms to win more enquiries online, from website and SEO to LinkedIn, marketplaces and follow-up.',
    featuredImage: '/images/blog/digital-marketing-b2b-strategies.webp',
    category: 'Digital Marketing',
    author: 'Euroasia Team',
    publishedAt: '2026-10-23',
  },
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
    featuredImage: '/images/blog/ZED.webp',
    category: 'Compliance',
    author: 'Euroasia Team',
    publishedAt: '2024-01-10',
  },
  {
    id: 3,
    title: 'GEM Portal Registration: Step-by-Step Guide',
    slug: 'gem-portal-registration-guide',
    excerpt: 'Everything you need to know about registering on the Government e-Marketplace and winning government tenders.',
    featuredImage: '/images/blog/GEM.webp',
    category: 'Tenders',
    author: 'Euroasia Team',
    publishedAt: '2024-01-05',
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
  