'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export default function PageHero({ title, breadcrumbs = [], description }) {
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="bg-gradient-to-br from-primary-navy to-secondary-navy pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              variants={shouldReduceMotion ? {} : itemVariants}
              className="flex items-center justify-center space-x-2 text-sm text-silver-grey mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center space-x-2">
                  <FiChevronRight className="w-4 h-4" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {/* Title */}
          <motion.h1
            variants={shouldReduceMotion ? {} : itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={shouldReduceMotion ? {} : itemVariants}
              className="mt-6 text-lg text-silver-grey max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
