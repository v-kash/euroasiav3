'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const stats = [
  { value: 3, suffix: '+', label: 'Years in Business' },
  { value: 150, suffix: '+', label: 'Products' },
  { value: 55, suffix: '+', label: 'Team Members' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

export default function StatsSection() {
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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-primary-navy"
          variants={shouldReduceMotion ? noMotion : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`pt-8 pb-6 px-4 md:px-8 border-[#D5DDE9] ${
                index % 2 === 1 ? 'border-l' : ''
              } ${index > 0 ? 'md:border-l' : ''} ${
                index > 1 ? 'border-t md:border-t-0' : ''
              }`}
              variants={shouldReduceMotion ? noMotion : itemVariants}
            >
              <div className="font-display text-5xl md:text-6xl font-extrabold text-primary-navy tracking-[-0.04em] leading-none mb-3">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
