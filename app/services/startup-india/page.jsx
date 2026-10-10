"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "Startup India Registration",
  shortTitle: "Startup India",
  subtitle: "DPIIT Recognition for Tax Benefits, Funding Access & Government Tenders",
  tag: "STARTUP RECOGNITION",
  overviewTitle: "What is Startup India?",
  overviewContent: [
    "Startup India is a flagship initiative by the Government of India to build a strong ecosystem for nurturing innovation and startups. DPIIT recognition under this scheme opens doors to numerous benefits.",
    "Recognized startups get 3-year income tax exemption under Section 80-IAC, exemption from Angel Tax, fast-track patent applications, self-certification for compliance, and access to Fund of Funds.",
    "Euroasia Aquatic provides end-to-end assistance for Startup India recognition, from eligibility assessment to certificate issuance and beyond.",
  ],
  image: "/images/services/startup-india.jpg",
  included: [
    "Eligibility assessment",
    "Company incorporation support",
    "DPIIT application filing",
    "Document preparation",
    "Business description drafting",
    "Recognition certificate",
    "Tax exemption guidance",
    "Investor connect support",
    "Compliance assistance",
  ],
  process: [
    {
      title: "Eligibility Check",
      description: "Verify if your business qualifies as a startup",
    },
    {
      title: "Documentation",
      description: "Prepare incorporation documents and business details",
    },
    {
      title: "DPIIT Application",
      description: "File online application on Startup India portal",
    },
    {
      title: "Recognition",
      description: "Receive DPIIT recognition certificate",
    },
  ],
  faqs: [
    {
      question: "What is the eligibility criteria for Startup India?",
      answer: "Entity should be incorporated as Pvt Ltd, LLP, or Partnership. Should be less than 10 years old. Annual turnover should not exceed ₹100 Crores. Working towards innovation or scalable business model.",
    },
    {
      question: "What tax benefits do recognized startups get?",
      answer: "Startups can apply for 3-year income tax exemption under Section 80-IAC. They also get exemption from Angel Tax under Section 56(2)(viib) after obtaining DPIIT recognition.",
    },
    {
      question: "How long does Startup India registration take?",
      answer: "The online process typically takes 2-7 working days for DPIIT recognition. Tax exemption under 80-IAC requires additional application to the Inter-Ministerial Board.",
    },
    {
      question: "Can existing businesses register under Startup India?",
      answer: "Yes, if the business is less than 10 years old from incorporation, meets the innovation criteria, and has turnover below ₹100 Crores.",
    },
    ...seoFaqs("startup-india"),
  ],
  relatedServices: [
    {
      title: "80-IAC Tax Exemption",
      description: "Apply for 3-year income tax exemption",
      href: "/services/80-iac",
    },
    {
      title: "MSME Registration",
      description: "Get Udyam certificate alongside",
      href: "/services/msme-registration",
    },
    {
      title: "Business Funding",
      description: "Access funding opportunities",
      href: "/services/business-funding",
    },
  ],
};

export default function StartupIndiaPage() {
  return <ServicePageTemplate service={serviceData} />;
}
