"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "GEM Portal Registration",
  shortTitle: "GEM Registration",
  subtitle: "Register on Government e-Marketplace to sell products & services to government departments",
  tag: "GOVERNMENT MARKETPLACE",
  overviewTitle: "What is GEM Registration?",
  overviewContent: [
    "GeM (Government e-Marketplace) is the official online procurement portal for government departments and PSUs. With over ₹3 Lakh Crore annual procurement, it's a massive opportunity for MSMEs.",
    "Once registered, you can list your products/services and participate in government tenders. MSMEs get special benefits like relaxed criteria, price preference, and exclusive items reserved for them.",
    "Euroasia Aquatic provides complete GEM registration support, from seller onboarding to product cataloguing and bid participation guidance.",
  ],
  image: "/images/services/gem.png",
  included: [
    "Seller registration on GeM",
    "Profile verification support",
    "Product/service cataloguing",
    "Brand approval assistance",
    "OEM panel registration",
    "Bid participation training",
    "Invoice and payment guidance",
    "Rating improvement tips",
    "Annual compliance support",
  ],
  process: [
    {
      title: "Registration",
      description: "Complete seller registration with GST and PAN",
    },
    {
      title: "Verification",
      description: "Document verification and profile activation",
    },
    {
      title: "Cataloguing",
      description: "List your products/services on GeM",
    },
    {
      title: "Start Selling",
      description: "Participate in bids and direct purchases",
    },
  ],
  faqs: [
    {
      question: "What documents are required for GEM registration?",
      answer: "PAN card, GST registration, bank account details, business address proof, and Udyam/MSME certificate (for MSME benefits). For products, you need quality certifications if applicable.",
    },
    {
      question: "Is GEM registration free?",
      answer: "Yes, GEM registration is completely free. There are no charges for seller registration, product listing, or bid participation on the portal.",
    },
    {
      question: "What are the benefits for MSMEs on GeM?",
      answer: "MSMEs get 25% procurement reservation, exemption from EMD and PBG up to certain limits, price preference of up to 15%, and exclusive categories reserved only for MSMEs.",
    },
    {
      question: "How long does GEM registration take?",
      answer: "Basic registration takes 1-2 days. Complete profile with product cataloguing and brand approval may take 1-2 weeks depending on document verification.",
    },
    ...seoFaqs("gem-registration"),
  ],
  relatedServices: [
    {
      title: "MSME Registration",
      description: "Get MSME benefits on GeM",
      href: "/services/msme-registration",
    },
    {
      title: "Tender Assistance",
      description: "Win more government tenders",
      href: "/services/tender-assistance",
    },
    {
      title: "ZED Certification",
      description: "Quality certification for better bids",
      href: "/services/zed-certification",
    },
  ],
};

export default function GEMRegistrationPage() {
  return <ServicePageTemplate service={serviceData} />;
}
