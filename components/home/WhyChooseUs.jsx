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
    <section className="py-20 bg-white">
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
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-h2 font-bold text-primary-navy mt-3 mb-4">
            Euroasia vs Others
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            See why 500+ MSMEs trust us over other consulting firms
          </p>
        </motion.div>

        {/* Feature Cards Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-bg rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-accent-text" />
              </div>
              <h3 className="text-lg font-semibold text-primary-navy mb-3">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-text-muted"
                  >
                    <FiCheck className="w-4 h-4 text-success-green mr-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-navy text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    <span className="flex items-center justify-center">
                      Euroasia
                      <FiCheck className="w-5 h-5 ml-2 text-success-green" />
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-white/70">
                    <span className="flex items-center justify-center">
                      Others
                      <FiX className="w-5 h-5 ml-2 text-red-400" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-light-bg"}
                  >
                    <td className="px-6 py-4 font-medium text-primary-navy">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center text-primary-navy font-semibold">
                        <FiCheck className="w-4 h-4 text-success-green mr-2" />
                        {row.euroasia}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-text-muted">
                      <span className="inline-flex items-center">
                        <FiX className="w-4 h-4 text-red-400 mr-2" />
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-light-bg px-6 py-4 text-center">
            <p className="text-primary-navy font-medium">
              Join 500+ MSMEs who chose Euroasia for their growth journey
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
