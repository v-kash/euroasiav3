import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata = {
  title: 'Company Compliance & Legal Advisory in Ahmedabad',
  description: 'Expert ROC filings, annual compliance, legal documentation, company formation, and regulatory advisory services for businesses in Gujarat.',
  keywords: ['ROC filing', 'company compliance', 'legal advisory', 'LLP formation', 'company registration Gujarat'],
  alternates: {
    canonical: '/services/compliance-legal',
  },
  openGraph: {
    title: 'Company Compliance & Legal Advisory | Euroasia',
    description: 'Professional compliance and legal services for companies in Gujarat.',
  },
};

const serviceData = {
  title: 'Company Compliance & Legal Advisory',
  shortTitle: 'Compliance',
  subtitle: 'Stay compliant with all regulatory requirements and focus on your core business.',
  tag: 'COMPLIANCE & LEGAL',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  overviewTitle: 'Expert Compliance Management',
  overviewContent: [
    'Regulatory compliance is crucial for every business, but keeping up with changing regulations can be overwhelming. Non-compliance can result in penalties, legal issues, and damage to your business reputation.',
    'Euroasia provides comprehensive compliance and legal advisory services, ensuring your company meets all statutory requirements while you focus on growing your business.',
  ],
  included: [
    'Private Limited Company Registration',
    'LLP Formation & Registration',
    'One Person Company (OPC) Setup',
    'Partnership Firm Registration',
    'Annual ROC Filings',
    'Director KYC & DIN Services',
    'Board Meeting Compliance',
    'AGM Documentation',
    'Company Name Change',
    'Registered Office Change',
    'Share Transfer Services',
    'Company Closure/Strike Off',
  ],
  process: [
    {
      title: 'Assessment',
      description: 'We review your current compliance status and identify gaps.',
    },
    {
      title: 'Planning',
      description: 'Create a compliance calendar and action plan for your company.',
    },
    {
      title: 'Execution',
      description: 'Handle all filings, documentation, and submissions.',
    },
    {
      title: 'Monitoring',
      description: 'Ongoing compliance monitoring and timely reminders.',
    },
  ],
  faqs: [
    {
      question: 'What is annual ROC filing?',
      answer: 'Annual ROC filing includes submitting financial statements (AOC-4), annual return (MGT-7), and other mandatory forms to the Registrar of Companies within specified deadlines.',
    },
    {
      question: 'What happens if I miss compliance deadlines?',
      answer: 'Missing compliance deadlines can result in additional fees, penalties, director disqualification, and in severe cases, company strike-off. We help you avoid these issues with proactive reminders.',
    },
    {
      question: 'How do you help with company formation?',
      answer: 'We handle the entire company formation process including name reservation, DSC & DIN, MOA/AOA drafting, incorporation filing, PAN/TAN application, and bank account opening assistance.',
    },
    {
      question: 'Can you help convert my business structure?',
      answer: 'Yes, we assist with conversions such as proprietorship to Pvt Ltd, partnership to LLP, LLP to Pvt Ltd, and private to public company conversions.',
    },
  ],
  relatedServices: [
    {
      title: 'Business Certifications',
      description: 'Startup India, MSME, and other essential certifications.',
      href: '/services/business-certifications',
    },
    {
      title: 'Tax Exemption Services',
      description: 'Tax benefits and government incentive schemes.',
      href: '/services/tax-exemption',
    },
    {
      title: 'Business Advisory',
      description: 'Strategic consulting and growth support.',
      href: '/services/business-advisory',
    },
  ],
};

export default function ComplianceLegalPage() {
  return <ServicePageTemplate service={serviceData} />;
}
