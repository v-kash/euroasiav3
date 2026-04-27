import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata = {
  title: 'Web & Digital Marketing Solutions in Ahmedabad',
  description: 'Professional website development, SEO, social media marketing, and digital presence management services for businesses in Gujarat.',
  keywords: ['digital marketing Ahmedabad', 'website development', 'SEO services', 'social media marketing Gujarat'],
  alternates: {
    canonical: '/services/digital-marketing',
  },
  openGraph: {
    title: 'Web & Digital Marketing Solutions | Euroasia',
    description: 'Comprehensive digital marketing services in Gujarat.',
  },
};

const serviceData = {
  title: 'Web & Digital Marketing Solutions',
  shortTitle: 'Digital Marketing',
  subtitle: 'Build a powerful online presence and reach your target audience effectively.',
  tag: 'DIGITAL SOLUTIONS',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  overviewTitle: 'Transform Your Digital Presence',
  overviewContent: [
    'In today\'s digital-first world, having a strong online presence is essential for business success. From attracting new customers to building brand credibility, digital marketing plays a crucial role in your growth strategy.',
    'Euroasia offers comprehensive digital marketing solutions tailored to your business goals. Whether you need a professional website, SEO optimization, or social media management, our team delivers results-driven strategies.',
  ],
  included: [
    'Professional Website Development',
    'E-commerce Solutions',
    'Search Engine Optimization (SEO)',
    'Google Ads Management',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing Campaigns',
    'Logo & Brand Identity Design',
    'Business Video Production',
    'Google My Business Setup',
    'Online Reputation Management',
    'Analytics & Reporting',
  ],
  process: [
    {
      title: 'Discovery',
      description: 'Understand your business goals, target audience, and competition.',
    },
    {
      title: 'Strategy',
      description: 'Develop a customized digital marketing strategy for your business.',
    },
    {
      title: 'Implementation',
      description: 'Execute campaigns across selected digital channels.',
    },
    {
      title: 'Optimization',
      description: 'Monitor performance and optimize for better results.',
    },
  ],
  faqs: [
    {
      question: 'How long does it take to build a website?',
      answer: 'A standard business website takes 2-4 weeks to develop, depending on complexity. E-commerce websites may take 4-8 weeks. We provide a detailed timeline during the discovery phase.',
    },
    {
      question: 'What is included in SEO services?',
      answer: 'Our SEO services include keyword research, on-page optimization, technical SEO, content optimization, local SEO, link building, and monthly performance reporting.',
    },
    {
      question: 'Do you manage social media accounts?',
      answer: 'Yes, we offer complete social media management including content creation, posting, engagement management, and paid advertising across platforms like Instagram, Facebook, LinkedIn, and Twitter.',
    },
    {
      question: 'How do you measure digital marketing success?',
      answer: 'We track key metrics including website traffic, search rankings, lead generation, conversion rates, social engagement, and ROI. You receive monthly reports with detailed analytics.',
    },
  ],
  relatedServices: [
    {
      title: 'Business Advisory',
      description: 'Strategic consulting for business growth.',
      href: '/services/business-advisory',
    },
    {
      title: 'Tender Assistance',
      description: 'GEM catalog and tender participation support.',
      href: '/services/tender-assistance',
    },
    {
      title: 'Business Certifications',
      description: 'Build credibility with official certifications.',
      href: '/services/business-certifications',
    },
  ],
};

export default function DigitalMarketingPage() {
  return <ServicePageTemplate service={serviceData} />;
}
