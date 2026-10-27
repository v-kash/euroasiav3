"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "PMEGP Scheme",
  shortTitle: "PMEGP",
  subtitle: "Prime Minister's Employment Generation Programme - 15–35% margin-money subsidy for new units with project cost up to ₹50 Lakhs (manufacturing) or ₹20 Lakhs (service)",
  tag: "GOVERNMENT SCHEME",
  overviewTitle: "What is PMEGP?",
  overviewContent: [
    "PMEGP (Prime Minister's Employment Generation Programme) is a flagship credit-linked subsidy scheme by the Government of India for generating employment opportunities through establishment of micro-enterprises.",
    "Under this scheme, you can get a margin-money subsidy of 15% to 35% of the project cost, depending on your category (general or special) and location (urban or rural). The maximum project cost for new units is ₹50 Lakhs for manufacturing and ₹20 Lakhs for service/business.",
    "Euroasia Aquatic helps you navigate the entire PMEGP application process, from documentation to bank liaison, ensuring maximum chances of approval.",
  ],
  image: "/images/services/pmegp.png",
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
      answer: "No. The PMEGP margin-money subsidy is only for setting up new units, so existing units are not eligible. Units already set up under PMEGP or MUDRA can be considered separately for a second loan for upgradation, subject to scheme rules.",
    },
    ...seoFaqs("pmegp"),
  ],
  relatedServices: [
    {
      title: "MUDRA Loan",
      description: "Get collateral-free loans up to ₹20 Lakhs",
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
