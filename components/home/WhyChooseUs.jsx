"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";

const comparisonData = [
  {
    feature: "Choosing a Scheme",
    euroasia: "Checked for you",
    others: "Many portals",
  },
  {
    feature: "Documents / DPR",
    euroasia: "Prepared for you",
    others: "On your own",
  },
  {
    feature: "Bank / Portal Follow-up",
    euroasia: "Tracked to decision",
    others: "You chase it",
  },
  {
    feature: "Fees",
    euroasia: "Fixed, upfront",
    others: "Unclear costs",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      {/* Heading on the left, table on the right from lg up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
            WHY CHOOSE US
          </span>
          <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mt-3">
            Doing It Yourself vs With Euroasia
          </h2>
          <p className="text-text-muted text-lg mt-4 max-w-md">
            What changes when we handle your application.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 bg-white border-2 border-primary-navy rounded-2xl shadow-hard overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-navy text-white">
                  <th className="px-3 sm:px-6 py-4 text-left font-ledger text-xs font-semibold uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  <th className="px-3 sm:px-6 py-4 text-center font-ledger text-xs font-semibold uppercase tracking-[0.12em] bg-accent text-primary-navy">
                    <span className="flex items-center justify-center">
                      With Euroasia
                      <FiCheck aria-hidden="true" className="w-4 h-4 ml-2" />
                    </span>
                  </th>
                  <th className="px-3 sm:px-6 py-4 text-center font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                    <span className="flex items-center justify-center">
                      Doing It Yourself
                      <FiX aria-hidden="true" className="w-4 h-4 ml-2" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-t border-[#E6ECF4]">
                    <td className="px-3 sm:px-6 py-4 text-sm sm:text-base font-semibold text-primary-navy">
                      {row.feature}
                    </td>
                    <td className="px-3 sm:px-6 py-4 text-center bg-accent/10">
                      <span className="inline-flex items-center font-ledger text-sm sm:text-base font-semibold text-primary-navy">
                        <FiCheck aria-hidden="true" className="w-4 h-4 text-success-green mr-2 flex-shrink-0" />
                        {row.euroasia}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-4 text-center text-sm sm:text-base text-text-muted">
                      <span className="inline-flex items-center">
                        <FiX aria-hidden="true" className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
