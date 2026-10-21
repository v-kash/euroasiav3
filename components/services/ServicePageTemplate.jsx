"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiCheck, FiChevronDown, FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/home/CTABanner";

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const eyebrow =
  "font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text";
const sectionTitle =
  "font-display font-extrabold text-primary-navy text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em]";

export default function ServicePageTemplate({ service }) {
  const [openFaq, setOpenFaq] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const reveal = {
    variants: shouldReduceMotion ? noMotion : fadeInUp,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-50px" },
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
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...reveal}>
              <span className={eyebrow}>{service.tag}</span>
              <h2 className={`${sectionTitle} mt-4 mb-6`}>
                {service.overviewTitle}
              </h2>
              <div className="space-y-4 text-text-muted text-lg">
                {service.overviewContent.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div {...reveal} className="w-full max-w-xl mx-auto lg:max-w-none">
              {/* The patterned background shows if the photo is missing. */}
              <div
                className="relative aspect-[4/3] bg-light-bg border-2 border-primary-navy rounded-2xl shadow-hard overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,33,82,0.14) 1.5px, transparent 1.5px)",
                  backgroundSize: "22px 22px",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={450}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-2xl mb-10">
            <span className={eyebrow}>WHAT&apos;S INCLUDED</span>
            <h2 className={`${sectionTitle} mt-4`}>
              Our {service.shortTitle || service.title} Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.included.map((item, index) => (
              <motion.div
                key={index}
                {...reveal}
                className="flex items-start gap-4 bg-white border border-[#D5DDE9] rounded-2xl p-5 hover:border-primary-navy transition-colors duration-200"
              >
                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-lg border-2 border-primary-navy flex items-center justify-center text-success-green flex-shrink-0"
                >
                  <FiCheck className="w-4 h-4" />
                </span>
                <span className="flex-1 text-text-dark font-medium pt-1">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-2xl mb-10 lg:mb-12">
            <span className={eyebrow}>OUR PROCESS</span>
            <h2 className={`${sectionTitle} mt-4`}>How We Work</h2>
          </motion.div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {service.process.map((step, index) => (
              <motion.li key={index} {...reveal} className="flex flex-col">
                <span className="font-display font-extrabold text-accent-text text-7xl leading-none tracking-[-0.05em] mb-5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div aria-hidden="true" className="h-0.5 bg-primary-navy mb-5" />
                <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <motion.div {...reveal} className="lg:col-span-1">
              <div className="lg:sticky lg:top-40">
                <span className={eyebrow}>FAQs</span>
                <h2 className={`${sectionTitle} mt-4`}>
                  Frequently Asked Questions
                </h2>
              </div>
            </motion.div>

            <div className="lg:col-span-2 space-y-3">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={index}
                    {...reveal}
                    className={`bg-white border rounded-2xl overflow-hidden transition-colors duration-200 ${
                      isOpen
                        ? "border-primary-navy"
                        : "border-[#D5DDE9] hover:border-primary-navy"
                    }`}
                  >
                    <button
                      type="button"
                      className="w-full min-h-[56px] px-6 py-4 text-left flex items-center justify-between gap-4"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="font-semibold text-primary-navy">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-primary-navy border-primary-navy text-white"
                            : "border-[#D5DDE9] text-primary-navy"
                        }`}
                      >
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      className={`accordion-content ${isOpen ? "open" : ""}`}
                      style={{ maxHeight: isOpen ? "500px" : "0" }}
                    >
                      <p className="px-6 pb-5 text-text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-2xl mb-10">
            <h2 className={sectionTitle}>Related Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.relatedServices.map((related, index) => (
              <Link
                key={index}
                href={related.href}
                className="group flex flex-col bg-white border border-[#D5DDE9] rounded-2xl p-6 hover:border-primary-navy transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] leading-snug">
                    {related.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="w-9 h-9 rounded-full border-2 border-primary-navy flex items-center justify-center text-primary-navy flex-shrink-0 group-hover:bg-primary-navy group-hover:text-white transition-colors"
                  >
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-text-muted text-sm">{related.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
