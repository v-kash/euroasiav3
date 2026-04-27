import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export const metadata = {
  title: 'Business Certification Services in Ahmedabad',
  description: 'Get Startup India, MSME Udyam, ZED, ISO, and other essential business certifications. Expert assistance for registration and documentation in Gujarat.',
  keywords: ['Startup India registration', 'MSME Udyam', 'ZED certification', 'ISO certification', 'business certification Ahmedabad'],
  alternates: {
    canonical: '/services/business-certifications',
  },
  openGraph: {
    title: 'Business Certification Services | Euroasia',
    description: 'Expert assistance for Startup India, MSME, ZED, and ISO certifications in Gujarat.',
  },
};

const serviceData = {
  title: 'Business Certification Services',
  shortTitle: 'Certifications',
  subtitle: 'Unlock government benefits and credibility with essential business certifications.',
  tag: 'CERTIFICATIONS',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  overviewTitle: 'Your Gateway to Business Growth',
  overviewContent: [
    'Business certifications are essential credentials that validate your company\'s capabilities, compliance, and commitment to quality. They open doors to government schemes, tender opportunities, and enhanced market credibility.',
    'At Euroasia, we simplify the certification process by handling all documentation, applications, and follow-ups. Our expert team ensures quick turnaround and successful registration across all major certification programs.',
  ],
  included: [
    'Startup India Registration (DPIIT)',
    'MSME Udyam Registration',
    'ZED Certification',
    'ISO Certification Support',
    'IEC Code Registration',
    'FSSAI License',
    'Trade License',
    'Shop & Establishment License',
    'Professional Tax Registration',
    'BIS Certification Support',
    'NSIC Registration',
    'Trademark Registration',
  ],
  process: [
    {
      title: 'Consultation',
      description: 'We assess your business needs and recommend suitable certifications.',
    },
    {
      title: 'Documentation',
      description: 'Our team prepares and organizes all required documents.',
    },
    {
      title: 'Application',
      description: 'We submit applications to relevant authorities on your behalf.',
    },
    {
      title: 'Certification',
      description: 'Receive your certification with our follow-up support.',
    },
  ],
  faqs: [
    {
      question: 'What is Startup India registration?',
      answer: 'Startup India registration is a DPIIT recognition that provides startups with tax benefits, easier compliance, funding support, and access to various government schemes designed to foster entrepreneurship.',
    },
    {
      question: 'How long does MSME Udyam registration take?',
      answer: 'MSME Udyam registration is typically completed within 1-2 working days once all required documents are submitted. The process is entirely online.',
    },
    {
      question: 'What are the benefits of ZED certification?',
      answer: 'ZED certification helps MSMEs achieve zero defect manufacturing with zero environmental impact. Benefits include government subsidies, improved product quality, market credibility, and access to government tenders.',
    },
    {
      question: 'Do you provide ISO certification?',
      answer: 'We provide complete ISO certification support including gap analysis, documentation, implementation guidance, and liaison with certification bodies for ISO 9001, 14001, 45001, and other standards.',
    },
  ],
  relatedServices: [
    {
      title: 'Company Compliance & Legal',
      description: 'ROC filings, annual compliance, and legal documentation services.',
      href: '/services/compliance-legal',
    },
    {
      title: 'Tax Exemption Services',
      description: '80-IAC benefits and startup tax exemption assistance.',
      href: '/services/tax-exemption',
    },
    {
      title: 'Tender Assistance',
      description: 'GEM registration and government tender support.',
      href: '/services/tender-assistance',
    },
  ],
};

export default function BusinessCertificationsPage() {
  return <ServicePageTemplate service={serviceData} />;
}
