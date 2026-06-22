"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Government Grants & Subsidies",
    category: "Funding",
    href: "/services/government-grants",
    badge: "Up to ₹1 Crore",
    successRate: 98,
    price: "₹2,999",
    timeline: "2–3 Months",
    description:
      "Access PMEGP, state subsidies and central government grants for your business.",
    bullets: [
      "PMEGP Scheme Support",
      "CGTMSE Guarantee",
      "State Subsidies",
      "Eligibility Assessment",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "MSME Registration & Udyam",
    category: "Registration",
    href: "/services/msme-registration",
    badge: "Same Day",
    successRate: 100,
    price: "₹999",
    timeline: "48 Hours",
    description:
      "Get your Udyam registration and MSME certificate with priority processing.",
    bullets: [
      "Udyam Registration",
      "MSME Certificate",
      "Priority Sector Benefits",
      "Instant Processing",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Business Funding Solutions",
    category: "Funding",
    href: "/services/business-funding",
    badge: "₹10L – ₹50L",
    successRate: 95,
    price: "₹1,999",
    timeline: "7–15 Days",
    description:
      "Working capital loans, equipment financing and MUDRA loans for MSMEs.",
    bullets: [
      "Working Capital Loans",
      "Equipment Financing",
      "MUDRA Loans",
      "Quick Disbursement",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Startup India & DPIIT Registration",
    category: "Registration",
    href: "/services/startup-india",
    badge: "Tax Free 3 Yrs",
    successRate: 99,
    price: "₹2,499",
    timeline: "7–10 Days",
    description:
      "DPIIT recognition with 80-IAC tax exemption and angel tax relief benefits.",
    bullets: [
      "DPIIT Recognition",
      "80-IAC Tax Exemption",
      "Angel Tax Relief",
      "Startup Certificate",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "GST & Tax Compliance",
    category: "Compliance",
    href: "/services/gst-compliance",
    badge: "From ₹999/mo",
    successRate: 100,
    price: "₹999/mo",
    timeline: "Ongoing",
    description: "Complete GST registration, filing and tax planning services.",
    bullets: [
      "GST Registration",
      "Monthly/Quarterly Filing",
      "Tax Planning",
      "Compliance Audit",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Tender & Government Liaison",
    category: "Growth",
    href: "/services/tender-assistance",
    badge: "Win Tenders",
    successRate: 92,
    price: "₹3,999",
    timeline: "Project-Based",
    description:
      "End-to-end tender support from search to bid submission and coordination.",
    bullets: [
      "Tender Search",
      "Bid Preparation",
      "Documentation",
      "Department Coordination",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: 7,
    title: "ZED Certification",
    category: "Registration",
    href: "/services/zed-certification",
    badge: "₹5L Subsidy",
    successRate: 96,
    price: "₹4,999",
    timeline: "30–45 Days",
    description:
      "Zero Defect Zero Effect certification for quality and export readiness.",
    bullets: [
      "Zero Defect Zero Effect",
      "Quality Certification",
      "Export Readiness",
      "Govt Incentives",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Import Export Code (IEC)",
    category: "Growth",
    href: "/services/iec-registration",
    badge: "Go Global",
    successRate: 100,
    price: "₹1,499",
    timeline: "5–7 Days",
    description:
      "IEC registration for import/export with DGFT support and customs guidance.",
    bullets: [
      "IEC Registration",
      "Export Benefits",
      "DGFT Support",
      "Customs Guidance",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Digital Marketing & Web",
    category: "Digital",
    href: "/services/digital-marketing",
    badge: "3x ROI Avg",
    successRate: 95,
    price: "₹9,999/mo",
    timeline: "Ongoing",
    description:
      "Complete digital presence with SEO, PPC, social media and lead generation.",
    bullets: [
      "SEO & PPC",
      "Website Development",
      "Social Media",
      "Lead Generation",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const tabs = [
  "All",
  "Registration",
  "Funding",
  "Compliance",
  "Growth",
  "Digital",
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredServices =
    activeTab === "All"
      ? services
      : services.filter((service) => service.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-label uppercase text-accent-text tracking-widest">
            OUR EXPERT SERVICES
          </span>
          <h2 className="text-3xl md:text-h2 font-bold text-primary-navy mt-3 mb-4">
            Complete Solutions for Your Business Growth
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto mb-6">
            From registration to funding, compliance to expansion — end-to-end
            consulting.
          </p>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-navy">
            <span className="flex items-center">
              <FiCheck className="w-4 h-4 text-success-green mr-1" />
              500+ Clients Served
            </span>
            <span className="flex items-center">
              <FiCheck className="w-4 h-4 text-success-green mr-1" />
              48-Hour Processing
            </span>
            <span className="flex items-center">
              <FiCheck className="w-4 h-4 text-success-green mr-1" />
              99% Success Rate
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === tab
                  ? "bg-primary-navy text-white"
                  : "bg-light-bg text-text-dark hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Top Row: Icon + Success Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary-navy">{service.icon}</div>
                  <span className="inline-flex items-center px-2 py-1 bg-success-green/10 text-success-green text-xs font-semibold rounded">
                    ✓ {service.successRate}%
                  </span>
                </div>

                {/* Funding Badge */}
                <div className="text-accent-text font-bold text-xl mb-2">
                  {service.badge}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-primary-navy mb-2 group-hover:text-accent-text transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Bullet List */}
                <ul className="space-y-2 mb-5">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-text-dark"
                    >
                      <FiCheck className="w-4 h-4 text-accent-text mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Pricing Row */}
                <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-100">
                  <span className="text-primary-navy font-bold">
                    {service.price}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-primary-navy text-xs font-medium rounded-full">
                    {service.timeline}
                  </span>
                </div>

                {/* Button Row */}
                <div className="flex gap-3">
                  <Link
                    href={service.href}
                    className="flex-1 text-center py-2.5 border border-primary-navy text-primary-navy font-medium rounded-lg hover:bg-primary-navy hover:text-white transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors text-sm"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors"
          >
            View All Services
            <FiArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
