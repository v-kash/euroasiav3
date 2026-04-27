"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const schemes = [
  {
    name: "PMEGP",
    amount: "Up to ₹25 Lakhs",
    description: "Prime Minister's Employment Generation Programme",
    icon: "💰",
    href: "/schemes/pmegp",
  },
  {
    name: "MUDRA Loan",
    amount: "Up to ₹10 Lakhs",
    description: "Micro Units Development & Refinance Agency",
    icon: "🏦",
    href: "/schemes/mudra",
  },
  {
    name: "CGTMSE",
    amount: "Up to ₹2 Crore",
    description: "Credit Guarantee Fund Trust for Micro & Small",
    icon: "🛡️",
    href: "/schemes/cgtmse",
  },
  {
    name: "80-IAC",
    amount: "100% Tax Free",
    description: "Income Tax Exemption for Startups (3 years)",
    icon: "📋",
    href: "/schemes/80-iac",
  },
  {
    name: "ZED Certification",
    amount: "₹5L Subsidy",
    description: "Zero Defect Zero Effect Quality Scheme",
    icon: "✅",
    href: "/schemes/zed",
  },
  {
    name: "Stand-Up India",
    amount: "₹10L – ₹1Cr",
    description: "SC/ST & Women Entrepreneur Loans",
    icon: "🚀",
    href: "/schemes/stand-up-india",
  },
  {
    name: "GEM Registration",
    amount: "Free + Revenue",
    description: "Government e-Marketplace Vendor Access",
    icon: "🛒",
    href: "/schemes/gem",
  },
  {
    name: "Startup India",
    amount: "₹20L Patent Support",
    description: "DPIIT Recognition + Tax & IPR Benefits",
    icon: "⭐",
    href: "/schemes/startup-india",
  },
];

export default function SchemeSpotlight() {
  return (
    <section className="py-20 bg-primary-navy relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 hero-texture" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-label uppercase text-accent tracking-widest">
            GOVERNMENT SCHEMES
          </span>
          <h2 className="text-3xl md:text-h2 font-bold text-white mt-3 mb-4">
            Popular Government Schemes We Help You Access
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We have helped 500+ businesses unlock crores in government funding
          </p>
        </motion.div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schemes.map((scheme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <span className="text-3xl mb-4 block">{scheme.icon}</span>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {scheme.name}
              </h3>

              {/* Amount */}
              <p className="text-accent font-bold text-xl mb-2 group-hover:scale-105 transition-transform">
                {scheme.amount}
              </p>

              {/* Description */}
              <p className="text-white/60 text-sm mb-4">{scheme.description}</p>

              {/* Link */}
              <Link
                href={scheme.href}
                className="text-accent font-medium text-sm hover:underline inline-flex items-center"
              >
                Check Eligibility
                <svg
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/schemes"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            View All 50+ Schemes
            <svg
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
        </motion.div>
      </div>
    </section>
  );
}
