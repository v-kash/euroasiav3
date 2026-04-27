"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const serviceData = {
  title: "PMEGP Scheme",
  shortTitle: "PMEGP",
  subtitle: "Prime Minister's Employment Generation Programme - Get up to ₹50 Lakhs subsidy for your business",
  tag: "GOVERNMENT SCHEME",
  overviewTitle: "What is PMEGP?",
  overviewContent: [
    "PMEGP (Prime Minister's Employment Generation Programme) is a flagship credit-linked subsidy scheme by the Government of India for generating employment opportunities through establishment of micro-enterprises.",
    "Under this scheme, you can get a subsidy of up to 35% for manufacturing units and 25% for service units, depending on your category and location. The maximum project cost is ₹50 Lakhs for manufacturing and ₹20 Lakhs for service sector.",
    "Euroasia Aquatic helps you navigate the entire PMEGP application process, from documentation to bank liaison, ensuring maximum chances of approval.",
  ],
  image: "/images/services/pmegp.jpg",
  included: [
    "Complete eligibility assessment",
    "Business plan preparation",
    "DPR (Detailed Project Report) creation",
    "KVIC/KVIB/DIC application filing",
    "Bank loan documentation",
    "Subsidy claim processing",
    "Post-sanction support",
    "Training certificate assistance",
    "Margin money documentation",
  ],
  process: [
    {
      title: "Consultation",
      description: "Free eligibility check and scheme explanation",
    },
    {
      title: "Documentation",
      description: "We prepare your DPR and all required documents",
    },
    {
      title: "Application",
      description: "Online application submission to KVIC portal",
    },
    {
      title: "Bank Liaison",
      description: "Complete support until loan sanction and subsidy release",
    },
  ],
  faqs: [
    {
      question: "Who is eligible for PMEGP?",
      answer: "Any individual above 18 years can apply. For projects above ₹10 Lakhs in manufacturing and ₹5 Lakhs in service sector, minimum 8th pass qualification is required. Existing units and those who have availed government subsidy are not eligible.",
    },
    {
      question: "What is the subsidy percentage under PMEGP?",
      answer: "General category gets 15% (urban) to 25% (rural) subsidy. Special categories (SC/ST/OBC/Women/Minorities/Ex-servicemen/PH/NER) get 25% (urban) to 35% (rural) subsidy on the project cost.",
    },
    {
      question: "How long does the PMEGP process take?",
      answer: "The typical timeline is 2-3 months from application to sanction, depending on bank processing and KVIC approval. We expedite this with our expertise.",
    },
    {
      question: "Can I apply for PMEGP if I already have a business?",
      answer: "No, PMEGP is only for new units. However, you can apply for PMEGP for a new unit if your existing business is not registered under any government scheme.",
    },
  ],
  relatedServices: [
    {
      title: "MUDRA Loan",
      description: "Get collateral-free loans up to ₹10 Lakhs",
      href: "/services/mudra",
    },
    {
      title: "CGTMSE",
      description: "Collateral-free credit guarantee scheme",
      href: "/services/cgtmse",
    },
    {
      title: "Startup India",
      description: "Register your startup for tax benefits",
      href: "/services/startup-india",
    },
  ],
};

export default function PMEGPPage() {
  return <ServicePageTemplate service={serviceData} />;
}
