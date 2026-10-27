"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "ZED Certification",
  shortTitle: "ZED",
  subtitle: "Zero Defect Zero Effect Certification with up to ₹5 Lakhs Subsidy",
  tag: "QUALITY CERTIFICATION",
  overviewTitle: "What is ZED Certification?",
  overviewContent: [
    "ZED (Zero Defect Zero Effect) is a certification scheme by the Ministry of MSME to enhance quality and competitiveness of Indian MSMEs. It focuses on manufacturing excellence with minimal environmental impact.",
    "The scheme offers three levels - Bronze, Silver, and Gold certification. MSMEs get subsidies up to 80% on certification costs, plus additional benefits like technology upgradation support.",
    "Euroasia Aquatic guides you through the entire ZED certification process, from initial assessment to final certification, ensuring your business meets quality standards.",
  ],
  image: "/images/services/zed.png",
  included: [
    "Initial gap assessment",
    "ZED portal registration",
    "Self-assessment guidance",
    "Documentation support",
    "Desktop assessment preparation",
    "Site assessment coordination",
    "Certification application",
    "Subsidy claim assistance",
    "Post-certification support",
  ],
  process: [
    {
      title: "Registration",
      description: "Register on ZED portal and complete self-assessment",
    },
    {
      title: "Gap Analysis",
      description: "Identify areas needing improvement",
    },
    {
      title: "Assessment",
      description: "Desktop and site assessment by certified agency",
    },
    {
      title: "Certification",
      description: "Receive ZED certificate and claim subsidy",
    },
  ],
  faqs: [
    {
      question: "What are the benefits of ZED certification?",
      answer: "Benefits include up to 80% subsidy on certification cost, priority in government tenders, interest subvention on loans, access to technology upgradation funds, and enhanced market credibility.",
    },
    {
      question: "Who can apply for ZED certification?",
      answer: "Any MSME with valid Udyam registration can apply for ZED certification. Manufacturing units get priority, but service units can also apply.",
    },
    {
      question: "What are the different levels of ZED certification?",
      answer: "Bronze (basic quality parameters), Silver (intermediate with better processes), and Gold (highest level with excellence in quality and sustainability).",
    },
    {
      question: "How long is ZED certification valid?",
      answer: "ZED certification is valid for 3 years from the date of issue. Renewal assessment is required before expiry to maintain certification status.",
    },
    ...seoFaqs("zed-certification"),
  ],
  relatedServices: [
    {
      title: "MSME Registration",
      description: "Required for ZED certification",
      href: "/services/msme-registration",
    },
    {
      title: "GEM Registration",
      description: "Sell to government after ZED",
      href: "/services/gem-registration",
    },
    {
      title: "ISO Certification",
      description: "International quality standards",
      href: "/services/business-certifications",
    },
  ],
};

export default function ZEDCertificationPage() {
  return <ServicePageTemplate service={serviceData} />;
}
