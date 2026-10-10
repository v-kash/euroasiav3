"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "CGTMSE Loan Scheme",
  shortTitle: "CGTMSE",
  subtitle: "Collateral-Free Credit Guarantee up to ₹5 Crore for MSMEs",
  tag: "CREDIT GUARANTEE",
  overviewTitle: "What is CGTMSE?",
  overviewContent: [
    "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides credit guarantee to banks and financial institutions for collateral-free loans to MSMEs up to ₹5 Crore.",
    "Under this scheme, banks can lend to MSMEs without demanding collateral security or third-party guarantee. The guarantee covers up to 85% of the sanctioned amount for micro enterprises.",
    "Euroasia Aquatic helps you prepare a strong loan application and connects you with CGTMSE-enrolled banks for maximum loan approval chances.",
  ],
  image: "/images/services/cgtmse.jpg",
  included: [
    "Eligibility assessment",
    "Business plan preparation",
    "Loan application documentation",
    "Bank selection guidance",
    "CGTMSE guarantee processing",
    "Project report preparation",
    "Financial projections",
    "Bank liaison support",
    "Post-sanction assistance",
  ],
  process: [
    {
      title: "Assessment",
      description: "Evaluate loan requirement and eligibility",
    },
    {
      title: "Documentation",
      description: "Prepare comprehensive loan application",
    },
    {
      title: "Bank Application",
      description: "Apply to CGTMSE-enrolled bank",
    },
    {
      title: "Guarantee",
      description: "Bank obtains CGTMSE guarantee and disburses loan",
    },
  ],
  faqs: [
    {
      question: "What is the maximum loan amount under CGTMSE?",
      answer: "The maximum credit guarantee coverage is ₹5 Crore per borrower. Banks can sanction higher amounts, but guarantee coverage is limited to ₹5 Crore.",
    },
    {
      question: "What is the guarantee coverage percentage?",
      answer: "Micro enterprises (up to ₹5 Lakhs): 85%. Women/NER enterprises: 80%. Other MSMEs: 75% of sanctioned amount up to specified limits.",
    },
    {
      question: "Who bears the guarantee fee?",
      answer: "The borrower typically pays the guarantee fee, which ranges from 0.37% to 1.35% annually depending on the loan amount and enterprise category.",
    },
    {
      question: "Can existing businesses apply for CGTMSE loans?",
      answer: "Yes, both new and existing micro and small enterprises can avail loans under CGTMSE scheme for various purposes including working capital and term loan.",
    },
    ...seoFaqs("cgtmse"),
  ],
  relatedServices: [
    {
      title: "PMEGP Scheme",
      description: "Get subsidy along with loan",
      href: "/services/pmegp",
    },
    {
      title: "MUDRA Loan",
      description: "Loans up to ₹10 Lakhs",
      href: "/services/mudra",
    },
    {
      title: "Business Funding",
      description: "Explore all funding options",
      href: "/services/business-funding",
    },
  ],
};

export default function CGTMSEPage() {
  return <ServicePageTemplate service={serviceData} />;
}
