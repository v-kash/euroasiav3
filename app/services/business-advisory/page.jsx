import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata = {
  title: 'Business Growth & Advisory Services in Ahmedabad',
  description: 'Strategic consulting, market research, funding assistance, and comprehensive business advisory services for startups and SMEs in Gujarat.',
  keywords: ['business advisory', 'startup consulting', 'funding assistance', 'market research Gujarat'],
  alternates: {
    canonical: '/services/business-advisory',
  },
  openGraph: {
    title: 'Business Growth & Advisory | Euroasia',
    description: 'Expert business consulting and growth support in Gujarat.',
  },
};

const serviceData = {
  title: 'Business Growth & Advisory',
  shortTitle: 'Business Advisory',
  subtitle: 'Strategic guidance to accelerate your business growth and market expansion.',
  tag: 'ADVISORY SERVICES',
  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
  overviewTitle: 'Your Strategic Growth Partner',
  overviewContent: [
    'Growing a business requires more than just great products or services. Strategic planning, market understanding, and access to resources are equally important for sustainable success.',
    'Euroasia\'s business advisory services provide startups and SMEs with expert guidance on strategy, operations, funding, and market expansion. We help you make informed decisions and avoid common pitfalls on your growth journey.',
  ],
  included: [
    'Business Strategy Consulting',
    'Market Research & Analysis',
    'Feasibility Studies',
    'Business Plan Development',
    'Pitch Deck Preparation',
    'Funding Strategy & Support',
    'Investor Connect Programs',
    'Financial Modeling',
    'Expansion Planning',
    'Joint Venture Advisory',
    'Mergers & Acquisitions Support',
    'Performance Improvement',
  ],
  process: [
    {
      title: 'Analysis',
      description: 'Deep dive into your business, market, and objectives.',
    },
    {
      title: 'Strategy',
      description: 'Develop actionable strategies aligned with your goals.',
    },
    {
      title: 'Planning',
      description: 'Create detailed implementation roadmaps.',
    },
    {
      title: 'Execution',
      description: 'Support implementation and measure outcomes.',
    },
  ],
  faqs: [
    {
      question: 'What is included in business strategy consulting?',
      answer: 'Our strategy consulting includes market analysis, competitive positioning, growth opportunity identification, operational optimization, and development of actionable strategic plans tailored to your business.',
    },
    {
      question: 'How do you help with funding?',
      answer: 'We assist with funding strategy, pitch deck preparation, financial projections, investor identification, and facilitate introductions to our network of angels, VCs, and alternative funding sources.',
    },
    {
      question: 'Do you help with business plan writing?',
      answer: 'Yes, we develop comprehensive business plans including executive summary, market analysis, financial projections, operational plans, and growth strategies for various purposes like funding, bank loans, or internal planning.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve businesses across various sectors including technology, manufacturing, services, retail, and more. Our team has diverse industry expertise to provide relevant guidance for your specific sector.',
    },
  ],
  relatedServices: [
    {
      title: 'Tax Exemption Services',
      description: 'Optimize your tax position with government benefits.',
      href: '/services/tax-exemption',
    },
    {
      title: 'Digital Marketing',
      description: 'Build your brand and reach customers online.',
      href: '/services/digital-marketing',
    },
    {
      title: 'Business Certifications',
      description: 'Build credibility with essential certifications.',
      href: '/services/business-certifications',
    },
  ],
};

export default function BusinessAdvisoryPage() {
  return <ServicePageTemplate service={serviceData} />;
}
