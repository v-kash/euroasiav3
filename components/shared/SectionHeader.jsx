"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeader({
  tag,
  title,
  description,
  centered = true,
  light = false,
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}
      variants={shouldReduceMotion ? {} : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {tag && (
        <motion.span
          variants={shouldReduceMotion ? {} : itemVariants}
          className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4"
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        variants={shouldReduceMotion ? {} : itemVariants}
        className={`text-3xl md:text-h2 font-bold leading-tight ${
          light ? "text-white" : "text-primary-navy"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={shouldReduceMotion ? {} : itemVariants}
          className={`mt-4 text-body ${
            light ? "text-silver-grey" : "text-text-muted"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
