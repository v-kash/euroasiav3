"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "GST & Tax Compliance",
  shortTitle: "GST Compliance",
  subtitle: "Complete GST Registration, Returns Filing & Tax Planning Services",
  tag: "TAX SERVICES",
  overviewTitle: "End-to-End Tax Compliance",
  overviewContent: [
    "Navigate the complexities of GST and tax compliance with our expert team. From registration to annual returns, we ensure your business stays compliant while optimizing tax efficiency.",
    "Our services cover GST registration and amendments, monthly/quarterly return filing, annual returns, e-invoicing setup, and handling GST notices and assessments.",
    "We also provide tax planning services to help you legitimately reduce tax burden through available exemptions, deductions, and scheme-specific benefits.",
  ],
  image: "/images/services/gst.png",
  included: [
    "GST registration",
    "GSTR-1, GSTR-3B filing",
    "Annual return (GSTR-9)",
    "E-invoicing setup",
    "E-way bill compliance",
    "Input tax credit optimization",
    "GST audit support",
    "Notice response",
    "Amendment and cancellation",
  ],
  process: [
    {
      title: "Assessment",
      description: "Review your business for GST requirements",
    },
    {
      title: "Registration",
      description: "Complete GST registration process",
    },
    {
      title: "Compliance",
      description: "Regular return filing and reconciliation",
    },
    {
      title: "Optimization",
      description: "ITC optimization and tax planning",
    },
  ],
  faqs: [
    {
      question: "When is GST registration mandatory?",
      answer: "GST registration is mandatory if annual turnover exceeds ₹40 Lakhs (₹20 Lakhs for services/special states), for inter-state supply, e-commerce sellers, and certain categories.",
    },
    {
      question: "What returns need to be filed under GST?",
      answer: "Regular taxpayers file GSTR-1 (sales) and GSTR-3B (summary) monthly/quarterly. Annual return GSTR-9 is due in December. Composition dealers file CMP-08 quarterly.",
    },
    {
      question: "What are the penalties for non-compliance?",
      answer: "Late filing attracts ₹50/day (₹20 for NIL) up to ₹10,000 per return. Interest of 18% p.a. on tax payable. Wrong invoicing can attract 100% penalty.",
    },
    {
      question: "How can I claim input tax credit?",
      answer: "ITC can be claimed on business purchases if you have valid tax invoice, goods/services received, supplier has filed return, and payment made within 180 days.",
    },
    ...seoFaqs("gst-compliance"),
  ],
  relatedServices: [
    {
      title: "MSME Registration",
      description: "Get Udyam with GST linking",
      href: "/services/msme-registration",
    },
    {
      title: "80-IAC Tax Exemption",
      description: "Income tax benefits for startups",
      href: "/services/80-iac",
    },
    {
      title: "IEC Registration",
      description: "For export GST refunds",
      href: "/services/iec-registration",
    },
  ],
};

export default function GSTCompliancePage() {
  return <ServicePageTemplate service={serviceData} />;
}
