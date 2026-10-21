"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function ServiceCard({ service, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={shouldReduceMotion ? noMotion : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link
        href={service.href}
        className="group block bg-white rounded-xl p-6 border border-border-color shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-l-4 hover:border-l-accent"
      >
        <div className="w-14 h-14 rounded-lg bg-light-bg flex items-center justify-center text-primary-navy group-hover:bg-primary-navy group-hover:text-white transition-colors mb-5">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-navy mb-3 group-hover:text-accent-text transition-colors">
          {service.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <span className="inline-flex items-center text-primary-navy font-medium text-sm group-hover:text-accent-text transition-colors">
          Learn More
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
        </span>
      </Link>
    </motion.div>
  );
}
