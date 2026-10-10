import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { seoFaqs } from '@/lib/seo/services';

export const metadata = {
  keywords: ['GEM registration', 'tender assistance', 'government tenders', 'bid management', 'government liaison Gujarat'],
};

const serviceData = {
  title: 'Tender & Government Liaison',
  shortTitle: 'Tender Services',
  subtitle: 'Navigate government procurement with confidence and win more contracts.',
  tag: 'TENDER SERVICES',
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  overviewTitle: 'Your Partner in Government Procurement',
  overviewContent: [
    'Government tenders represent a massive business opportunity, with billions spent annually on procurement. However, the tender process can be complex and time-consuming for businesses unfamiliar with government procedures.',
    'Euroasia specializes in government liaison services, helping businesses register on procurement portals, identify relevant tenders, prepare winning bids, and manage the entire tender lifecycle.',
  ],
  included: [
    'GEM (Government e-Marketplace) Registration',
    'GeM Catalog Management',
    'Tender Search & Identification',
    'Bid Document Preparation',
    'Technical Bid Assistance',
    'Financial Bid Optimization',
    'EMD & BG Support',
    'e-Procurement Portal Registration',
    'CPPP Registration',
    'State Portal Registrations',
    'Tender Tracking & Alerts',
    'Post-Award Support',
  ],
  process: [
    {
      title: 'Registration',
      description: 'Complete registration on GEM and relevant procurement portals.',
    },
    {
      title: 'Identification',
      description: 'Identify suitable tenders matching your business profile.',
    },
    {
      title: 'Preparation',
      description: 'Prepare compliant and competitive bid documents.',
    },
    {
      title: 'Submission',
      description: 'Submit bids and manage post-submission requirements.',
    },
  ],
  faqs: [
    {
      question: 'What is GEM registration?',
      answer: 'GEM (Government e-Marketplace) is the official procurement portal for government departments. Registration allows you to sell products and services directly to government buyers across India.',
    },
    {
      question: 'How long does GEM registration take?',
      answer: 'GEM registration typically takes 3-5 working days after document submission. We help expedite the process by ensuring all documents are correctly formatted and complete.',
    },
    {
      question: 'Can startups participate in government tenders?',
      answer: 'Yes, many tenders have relaxed eligibility criteria for startups. DPIIT-recognized startups also get benefits like exemption from prior turnover and experience requirements in certain categories.',
    },
    {
      question: 'Do you help with tender document preparation?',
      answer: 'Yes, we prepare complete bid documents including technical proposals, compliance sheets, price bids, and all required supporting documentation to ensure your bid is compliant and competitive.',
    },
    ...seoFaqs('tender-assistance'),
  ],
  relatedServices: [
    {
      title: 'Business Certifications',
      description: 'MSME and other certifications required for tenders.',
      href: '/services/business-certifications',
    },
    {
      title: 'Compliance & Legal',
      description: 'Documentation support for tender compliance.',
      href: '/services/compliance-legal',
    },
    {
      title: 'Digital Marketing',
      description: 'Build your online presence for GeM catalog.',
      href: '/services/digital-marketing',
    },
  ],
};

export default function TenderAssistancePage() {
  return <ServicePageTemplate service={serviceData} />;
}
