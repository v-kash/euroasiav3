"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoFaqs } from "@/lib/seo/services";

const serviceData = {
  title: "Government Grants Assistance",
  shortTitle: "Government Grants",
  subtitle: "Access ₹10 Lakhs to ₹2 Crore in Government Subsidies & Grants",
  tag: "FUNDING ASSISTANCE",
  overviewTitle: "Unlock Government Funding",
  overviewContent: [
    "The Indian government offers numerous grant and subsidy schemes for MSMEs, startups, and entrepreneurs. From PMEGP to State-specific schemes, there's significant funding available for eligible businesses.",
    "Our expert team identifies the best schemes for your business, prepares winning applications, and liaises with authorities to maximize your chances of securing government grants.",
    "We identify suitable schemes such as PMEGP, MUDRA, state subsidies and sector-specific grants, and prepare complete, accurate applications.",
  ],
  image: "/images/services/grants.png",
  included: [
    "Scheme identification",
    "Eligibility assessment",
    "Business plan preparation",
    "DPR creation",
    "Application filing",
    "Bank liaison",
    "Subsidy claim processing",
    "State scheme guidance",
    "Multiple scheme optimization",
  ],
  process: [
    {
      title: "Analysis",
      description: "Analyze your business for eligible schemes",
    },
    {
      title: "Selection",
      description: "Select best schemes for maximum benefit",
    },
    {
      title: "Application",
      description: "Prepare and file comprehensive applications",
    },
    {
      title: "Follow-up",
      description: "Track and secure grant disbursement",
    },
  ],
  faqs: [
    {
      question: "What types of government grants are available?",
      answer: "Central schemes (PMEGP, MUDRA, CGTMSE), State schemes (varies by state), Sector-specific (technology, manufacturing, exports), and Special category schemes (women, SC/ST, rural).",
    },
    {
      question: "How much funding can I get?",
      answer: "Depending on your business type and category, you can access ₹50,000 to ₹2 Crore or more. Multiple schemes can be combined for maximum benefit.",
    },
    {
      question: "Do I need to repay government grants?",
      answer: "Subsidies are non-repayable. However, most schemes are credit-linked, meaning you get a loan from bank and subsidy portion is adjusted. Only the non-subsidy portion needs repayment.",
    },
    {
      question: "How long does the grant process take?",
      answer: "Timeline varies by scheme - typically 2-6 months from application to disbursement. Our expertise helps expedite the process significantly.",
    },
    ...seoFaqs("government-grants"),
  ],
  relatedServices: [
    {
      title: "PMEGP Scheme",
      description: "Up to 35% subsidy for new units",
      href: "/services/pmegp",
    },
    {
      title: "MUDRA Loan",
      description: "Collateral-free loans up to ₹20L",
      href: "/services/mudra",
    },
    {
      title: "CGTMSE",
      description: "Credit guarantee up to ₹10 Cr",
      href: "/services/cgtmse",
    },
  ],
};

export default function GovernmentGrantsPage() {
  return <ServicePageTemplate service={serviceData} />;
}
