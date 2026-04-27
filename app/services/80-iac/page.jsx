"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const serviceData = {
  title: "80-IAC Tax Exemption",
  shortTitle: "80-IAC",
  subtitle: "3-Year Income Tax Exemption for DPIIT Recognized Startups",
  tag: "TAX BENEFIT",
  overviewTitle: "What is Section 80-IAC?",
  overviewContent: [
    "Section 80-IAC of the Income Tax Act provides a 100% tax deduction on profits for eligible startups. This exemption is available for 3 consecutive years out of the first 10 years from incorporation.",
    "To avail this benefit, startups must be recognized by DPIIT and obtain clearance from the Inter-Ministerial Board (IMB). The startup must be incorporated as a Private Limited Company or LLP.",
    "Euroasia Aquatic handles the complete 80-IAC application process, from DPIIT recognition to IMB clearance, maximizing your chances of approval.",
  ],
  image: "/images/services/tax-exemption.jpg",
  included: [
    "DPIIT recognition assistance",
    "Eligibility assessment",
    "IMB application preparation",
    "Business model documentation",
    "Innovation proof compilation",
    "Financial projections",
    "Application filing",
    "Query response support",
    "Approval follow-up",
  ],
  process: [
    {
      title: "DPIIT Recognition",
      description: "First step is getting Startup India recognition",
    },
    {
      title: "Documentation",
      description: "Prepare innovation and scalability proof",
    },
    {
      title: "IMB Application",
      description: "File application to Inter-Ministerial Board",
    },
    {
      title: "Tax Exemption",
      description: "Claim deduction in ITR after approval",
    },
  ],
  faqs: [
    {
      question: "What is the eligibility for 80-IAC tax exemption?",
      answer: "Startup must be DPIIT recognized, incorporated as Pvt Ltd or LLP, turnover below ₹100 Crores, working on innovation/improvement of products or scalable business model.",
    },
    {
      question: "For how many years is 80-IAC exemption available?",
      answer: "100% tax exemption for 3 consecutive financial years out of the first 10 years from the date of incorporation. You can choose which 3 years to claim.",
    },
    {
      question: "What is the IMB clearance process?",
      answer: "After DPIIT recognition, you apply to IMB with details about innovation, employment generation, and revenue. IMB reviews and grants clearance for tax exemption.",
    },
    {
      question: "Can I apply for 80-IAC if my startup is 5 years old?",
      answer: "Yes, as long as your startup is less than 10 years old from incorporation, you can apply. The 3-year exemption can be claimed anytime within the 10-year window.",
    },
  ],
  relatedServices: [
    {
      title: "Startup India",
      description: "First step - Get DPIIT recognition",
      href: "/services/startup-india",
    },
    {
      title: "GST Compliance",
      description: "Complete tax compliance services",
      href: "/services/gst-compliance",
    },
    {
      title: "Business Funding",
      description: "Explore funding options",
      href: "/services/business-funding",
    },
  ],
};

export default function TaxExemption80IACPage() {
  return <ServicePageTemplate service={serviceData} />;
}
