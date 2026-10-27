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
    price: "₹2,999",
    timeline: "2–3 Months",
    description:
      "Access PMEGP, state subsidies and central government grants for your business.",
    icon: (
      <svg
        className="w-6 h-6"
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
    price: "₹999",
    timeline: "48 Hours",
    description:
      "Get your Udyam registration and MSME certificate with priority processing.",
    icon: (
      <svg
        className="w-6 h-6"
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
    price: "₹1,999",
    timeline: "7–15 Days",
    description:
      "Working capital loans, equipment financing and MUDRA loans for MSMEs.",
    icon: (
      <svg
        className="w-6 h-6"
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
    price: "₹2,499",
    timeline: "7–10 Days",
    description:
      "DPIIT recognition with 80-IAC tax exemption support and Startup India benefits.",
    icon: (
      <svg
        className="w-6 h-6"
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
    badge: "Same Day",
    price: "₹999/mo",
    timeline: "Ongoing",
    description: "Complete GST registration, filing and tax planning services.",
    icon: (
      <svg
        className="w-6 h-6"
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
    price: "₹3,999",
    timeline: "Project-Based",
    description:
      "End-to-end tender support from search to bid submission and coordination.",
    icon: (
      <svg
        className="w-6 h-6"
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
    price: "₹4,999",
    timeline: "30–45 Days",
    description:
      "Zero Defect Zero Effect certification for quality and export readiness.",
    icon: (
      <svg
        className="w-6 h-6"
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
    price: "₹1,499",
    timeline: "5–7 Days",
    description:
      "IEC registration for import/export with DGFT support and customs guidance.",
    icon: (
      <svg
        className="w-6 h-6"
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
    price: "₹9,999/mo",
    timeline: "Ongoing",
    description:
      "Complete digital presence with SEO, PPC, social media and lead generation.",
    icon: (
      <svg
        className="w-6 h-6"
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

  // "All" shows the top 6; the rest are reachable via tabs or "View All Services"
  const filteredServices =
    activeTab === "All"
      ? services.slice(0, 6)
      : services.filter((service) => service.category === activeTab);

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
          <div className="max-w-2xl">
            <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
              OUR EXPERT SERVICES
            </span>
            <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mt-3">
              Complete Solutions for Your Business Growth
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-md">
            From registration to funding, compliance to expansion — end-to-end
            consulting.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex sm:flex-wrap gap-2 mb-8 pb-5 border-b border-[#D5DDE9] overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`shrink-0 whitespace-nowrap min-h-[44px] px-5 rounded-full border-2 font-semibold text-sm transition-colors duration-150 ${
                activeTab === tab
                  ? "bg-primary-navy border-primary-navy text-white"
                  : "border-[#D5DDE9] text-primary-navy hover:border-primary-navy"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service Cards — one swipeable row on mobile, grid from md up */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group snap-start shrink-0 w-[82%] sm:w-[55%] md:w-auto flex flex-col bg-white border border-[#D5DDE9] rounded-2xl p-5 hover:border-primary-navy transition-colors duration-200"
              >
                {/* Top Row: Icon + Success Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-light-bg flex items-center justify-center text-primary-navy">
                    {service.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-success-green/10 text-success-green font-ledger text-xs font-semibold rounded">
                    <FiCheck aria-hidden="true" className="w-3.5 h-3.5" />
                    Online
                  </span>
                </div>

                {/* Funding Badge */}
                <div className="font-display font-extrabold text-accent-text text-xl tracking-[-0.02em] mb-1">
                  {service.badge}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-primary-navy text-lg tracking-[-0.02em] leading-snug mb-1.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Footer: Timeline + Learn More */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed border-[#D5DDE9]">
                  <span className="font-ledger text-xs font-semibold text-text-muted">
                    {service.timeline}
                  </span>
                  <span className="inline-flex items-center text-sm font-semibold text-primary-navy group-hover:text-accent-text transition-colors">
                    Learn more
                    <FiArrowRight aria-hidden="true" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-bold rounded-xl hover:bg-primary-navy hover:text-white transition-colors"
          >
            View All Services
            <FiArrowRight aria-hidden="true" className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
