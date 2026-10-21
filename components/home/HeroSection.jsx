"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiShield, FiZap, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const ledgerRows = [
  { code: "PMEGP", value: "₹25L avg" },
  { code: "MUDRA", value: "₹10L avg" },
  { code: "80-IAC", value: "100% tax" },
  { code: "ZED", value: "₹5L subsidy" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-light-bg border-b border-[#D5DDE9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-8 pb-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 60%
              Rendered visible on first paint (no fade-in) so the H1 counts
              as the Largest Contentful Paint straight away. */}
          <div className="lg:col-span-3">
            {/* Label Pill */}
            <span className="inline-flex items-center gap-2.5 px-3.5 py-2 mb-7 border-[1.5px] border-primary-navy rounded-full text-primary-navy font-ledger text-xs font-semibold tracking-[0.12em]">
              <span aria-hidden="true" className="w-2 h-2 rounded-[2px] bg-accent" />
              PAN-INDIA MSME CONSULTING
            </span>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-primary-navy text-[3.25rem] sm:text-7xl xl:text-[5.5rem] leading-[0.92] tracking-[-0.045em] mb-6 sm:mb-8">
              Making
              <br />
              Compliance
              <br />
              <span className="text-accent-text">Effortless</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed mb-8 max-w-xl">
              Expert consulting & processing for PMEGP, MUDRA, Startup India,
              ZED & 80-IAC benefits. We help you access{" "}
              <span className="font-bold text-primary-navy bg-accent/30 px-1.5 py-0.5 rounded">
                ₹10 Lakh – ₹1 Crore
              </span>{" "}
              in government schemes.
            </p>

            {/* Trust Pills */}
         

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <Link
                href="/schemes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl shadow-hard-sm hover:bg-accent-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              >
                Explore Grants
                <FiArrowRight aria-hidden="true" className="w-5 h-5" />
              </Link>
              <Link
                href="/check-eligibility"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-bold rounded-xl hover:bg-primary-navy hover:text-white transition-colors duration-150"
              >
                Check Eligibility
              </Link>
            </div>

   <div className="flex flex-wrap gap-2.5 mb-9">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#D5DDE9] rounded-full text-primary-navy text-sm font-medium">
                <FiShield aria-hidden="true" className="w-4 h-4 text-success-green" />
                100% Secure
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#D5DDE9] rounded-full text-primary-navy text-sm font-medium">
                <FiZap aria-hidden="true" className="w-4 h-4 text-accent-text" />
                Fast Approvals
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#D5DDE9] rounded-full text-primary-navy text-sm font-medium">
                <FiTrendingUp aria-hidden="true" className="w-4 h-4 text-primary-navy" />
                Growth Focused
              </span>
            </div>

            {/* Bottom Stats Line */}
            {/* <p className="grid grid-cols-3 max-w-lg border-t border-[#D5DDE9] pt-6">
              <span className="flex flex-col pr-4">
                <span className="font-display font-extrabold text-primary-navy text-3xl sm:text-4xl tracking-[-0.03em] leading-none">
                  ₹100 Cr+
                </span>
                <span className="mt-2 text-sm text-text-muted">Funded</span>
              </span>
              <span className="flex flex-col px-4 border-l border-[#D5DDE9]">
                <span className="font-display font-extrabold text-primary-navy text-3xl sm:text-4xl tracking-[-0.03em] leading-none">
                  500+
                </span>
                <span className="mt-2 text-sm text-text-muted">Businesses</span>
              </span>
              <span className="flex flex-col pl-4 border-l border-[#D5DDE9]">
                <span className="font-display font-extrabold text-primary-navy text-3xl sm:text-4xl tracking-[-0.03em] leading-none">
                  99%
                </span>
                <span className="mt-2 text-sm text-text-muted">Success</span>
              </span>
            </p> */}
          </div>

          {/* Right Content - Scheme Ledger Card - 40% */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 w-full max-w-md mx-auto lg:max-w-none lg:-mt-20"
          >
            <div className="bg-white border-2 border-primary-navy rounded-2xl shadow-hard overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between gap-3 bg-primary-navy px-6 py-3.5">
                <span className="font-ledger text-xs font-semibold tracking-[0.14em] uppercase text-white">
                  Schemes We Process
                </span>
                <span className="flex items-center gap-1.5 font-ledger text-xs font-semibold text-green-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full live-pulse" />
                  LIVE
                </span>
              </div>

              <div className="p-6 sm:p-7">
                {/* Big Amount */}
                <div className="font-display font-extrabold text-primary-navy text-4xl sm:text-5xl tracking-[-0.03em] leading-none mb-6">
                  ₹10L – ₹1Cr
                </div>

                {/* Ledger Rows */}
                <ul className="border-t border-[#E6ECF4]">
                  {ledgerRows.map((row, index) => (
                    <li
                      key={row.code}
                      className="flex items-baseline gap-3 py-3.5 border-b border-[#E6ECF4]"
                    >
                      <span
                        aria-hidden="true"
                        className="font-ledger text-xs font-semibold text-accent-text"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-primary-navy">{row.code}</span>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b-2 border-dotted border-[#B8C4D6] -translate-y-1"
                      />
                      <span className="font-ledger font-semibold text-primary-navy">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-muted font-medium">Success Rate</span>
                    <span className="text-success-green font-bold">99%</span>
                  </div>
                  <div className="h-2 bg-[#E6ECF4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-success-green rounded-full"
                      style={{ width: "99%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
