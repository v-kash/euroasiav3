'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-16 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              variants={shouldReduceMotion ? {} : itemVariants}
            >
              {/* Top accent bar */}
              <div className="w-12 h-1 bg-primary-navy mx-auto mb-6" />
              
              <div className="text-4xl md:text-5xl font-extrabold text-primary-navy mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-text-muted font-medium">{stat.label}</p>
              
              {/* Divider (not on last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border-color" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
