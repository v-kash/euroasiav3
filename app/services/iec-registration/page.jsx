"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "IEC Code Registration",
  shortTitle: "IEC Registration",
  subtitle: "Import Export Code for International Trade & Cross-Border Transactions",
  tag: "EXPORT-IMPORT LICENSE",
  overviewTitle: "What is IEC Code?",
  overviewContent: [
    "Import Export Code (IEC) is a 10-digit code issued by DGFT (Directorate General of Foreign Trade) that's mandatory for importing or exporting goods and services from India.",
    "IEC is a lifetime license with no renewal required. It's essential for customs clearance, receiving foreign payments, and availing export benefits like duty drawback and GST refunds.",
    "Euroasia Aquatic provides hassle-free IEC registration with quick processing, ensuring you can start your international trade operations without delay.",
  ],
  image: "/images/services/iec.png",
  included: [
    "Eligibility assessment",
    "DGFT portal registration",
    "Application preparation",
    "Document verification",
    "Digital signature assistance",
    "IEC certificate generation",
    "Bank account linking",
    "RCMC guidance",
    "Amendment support",
  ],
  process: [
    {
      title: "Documentation",
      description: "Collect PAN, Aadhaar, bank details",
    },
    {
      title: "Application",
      description: "File online application on DGFT portal",
    },
    {
      title: "Verification",
      description: "Document verification by DGFT",
    },
    {
      title: "IEC Issued",
      description: "Receive IEC certificate (same day possible)",
    },
  ],
  faqs: [
    {
      question: "Who needs IEC registration?",
      answer: "Any person or entity importing or exporting goods/services needs IEC. Exceptions include personal use imports, goods under exempted categories, and certain notified goods.",
    },
    {
      question: "What is the validity of IEC?",
      answer: "IEC is valid for lifetime and does not need renewal. However, DGFT requires IEC holders to review and update their details on the portal every year to keep the IEC active.",
    },
    {
      question: "How long does IEC registration take?",
      answer: "IEC can be issued within 1-2 working days in normal cases. With proper documents and Aadhaar OTP verification, same-day issuance is possible.",
    },
    {
      question: "Can I export without IEC?",
      answer: "For most goods and services, IEC is mandatory. However, exemptions exist for personal gifts, samples, and certain services. Service exporters below ₹5 Lakhs annually are exempt.",
    },
    ...seoFaqs("iec-registration"),
  ],
  relatedServices: [
    {
      title: "GST Registration",
      description: "Required for export refunds",
      href: "/services/gst-compliance",
    },
    {
      title: "MSME Registration",
      description: "Export benefits for MSMEs",
      href: "/services/msme-registration",
    },
    {
      title: "Digital Marketing",
      description: "Market your products globally",
      href: "/services/digital-marketing",
    },
  ],
};

export default function IECRegistrationPage() {
  return <ServicePageTemplate service={serviceData} />;
}
