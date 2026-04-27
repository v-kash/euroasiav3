import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata = {
  title: 'Tax Exemption & Incentive Services in Ahmedabad',
  description: 'Expert assistance for 80-IAC benefits, angel tax exemption, startup tax benefits, and government incentive schemes in Gujarat.',
  keywords: ['80-IAC benefits', 'tax exemption startup', 'angel tax exemption', 'government subsidies Gujarat'],
  alternates: {
    canonical: '/services/tax-exemption',
  },
  openGraph: {
    title: 'Tax Exemption & Incentive Services | Euroasia',
    description: 'Maximize your tax benefits with expert assistance in Gujarat.',
  },
};

const serviceData = {
  title: 'Tax Exemption & Incentive Services',
  shortTitle: 'Tax Services',
  subtitle: 'Maximize your savings with government tax benefits and incentive schemes.',
  tag: 'TAX SERVICES',
  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
  overviewTitle: 'Unlock Tax Benefits for Your Business',
  overviewContent: [
    'The Indian government offers numerous tax exemptions and incentive schemes to promote entrepreneurship and business growth. However, navigating these benefits and meeting eligibility criteria can be complex.',
    'Euroasia helps businesses identify applicable tax benefits, prepare applications, and secure approvals. From startup tax exemptions to industry-specific subsidies, we ensure you don\'t miss out on available savings.',
  ],
  included: [
    '80-IAC Tax Exemption Application',
    'Angel Tax Exemption (Section 56)',
    'DPIIT Startup Recognition',
    'State Startup Policy Benefits',
    'Capital Gains Tax Exemption',
    'R&D Tax Benefits',
    'Export Incentive Schemes',
    'MSME Subsidies',
    'Gujarat Industrial Policy Benefits',
    'Credit Linked Capital Subsidy',
    'Interest Subsidy Schemes',
    'Employment Generation Subsidies',
  ],
  process: [
    {
      title: 'Eligibility Check',
      description: 'Assess your business for applicable tax benefits and schemes.',
    },
    {
      title: 'Documentation',
      description: 'Prepare comprehensive application with supporting documents.',
    },
    {
      title: 'Filing',
      description: 'Submit applications to relevant authorities.',
    },
    {
      title: 'Approval',
      description: 'Follow up and secure approval for your benefits.',
    },
  ],
  faqs: [
    {
      question: 'What is 80-IAC tax exemption?',
      answer: '80-IAC provides eligible startups with income tax exemption for 3 consecutive years out of 10 years from incorporation. The startup must be DPIIT recognized and meet certain criteria.',
    },
    {
      question: 'Who is eligible for angel tax exemption?',
      answer: 'DPIIT recognized startups can apply for angel tax exemption under Section 56(2)(viib). This exempts investments received from investors from being treated as income, subject to aggregate investment limits.',
    },
    {
      question: 'What subsidies are available under Gujarat Industrial Policy?',
      answer: 'Gujarat offers various subsidies including interest subsidy, capital subsidy, electricity duty exemption, stamp duty exemption, and assistance for quality certification, depending on the industry and location.',
    },
    {
      question: 'How long does it take to get 80-IAC approval?',
      answer: 'The 80-IAC approval process typically takes 2-3 months after submission, depending on the Inter-Ministerial Board\'s review schedule and completeness of your application.',
    },
  ],
  relatedServices: [
    {
      title: 'Business Certifications',
      description: 'DPIIT recognition and startup certifications.',
      href: '/services/business-certifications',
    },
    {
      title: 'Compliance & Legal',
      description: 'Tax compliance and legal documentation.',
      href: '/services/compliance-legal',
    },
    {
      title: 'Business Advisory',
      description: 'Strategic planning for tax optimization.',
      href: '/services/business-advisory',
    },
  ],
};

export default function TaxExemptionPage() {
  return <ServicePageTemplate service={serviceData} />;
}
