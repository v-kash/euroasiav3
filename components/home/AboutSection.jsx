"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const leftVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    },
  };

  const stats = [
    { value: "3+", label: "Years" },
    { value: "150+", label: "Products" },
    { value: "55+", label: "Team Members" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            variants={shouldReduceMotion ? noMotion : leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="rounded-2xl overflow-hidden border-2 border-primary-navy shadow-hard">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Euroasia team in office"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            variants={shouldReduceMotion ? noMotion : rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
              ABOUT EUROASIA
            </span>
            <h2 className="font-display font-extrabold text-primary-navy text-4xl md:text-5xl leading-[1.02] tracking-[-0.035em]">
              Your Gateway to Business Certifications
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Euroasia Aquatic Pvt Ltd helps entrepreneurs, MSMEs, and
              established companies navigate the complex landscape of business
              certifications, regulatory compliance, and government schemes.
              With our expert team and streamlined processes, we make compliance
              effortless so you can focus on growing your business.
            </p>
            <p className="text-text-muted leading-relaxed">
              From Startup India registration to GEM portal setup, ZED
              certification to tax exemption services — we provide end-to-end
              support tailored to your business needs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 border-y border-[#D5DDE9] py-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={index > 0 ? "border-l border-[#D5DDE9] pl-5" : "pr-5"}
                >
                  <span className="block font-display text-4xl font-extrabold text-primary-navy tracking-[-0.03em] leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="text-text-muted text-sm font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-primary-navy font-bold underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent-text transition-colors group"
            >
              Learn More About Us
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
      </div>
    </section>
  );
}
