"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "MUDRA Loan Assistance",
  shortTitle: "MUDRA Loan",
  subtitle: "Collateral-free business loans up to ₹20 Lakhs under Pradhan Mantri MUDRA Yojana",
  tag: "GOVERNMENT SCHEME",
  overviewTitle: "What is MUDRA Loan?",
  overviewContent: [
    "MUDRA (Micro Units Development and Refinance Agency) provides loans to micro and small enterprises through banks and NBFCs. The scheme offers four categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakhs), Tarun (₹5 Lakhs to ₹10 Lakhs), and Tarun Plus (₹10 Lakhs to ₹20 Lakhs, for borrowers who have availed and successfully repaid a previous Tarun loan).",
    "The biggest advantage of MUDRA loans is that they are collateral-free, making it accessible for small entrepreneurs and first-time business owners to get working capital and term loans.",
    "Our team at Euroasia Aquatic assists you in preparing a strong application, connecting with the right bank, and ensuring smooth processing of your MUDRA loan.",
  ],
  image: "/images/services/mudra.png",
  included: [
    "Category assessment (Shishu/Kishore/Tarun/Tarun Plus)",
    "Business plan preparation",
    "Bank application documentation",
    "MUDRA card assistance",
    "Working capital assessment",
    "Term loan structuring",
    "Bank liaison support",
    "Post-disbursement guidance",
    "Renewal assistance",
  ],
  process: [
    {
      title: "Assessment",
      description: "Evaluate your business needs and select appropriate category",
    },
    {
      title: "Documentation",
      description: "Prepare loan application with business plan",
    },
    {
      title: "Bank Selection",
      description: "Identify the best bank based on your profile",
    },
    {
      title: "Disbursement",
      description: "Follow up until loan is sanctioned and disbursed",
    },
  ],
  faqs: [
    {
      question: "What are the categories of MUDRA loans?",
      answer: "Shishu: Up to ₹50,000 for startups. Kishore: ₹50,000 to ₹5 Lakhs for established businesses. Tarun: ₹5 Lakhs to ₹10 Lakhs for expansion needs. Tarun Plus: ₹10 Lakhs to ₹20 Lakhs for borrowers who have availed and successfully repaid a previous Tarun loan.",
    },
    {
      question: "Is collateral required for MUDRA loans?",
      answer: "No, MUDRA loans are collateral-free. Banks cannot ask for any security or guarantee for loans under MUDRA scheme.",
    },
    {
      question: "What is the interest rate on MUDRA loans?",
      answer: "Interest rates vary between 8% to 12% depending on the bank and your business profile. There is no fixed rate mandated by the government.",
    },
    {
      question: "Can I get MUDRA loan if I have low CIBIL score?",
      answer: "Yes, MUDRA focuses more on business viability than credit score. However, having a good CIBIL score increases approval chances and may get you better rates.",
    },
    ...seoFaqs("mudra"),
  ],
  relatedServices: [
    {
      title: "PMEGP Scheme",
      description: "Get up to 35% subsidy on your project",
      href: "/services/pmegp",
    },
    {
      title: "MSME Registration",
      description: "Get Udyam certificate for your business",
      href: "/services/msme-registration",
    },
    {
      title: "Business Funding",
      description: "Explore more funding options",
      href: "/services/business-funding",
    },
  ],
};

export default function MudraPage() {
  return <ServicePageTemplate service={serviceData} />;
}
