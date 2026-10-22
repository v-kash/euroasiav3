"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "15-minute call to understand your needs and goals",
    timeline: "15–30 mins",
  },
  {
    number: "02",
    title: "Eligibility Check",
    description: "We assess which schemes and services suit your business",
    timeline: "Same Day",
  },
  {
    number: "03",
    title: "Documentation",
    description: "We prepare, verify and submit all required paperwork",
    timeline: "2–3 Days",
  },
  {
    number: "04",
    title: "Approval & Disbursement",
    description: "Track status in real-time until funds/certificate arrive",
    timeline: "Varies",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8"
        >
          <div className="max-w-2xl">
            <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
              HOW IT WORKS
            </span>
            <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mt-3">
              Get Started in 4 Simple Steps
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-md">
            Our streamlined process ensures quick turnaround and hassle-free
            experience
          </p>
        </motion.div>

        {/* Steps */}
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col"
            >
              {/* Step Number + Timeline */}
              <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-primary-navy">
                <span className="font-display font-extrabold text-accent-text text-4xl leading-none tracking-[-0.04em]">
                  {step.number}
                </span>
                <span className="px-3 py-1 bg-light-bg border border-[#D5DDE9] text-primary-navy font-ledger text-xs font-semibold rounded-full">
                  {step.timeline}
                </span>
              </div>

              <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-1.5">
                {step.title}
              </h3>
              <p className="text-text-muted">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
