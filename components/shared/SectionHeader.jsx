"use client";

import { motion, useReducedMotion } from "framer-motion";

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

/*
  Section heading in the home page style: small mono label, big display
  title, and the description to the right on large screens.
  Pass `centered` for a stacked, centred header instead.
*/
export default function SectionHeader({
  tag,
  title,
  description,
  centered = false,
  light = false,
}) {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={
        centered
          ? "max-w-3xl mx-auto text-center mb-10"
          : "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
      }
      variants={shouldReduceMotion ? noMotion : fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {tag && (
          <span
            className={`font-ledger text-xs font-semibold uppercase tracking-[0.14em] ${
              light ? "text-accent" : "text-accent-text"
            }`}
          >
            {tag}
          </span>
        )}
        <h2
          className={`font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em] ${
            tag ? "mt-4" : ""
          } ${light ? "text-white" : "text-primary-navy"}`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`text-lg ${centered ? "mt-5" : "max-w-md"} ${
            light ? "text-white/75" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
