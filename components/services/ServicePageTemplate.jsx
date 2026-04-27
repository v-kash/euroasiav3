"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/home/CTABanner";

export default function ServicePageTemplate({ service }) {
  const [openFaq, setOpenFaq] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <PageHero
        title={service.title}
        description={service.subtitle}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle || service.title },
        ]}
      />

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={shouldReduceMotion ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4">
                {service.tag}
              </span>
              <h2 className="text-3xl md:text-h2 font-bold text-primary-navy mb-6">
                {service.overviewTitle}
              </h2>
              <div className="space-y-4 text-text-muted">
                {service.overviewContent.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              variants={shouldReduceMotion ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={450}
                className="rounded-2xl object-cover shadow-xl"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={shouldReduceMotion ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4">
              WHAT&apos;S INCLUDED
            </span>
            <h2 className="text-3xl md:text-h2 font-bold text-primary-navy">
              Our {service.shortTitle || service.title} Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.included.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4"
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-text-dark font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={shouldReduceMotion ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-h2 font-bold text-primary-navy">
              How We Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="w-16 h-16 mx-auto bg-primary-navy rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-primary-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={shouldReduceMotion ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-h2 font-bold text-primary-navy">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-primary-navy">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary-navy transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`accordion-content ${openFaq === index ? "open" : ""}`}
                  style={{ maxHeight: openFaq === index ? "500px" : "0" }}
                >
                  <p className="px-6 pb-4 text-text-muted">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={shouldReduceMotion ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-h2 font-bold text-primary-navy">
              Related Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.relatedServices.map((related, index) => (
              <Link
                key={index}
                href={related.href}
                className="group bg-light-bg rounded-xl p-6 hover:bg-primary-navy transition-colors"
              >
                <h3 className="font-semibold text-primary-navy group-hover:text-white mb-2">
                  {related.title}
                </h3>
                <p className="text-text-muted group-hover:text-silver-grey text-sm">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
