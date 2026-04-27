"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { value: "3+", label: "Years" },
    { value: "150+", label: "Products" },
    { value: "55+", label: "Team Members" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            variants={shouldReduceMotion ? {} : leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Euroasia team in office"
              width={600}
              height={450}
              className="rounded-2xl object-cover shadow-xl"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            variants={shouldReduceMotion ? {} : rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold">
              ABOUT EUROASIA
            </span>
            <h2 className="text-3xl md:text-h2 font-bold text-primary-navy">
              Your Gateway to Business Certifications
            </h2>
            <p className="text-text-muted leading-relaxed">
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
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-navy">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-text-muted font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-primary-navy font-semibold hover:text-accent-text transition-colors group"
            >
              Learn More About Us
              <svg
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
