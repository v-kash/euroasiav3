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
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-label uppercase text-accent-text tracking-widest">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-h2 font-bold text-primary-navy mt-3 mb-4">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Our streamlined process ensures quick turnaround and hassle-free
            experience
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border-color"
            style={{ left: "12.5%", right: "12.5%" }}
          >
            <svg className="w-full h-1" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number Circle */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary-navy rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-light-bg relative z-10">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 rounded-full ring-2 ring-accent ring-offset-4 ring-offset-light-bg opacity-0 hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-semibold text-primary-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  {step.description}
                </p>
                <span className="inline-block px-3 py-1 bg-white text-primary-navy text-xs font-medium rounded-full">
                  {step.timeline}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
