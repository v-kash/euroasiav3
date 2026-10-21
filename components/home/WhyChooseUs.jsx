"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX, FiZap, FiLock, FiUsers } from "react-icons/fi";

const featureCards = [
  {
    icon: FiZap,
    title: "Speed & Efficiency",
    points: [
      "48-hour registration",
      "Same-day document verification",
      "Quick funding disbursement",
    ],
  },
  {
    icon: FiLock,
    title: "100% Transparent",
    points: [
      "Clear pricing",
      "Real-time tracking",
      "No hidden fees",
      "Detailed documentation",
    ],
  },
  {
    icon: FiUsers,
    title: "Expert Team",
    points: [
      "CA & CS certified",
      "Industry-specific advisors",
      "10+ years experience",
      "1-on-1 consultation",
    ],
  },
];

const comparisonData = [
  { feature: "Processing Time", euroasia: "48–72 Hours", others: "7–15 Days" },
  { feature: "Success Rate", euroasia: "99%", others: "70–80%" },
  { feature: "Hidden Charges", euroasia: "Zero", others: "Multiple" },
  {
    feature: "Expert Support",
    euroasia: "24/7 Dedicated",
    others: "Limited Hours",
  },
  { feature: "Document Assistance", euroasia: "Full Support", others: "Basic" },
  {
    feature: "Post-Service Support",
    euroasia: "Lifetime",
    others: "Limited Period",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
              WHY CHOOSE US
            </span>
            <h2 className="font-display font-extrabold text-primary-navy text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em] mt-4">
              Euroasia vs Others
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-md">
            See why 500+ MSMEs trust us over other consulting firms
          </p>
        </motion.div>

        {/* Feature Cards Row */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mb-16">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-t-2 border-primary-navy pt-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl border-2 border-primary-navy flex items-center justify-center text-accent-text flex-shrink-0">
                  <card.icon aria-hidden="true" className="w-5 h-5" />
                </span>
                <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em]">
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {card.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-[15px] text-text-dark"
                  >
                    <FiCheck aria-hidden="true" className="w-4 h-4 text-success-green mr-2.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-primary-navy rounded-2xl shadow-hard overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-primary-navy text-white">
                  <th className="px-6 py-4 text-left font-ledger text-xs font-semibold uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-ledger text-xs font-semibold uppercase tracking-[0.12em] bg-accent text-primary-navy">
                    <span className="flex items-center justify-center">
                      Euroasia
                      <FiCheck aria-hidden="true" className="w-4 h-4 ml-2" />
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                    <span className="flex items-center justify-center">
                      Others
                      <FiX aria-hidden="true" className="w-4 h-4 ml-2" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-[#E6ECF4]">
                    <td className="px-6 py-4 font-semibold text-primary-navy">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-accent/10">
                      <span className="inline-flex items-center font-ledger font-semibold text-primary-navy">
                        <FiCheck aria-hidden="true" className="w-4 h-4 text-success-green mr-2" />
                        {row.euroasia}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-text-muted">
                      <span className="inline-flex items-center">
                        <FiX aria-hidden="true" className="w-4 h-4 text-red-500 mr-2" />
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t-2 border-primary-navy bg-light-bg px-6 py-4 text-center">
            <p className="text-primary-navy font-semibold">
              Join 500+ MSMEs who chose Euroasia for their growth journey
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
