"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-hero-gradient overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 hero-texture" />

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-32 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[calc(100svh-12rem)]">
          {/* Left Content - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* Label Pill */}
            <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
              PAN-INDIA MSME CONSULTING
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-h1 font-black text-white leading-tight mb-4 sm:mb-6">
              Unlock Government Grants
              <br />
              <span className="text-accent">for Your Business</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-xl">
              Expert consulting & processing for PMEGP, MUDRA, Startup India,
              ZED & 80-IAC benefits. We help you access
              <span className="text-accent font-semibold">
                {" "}
                ₹10 Lakh – ₹1 Crore
              </span>{" "}
              in government schemes.
            </p>

            {/* Trust Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs sm:text-sm">
                ✓ 100% Secure
              </span>
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs sm:text-sm">
                ⚡ Fast Approvals
              </span>
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs sm:text-sm">
                📈 Growth Focused
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/schemes"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Explore Grants
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
              <Link
                href="/check-eligibility"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 text-sm sm:text-base"
              >
                Check Eligibility
              </Link>
            </div>

            {/* Bottom Stats Line */}
            <p className="text-white/60 text-xs sm:text-sm">
              <span className="text-white font-semibold">₹100 Cr+</span> Funded
              · <span className="text-white font-semibold">500+</span>{" "}
              Businesses · <span className="text-white font-semibold">99%</span>{" "}
              Success
            </p>
          </motion.div>

          {/* Right Content - Floating Dashboard UI Card - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-deep-navy rounded-2xl shadow-dashboard p-6 dashboard-float">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm font-medium">
                    Schemes We Process
                  </span>
                  <span className="flex items-center text-xs text-success-green">
                    <span className="w-2 h-2 bg-success-green rounded-full mr-1 live-pulse"></span>
                    LIVE
                  </span>
                </div>

                {/* Big Amount */}
                <div className="text-3xl font-bold text-white mb-6">
                  ₹10L – ₹1Cr
                </div>

                {/* Mini Bar Chart */}
                <div className="flex items-end space-x-2 h-20 mb-6">
                  <div className="flex-1 bg-accent rounded-t h-16"></div>
                  <div className="flex-1 bg-primary-navy rounded-t h-12 border border-white/20"></div>
                  <div className="flex-1 bg-accent/70 rounded-t h-20"></div>
                  <div className="flex-1 bg-primary-navy rounded-t h-10 border border-white/20"></div>
                  <div className="flex-1 bg-accent/50 rounded-t h-14"></div>
                </div>

                {/* Stat Chips Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-accent text-xs font-semibold">PMEGP</p>
                    <p className="text-white font-bold">₹25L avg</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-accent text-xs font-semibold">MUDRA</p>
                    <p className="text-white font-bold">₹10L avg</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-accent text-xs font-semibold">80-IAC</p>
                    <p className="text-white font-bold">100% tax</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-accent text-xs font-semibold">ZED</p>
                    <p className="text-white font-bold">₹5L subsidy</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/70">Success Rate</span>
                    <span className="text-success-green font-semibold">
                      99%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-success-green rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
