"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const schemes = [
  {
    name: "PMEGP",
    amount: "Up to ₹25 Lakhs",
    description: "Prime Minister's Employment Generation Programme",
    icon: "💰",
    href: "/services/pmegp",
  },
  {
    name: "MUDRA Loan",
    amount: "Up to ₹10 Lakhs",
    description: "Micro Units Development & Refinance Agency",
    icon: "🏦",
    href: "/services/mudra",
  },
  {
    name: "CGTMSE",
    amount: "Up to ₹2 Crore",
    description: "Credit Guarantee Fund Trust for Micro & Small",
    icon: "🛡️",
    href: "/services/cgtmse",
  },
  {
    name: "80-IAC",
    amount: "100% Tax Free",
    description: "Income Tax Exemption for Startups (3 years)",
    icon: "📋",
    href: "/services/80-iac",
  },
  {
    name: "ZED Certification",
    amount: "₹5L Subsidy",
    description: "Zero Defect Zero Effect Quality Scheme",
    icon: "✅",
    href: "/services/zed-certification",
  },
  {
    name: "Stand-Up India",
    amount: "₹10L – ₹1Cr",
    description: "SC/ST & Women Entrepreneur Loans",
    icon: "🚀",
    href: "/services/government-grants",
  },
  {
    name: "GEM Registration",
    amount: "Free + Revenue",
    description: "Government e-Marketplace Vendor Access",
    icon: "🛒",
    href: "/services/gem-registration",
  },
  {
    name: "Startup India",
    amount: "₹20L Patent Support",
    description: "DPIIT Recognition + Tax & IPR Benefits",
    icon: "⭐",
    href: "/services/startup-india",
  },
];

export default function SchemeSpotlight() {
  return (
    <section className="py-12 lg:py-16 bg-primary-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8"
        >
          <div className="max-w-2xl">
            <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              GOVERNMENT SCHEMES
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mt-3">
              Popular Government Schemes We Help You Access
            </h2>
          </div>
          <p className="text-white/70 text-lg max-w-md">
            We have helped 500+ businesses unlock crores in government funding
          </p>
        </motion.div>

        {/* Schemes Grid — ruled ledger cells. Mobile shows the first 4, all 8 from sm up */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden">
          {schemes.map((scheme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className={`${index >= 4 ? "hidden sm:flex" : "flex"} flex-col bg-primary-navy p-5 lg:p-6`}
            >
              {/* Name */}
              <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em] mb-1">
                {scheme.name}
              </h3>

              {/* Amount */}
              <p className="font-display font-extrabold text-accent text-xl lg:text-2xl leading-tight tracking-[-0.02em] mb-2">
                {scheme.amount}
              </p>

              {/* Description */}
              <p className="text-white/65 text-sm mb-4">{scheme.description}</p>

              {/* Link */}
              <Link
                href={scheme.href}
                className="mt-auto self-start inline-flex items-center text-white font-semibold text-sm underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent transition-colors"
              >
                Check Eligibility
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8">
          <Link
            href="/schemes"
            className="inline-flex items-center px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl hover:bg-accent-dark transition-colors"
          >
            View All 50+ Schemes
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
