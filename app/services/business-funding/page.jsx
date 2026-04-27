"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const serviceData = {
  title: "Business Funding Solutions",
  shortTitle: "Business Funding",
  subtitle: "Complete Funding Support - Bank Loans, NBFCs, Government Schemes & Angel Investment",
  tag: "FUNDING SOLUTIONS",
  overviewTitle: "Comprehensive Funding Support",
  overviewContent: [
    "Every business needs capital to grow. Whether you need working capital, term loans, equipment financing, or startup funding, we help you navigate the complex funding landscape.",
    "Our services cover bank loans, NBFC financing, government subsidy schemes, venture capital connections, and alternative funding options tailored to your business stage and needs.",
    "With relationships across 50+ banks and NBFCs, and expertise in 30+ government schemes, we ensure you get the best funding option with favorable terms.",
  ],
  image: "/images/services/funding.jpg",
  included: [
    "Funding requirement assessment",
    "Business valuation",
    "Loan eligibility check",
    "Bank/NBFC selection",
    "Proposal preparation",
    "Government scheme mapping",
    "Investor pitch deck",
    "Term negotiation",
    "Documentation support",
  ],
  process: [
    {
      title: "Assessment",
      description: "Understand your funding needs and capacity",
    },
    {
      title: "Option Analysis",
      description: "Identify best funding sources",
    },
    {
      title: "Application",
      description: "Prepare and submit funding applications",
    },
    {
      title: "Disbursement",
      description: "Secure funding with best terms",
    },
  ],
  faqs: [
    {
      question: "What funding options are available for startups?",
      answer: "Startups can access MUDRA loans, angel investment, venture capital, government schemes like Startup India Seed Fund, incubator funding, and SIDBI's Fund of Funds.",
    },
    {
      question: "How do you help with bank loan approval?",
      answer: "We prepare comprehensive loan proposals, optimize your financials presentation, select banks based on your profile, and handle complete documentation and liaison.",
    },
    {
      question: "Can you help if I have been rejected by banks?",
      answer: "Yes, we analyze rejection reasons, work on improving your profile, and identify alternative funding sources including NBFCs and government schemes that may have different criteria.",
    },
    {
      question: "What is the typical success rate?",
      answer: "Our clients have a 90%+ success rate for funding applications, significantly higher than direct applications, due to our expertise in proposal preparation and lender relationships.",
    },
  ],
  relatedServices: [
    {
      title: "PMEGP Scheme",
      description: "Subsidy-linked bank loans",
      href: "/services/pmegp",
    },
    {
      title: "CGTMSE",
      description: "Collateral-free credit guarantee",
      href: "/services/cgtmse",
    },
    {
      title: "Startup India",
      description: "Access startup funding ecosystem",
      href: "/services/startup-india",
    },
  ],
};

export default function BusinessFundingPage() {
  return <ServicePageTemplate service={serviceData} />;
}
