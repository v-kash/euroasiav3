"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const serviceData = {
  title: "MSME / Udyam Registration",
  shortTitle: "MSME Registration",
  subtitle: "Get Official Udyam Certificate for Government Benefits & Tender Priority",
  tag: "BUSINESS REGISTRATION",
  overviewTitle: "What is Udyam/MSME Registration?",
  overviewContent: [
    "Udyam Registration is the official MSME registration by the Ministry of MSME, replacing the earlier Udyog Aadhaar. It's a permanent registration with no renewal required and provides a unique Udyam Registration Number (URN).",
    "MSME registration unlocks numerous benefits including priority sector lending, lower interest rates, collateral-free loans, tender preference, subsidy schemes, and protection against delayed payments.",
    "Euroasia Aquatic ensures quick and accurate Udyam registration, helping you classify your enterprise correctly and access all MSME benefits.",
  ],
  image: "/images/services/msme.jpg",
  included: [
    "Enterprise classification assessment",
    "Udyam portal registration",
    "Aadhaar-PAN linking support",
    "Investment calculation",
    "Turnover documentation",
    "NIC code selection",
    "Certificate generation",
    "Bank linking assistance",
    "Annual update support",
  ],
  process: [
    {
      title: "Assessment",
      description: "Determine Micro/Small/Medium classification",
    },
    {
      title: "Documentation",
      description: "Prepare Aadhaar, PAN, and business details",
    },
    {
      title: "Registration",
      description: "Complete online Udyam registration",
    },
    {
      title: "Certificate",
      description: "Receive Udyam Registration Certificate",
    },
  ],
  faqs: [
    {
      question: "What is the classification criteria for MSME?",
      answer: "Micro: Investment up to ₹1 Cr, Turnover up to ₹5 Cr. Small: Investment up to ₹10 Cr, Turnover up to ₹50 Cr. Medium: Investment up to ₹50 Cr, Turnover up to ₹250 Cr.",
    },
    {
      question: "Is Udyam registration mandatory?",
      answer: "While not legally mandatory for all businesses, it's required to avail any MSME benefits, government scheme, or priority in tenders. Highly recommended for all eligible businesses.",
    },
    {
      question: "What documents are required for Udyam registration?",
      answer: "Only Aadhaar number of the proprietor/partner/director is mandatory. PAN and GST are auto-verified. No other documents need to be uploaded.",
    },
    {
      question: "How long is Udyam registration valid?",
      answer: "Udyam registration is permanent and doesn't require renewal. However, you should update details if there are changes in investment or turnover affecting classification.",
    },
  ],
  relatedServices: [
    {
      title: "Startup India",
      description: "Additional recognition for startups",
      href: "/services/startup-india",
    },
    {
      title: "GEM Registration",
      description: "Sell to government with MSME benefits",
      href: "/services/gem-registration",
    },
    {
      title: "PMEGP Scheme",
      description: "Get subsidy for new unit",
      href: "/services/pmegp",
    },
  ],
};

export default function MSMERegistrationPage() {
  return <ServicePageTemplate service={serviceData} />;
}
