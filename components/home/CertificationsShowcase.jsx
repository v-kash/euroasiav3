"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "@/components/shared/SectionHeader";

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

// `image` is kept in the data so photos can be brought back later;
// the redesign shows these as typographic cards (no background images).
const certifications = [
  {
    title: "Startup India Registration",
    category: "Certification",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    href: "/services/business-certifications",
  },
  {
    title: "Tax Exemption Certificate",
    category: "Tax Services",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    href: "/services/tax-exemption",
  },
  {
    title: "ZED Certification",
    category: "Quality",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80",
    href: "/services/business-certifications",
  },
  {
    title: "GEM Registration",
    category: "Government",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    href: "/services/tender-assistance",
  },
  {
    title: "MSME Udyam Certificate",
    category: "Certification",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    href: "/services/business-certifications",
  },
  {
    title: "Digital Transformation",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    href: "/services/digital-marketing",
  },
];

export default function CertificationsShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.06,
      },
    }),
  };

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="CERTIFICATIONS"
          title="Trusted Certification Support for MSMEs"
          description="We help businesses obtain essential certifications and registrations to unlock growth opportunities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={shouldReduceMotion ? noMotion : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
            >
              <Link
                href={cert.href}
                className="group flex h-full min-h-[200px] flex-col justify-between gap-10 bg-light-bg border border-[#D5DDE9] rounded-2xl p-6 hover:border-primary-navy hover:bg-white transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-accent-text">
                    {cert.category}
                  </span>
                  <span aria-hidden="true" className="font-ledger text-xs text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display font-bold text-primary-navy text-2xl leading-tight tracking-[-0.02em]">
                    {cert.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="w-11 h-11 flex-shrink-0 rounded-full border-2 border-primary-navy flex items-center justify-center text-primary-navy group-hover:bg-primary-navy group-hover:text-white transition-colors"
                  >
                    <FiArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
