"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiCheck } from "react-icons/fi";

const businessTypes = [
  { id: "manufacturing", icon: "🏭", label: "Manufacturing" },
  { id: "trading", icon: "🛍️", label: "Trading" },
  { id: "services", icon: "💼", label: "Services" },
  { id: "tech", icon: "💻", label: "Tech/IT/AI" },
  { id: "agriculture", icon: "🌾", label: "Agriculture/Food" },
  { id: "healthcare", icon: "🏥", label: "Healthcare/Biotech" },
  { id: "fintech", icon: "💳", label: "Fintech" },
  { id: "ecommerce", icon: "🛒", label: "E-Commerce" },
  { id: "cleantech", icon: "♻️", label: "Clean Energy/Green" },
  { id: "logistics", icon: "🚚", label: "Logistics/Mobility" },
  { id: "education", icon: "📚", label: "EdTech" },
  { id: "defence", icon: "🛡️", label: "Defence/Aerospace" },
];

const entityTypes = [
  { id: "individual", label: "Individual/Proprietorship" },
  { id: "partnership", label: "Partnership/LLP" },
  { id: "pvtltd", label: "Private Limited" },
  { id: "ngo", label: "NGO/Section 8/Trust" },
];

const specialCategories = [
  { id: "none", label: "None" },
  { id: "women", label: "Women Entrepreneur" },
  { id: "scst", label: "SC/ST Entrepreneur" },
  { id: "young", label: "Young (Under 25)" },
  { id: "gujarat", label: "Gujarat Based" },
  { id: "maharashtra", label: "Maharashtra Based" },
];

const fundingRanges = [
  { id: "under10l", label: "Under ₹10 Lakhs" },
  { id: "10l-50l", label: "₹10L – ₹50 Lakhs" },
  { id: "50l-1cr", label: "₹50L – ₹1 Crore" },
  { id: "1cr-5cr", label: "₹1Cr – ₹5 Crore" },
  { id: "above5cr", label: "Above ₹5 Crore" },
];

const allSchemes = [
  { id: "pmegp", name: "PMEGP", amount: "Up to ₹50L (Mfg) / ₹20L (Service)", icon: "💰", sectors: ["manufacturing", "services", "trading"], entities: ["individual"], funding: ["under10l", "10l-50l"], special: [] },
  { id: "mudra", name: "MUDRA Loan", amount: "Up to ₹20 Lakhs", icon: "🏦", sectors: ["manufacturing", "services", "trading", "tech", "ecommerce"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l", "10l-50l"], special: [] },
  { id: "cgtmse", name: "CGTMSE", amount: "Up to ₹10 Crore", icon: "🛡️", sectors: ["manufacturing", "services", "trading", "tech"], entities: ["partnership", "pvtltd"], funding: ["1cr-5cr", "above5cr"], special: [] },
  { id: "seedfund", name: "Seed Fund", amount: "₹20L Grant / ₹50L Equity", icon: "🌱", sectors: ["tech", "healthcare", "fintech", "ecommerce", "cleantech", "education"], entities: ["partnership", "pvtltd"], funding: ["10l-50l"], special: [] },
  { id: "cgss", name: "CGSS Scheme", amount: "Credit Guarantee up to ₹20 Cr", icon: "✅", sectors: ["manufacturing", "tech", "healthcare"], entities: ["partnership", "pvtltd"], funding: ["1cr-5cr", "above5cr"], special: [] },
  { id: "spark", name: "Spark Grant", amount: "Up to ₹88 Lakhs", icon: "✨", sectors: ["tech", "healthcare", "cleantech", "fintech", "education"], entities: ["individual", "partnership", "pvtltd"], funding: ["10l-50l", "50l-1cr"], special: ["women"] },
  { id: "growth", name: "Growth Grant", amount: "Up to ₹1.7 Crore", icon: "📈", sectors: ["tech", "healthcare", "fintech", "ecommerce"], entities: ["partnership", "pvtltd"], funding: ["50l-1cr", "1cr-5cr"], special: ["young"] },
  { id: "tide", name: "TIDE 2.0", amount: "Up to ₹7 Lakhs", icon: "🌊", sectors: ["tech", "healthcare", "cleantech"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l"], special: [] },
  { id: "rkvy", name: "RKVY RAFTAAR", amount: "Grant up to ₹25 Lakhs", icon: "🌾", sectors: ["agriculture"], entities: ["individual", "partnership", "pvtltd"], funding: ["10l-50l"], special: [] },
  { id: "agrisure", name: "Agri-Sure Fund", amount: "Up to ₹25 Crore (Equity)", icon: "🚜", sectors: ["agriculture"], entities: ["partnership", "pvtltd"], funding: ["1cr-5cr", "above5cr"], special: [] },
  { id: "naiff", name: "NAIFF", amount: "Loan up to ₹2 Cr @ 3% Interest", icon: "🌿", sectors: ["agriculture"], entities: ["individual", "partnership", "pvtltd", "ngo"], funding: ["50l-1cr", "1cr-5cr"], special: [] },
  { id: "healthcare", name: "Healthcare Innovation Grant", amount: "Up to ₹10 Lakhs", icon: "🏥", sectors: ["healthcare"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l"], special: [] },
  { id: "biomanufacturing", name: "Biomanufacturing Grant", amount: "Up to ₹50 Lakhs", icon: "🧬", sectors: ["healthcare"], entities: ["partnership", "pvtltd"], funding: ["10l-50l"], special: [] },
  { id: "scst", name: "Fund for SC/ST Entrepreneurs", amount: "Up to ₹5 Crore (Equity)", icon: "🎯", sectors: ["manufacturing", "services", "tech", "agriculture"], entities: ["individual", "partnership", "pvtltd"], funding: ["1cr-5cr", "above5cr"], special: ["scst"] },
  { id: "standup", name: "Stand-Up India", amount: "₹10L to ₹1 Crore", icon: "🚀", sectors: ["manufacturing", "services", "trading"], entities: ["individual", "partnership"], funding: ["10l-50l", "50l-1cr"], special: ["women", "scst"] },
  { id: "srujan", name: "SRUJAN 2025", amount: "₹2.5L to ₹10 Lakhs", icon: "🎨", sectors: ["tech", "services", "manufacturing"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l"], special: ["gujarat"] },
  { id: "gujfund", name: "Gujarat Funding Support", amount: "Up to ₹30 Lakhs", icon: "🏛️", sectors: ["tech", "manufacturing", "services"], entities: ["partnership", "pvtltd"], funding: ["10l-50l"], special: ["gujarat"] },
  { id: "mhventure", name: "Venture Fund (MH)", amount: "Up to ₹10 Crore", icon: "🏙️", sectors: ["tech", "healthcare", "fintech"], entities: ["pvtltd"], funding: ["1cr-5cr", "above5cr"], special: ["maharashtra"] },
  { id: "socialfund", name: "Social Fund", amount: "Up to ₹2.63 Crore", icon: "❤️", sectors: ["healthcare", "education", "cleantech"], entities: ["ngo"], funding: ["50l-1cr", "1cr-5cr"], special: [] },
  { id: "sss", name: "Startup Support Scheme (SSS)", amount: "₹25L to ₹1 Crore", icon: "💼", sectors: ["tech", "healthcare", "fintech", "agriculture"], entities: ["individual", "partnership", "pvtltd"], funding: ["10l-50l", "50l-1cr"], special: [] },
  { id: "masterfund", name: "Master Fund", amount: "Up to ₹35 Lakhs", icon: "🎓", sectors: ["tech", "manufacturing", "services"], entities: ["partnership", "pvtltd"], funding: ["10l-50l"], special: [] },
  { id: "profund", name: "Pro-Fund Support", amount: "₹2L to ₹30 Lakhs", icon: "💡", sectors: ["tech", "services", "manufacturing"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l", "10l-50l"], special: [] },
  { id: "innopreneur", name: "Inno-Preneurs", amount: "Up to ₹5 Cr + ₹50L Reward", icon: "", sectors: ["tech", "healthcare", "cleantech", "defence"], entities: ["individual", "partnership", "pvtltd"], funding: ["1cr-5cr", "above5cr"], special: [] },
  { id: "dpiit", name: "Startup India (DPIIT)", amount: "Tax Benefits + IPR Support", icon: "🇮🇳", sectors: ["tech", "healthcare", "fintech", "cleantech", "education", "ecommerce"], entities: ["pvtltd", "partnership"], funding: ["under10l", "10l-50l", "50l-1cr", "1cr-5cr", "above5cr"], special: [] },
  { id: "80iac", name: "80-IAC Tax Exemption", amount: "100% Tax Free 3 Years", icon: "", sectors: ["tech", "healthcare", "fintech", "cleantech", "education"], entities: ["pvtltd", "partnership"], funding: ["under10l", "10l-50l", "50l-1cr", "1cr-5cr", "above5cr"], special: [] },
  { id: "zed", name: "ZED Certification", amount: "₹5L Subsidy", icon: "✓", sectors: ["manufacturing"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l", "10l-50l"], special: [] },
  { id: "gem", name: "GEM Registration", amount: "Access to Govt Orders", icon: "🛒", sectors: ["manufacturing", "services", "trading", "tech"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l", "10l-50l", "50l-1cr", "1cr-5cr", "above5cr"], special: [] },
];

// Shared look for every answer button in the wizard
const optionClass = (selected) =>
  `min-h-[56px] p-4 rounded-xl border-2 text-center text-sm font-semibold transition-colors duration-150 ${
    selected
      ? "border-primary-navy bg-primary-navy text-white"
      : "border-[#D5DDE9] bg-white text-primary-navy hover:border-primary-navy"
  }`;

export default function EligibilityChecker() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    businessType: "",
    entityType: "",
    fundingRange: "",
    specialCategory: "none",
  });
  const [matchedSchemes, setMatchedSchemes] = useState([]);

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const canProceed = () => {
    if (step === 1) return answers.businessType !== "";
    if (step === 2) return answers.entityType !== "";
    if (step === 3) return answers.fundingRange !== "";
    if (step === 4) return answers.specialCategory !== "";
    return true;
  };

  const calculateResults = () => {
    const results = allSchemes.filter((scheme) => {
      const sectorMatch = scheme.sectors.includes(answers.businessType);
      const entityMatch = scheme.entities.includes(answers.entityType);
      const fundingMatch = scheme.funding.includes(answers.fundingRange);
      const specialMatch = scheme.special.length === 0 ||
        (answers.specialCategory !== "none" && scheme.special.includes(answers.specialCategory));

      return sectorMatch && entityMatch && fundingMatch && (scheme.special.length === 0 || specialMatch);
    });

    // Sort by relevance - special category matches first
    results.sort((a, b) => {
      const aSpecial = a.special.includes(answers.specialCategory) ? 1 : 0;
      const bSpecial = b.special.includes(answers.specialCategory) ? 1 : 0;
      return bSpecial - aSpecial;
    });

    setMatchedSchemes(results.slice(0, 8));
    setStep(5);
  };

  const currentStep = Math.min(step, 4);

  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mb-3">
            Check Your Eligibility in 60 Seconds
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Find out which government schemes your business qualifies for —
            instantly.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-2.5">
            <span>Step {currentStep} of 4</span>
            <span>{Math.round((currentStep / 4) * 100)}%</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  n <= currentStep ? "bg-accent" : "bg-[#D5DDE9]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Wizard Card */}
        <div className="bg-white border-2 border-primary-navy rounded-2xl shadow-hard p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Business Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-display font-bold text-primary-navy text-2xl tracking-[-0.02em] mb-6">
                  What sector is your business in?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleSelect("businessType", type.id)}
                      aria-pressed={answers.businessType === type.id}
                      className={optionClass(answers.businessType === type.id)}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Entity Type */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-display font-bold text-primary-navy text-2xl tracking-[-0.02em] mb-6">
                  What is your business entity type?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {entityTypes.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect("entityType", option.id)}
                      aria-pressed={answers.entityType === option.id}
                      className={optionClass(answers.entityType === option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Funding Range */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-display font-bold text-primary-navy text-2xl tracking-[-0.02em] mb-6">
                  How much funding do you need?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {fundingRanges.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect("fundingRange", option.id)}
                      aria-pressed={answers.fundingRange === option.id}
                      className={optionClass(answers.fundingRange === option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Special Category */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-display font-bold text-primary-navy text-2xl tracking-[-0.02em] mb-6">
                  Do you belong to any special category?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {specialCategories.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect("specialCategory", option.id)}
                      aria-pressed={answers.specialCategory === option.id}
                      className={optionClass(answers.specialCategory === option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Results */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-success-green/10 text-success-green flex items-center justify-center">
                  <FiCheck aria-hidden="true" className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-primary-navy text-3xl tracking-[-0.03em] mb-2">
                  {matchedSchemes.length > 0
                    ? `Great news! You qualify for ${matchedSchemes.length} schemes`
                    : "Let us help you find the right schemes"}
                </h3>
                <p className="text-text-muted mb-8">
                  {matchedSchemes.length > 0
                    ? "Based on your inputs, here are the government schemes you can apply for:"
                    : "Our experts can identify custom funding opportunities for your business."}
                </p>

                {matchedSchemes.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-3 mb-8 text-left">
                    {matchedSchemes.map((scheme, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-light-bg border border-[#D5DDE9] rounded-xl"
                      >
                        <span
                          aria-hidden="true"
                          className="font-ledger text-xs font-semibold text-accent-text"
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <p className="font-bold text-primary-navy">
                            {scheme.name}
                          </p>
                          <p className="text-accent-text font-semibold text-sm">
                            {scheme.amount}
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="text-primary-navy font-semibold text-sm underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text"
                        >
                          Apply →
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl hover:bg-accent-dark transition-colors"
                  >
                    Book Free Consultation
                    <FiArrowRight aria-hidden="true" className="w-5 h-5 ml-2" />
                  </Link>
                  <a
                    href="https://wa.me/919898921290?text=Hi%2C%20I%20checked%20my%20eligibility%20and%20want%20to%20know%20more%20about%20government%20schemes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-bold rounded-xl hover:bg-primary-navy hover:text-white transition-colors"
                  >
                    Talk to Expert on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-[#E6ECF4]">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center min-h-[48px] px-5 font-semibold rounded-xl transition-colors ${
                  step === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-primary-navy hover:bg-light-bg"
                }`}
              >
                <FiArrowLeft aria-hidden="true" className="w-5 h-5 mr-2" />
                Back
              </button>
              <button
                type="button"
                onClick={step === 4 ? calculateResults : nextStep}
                disabled={!canProceed()}
                className={`flex items-center min-h-[48px] px-6 font-bold rounded-xl transition-colors ${
                  canProceed()
                    ? "bg-accent text-primary-navy hover:bg-accent-dark"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {step === 4 ? "See My Schemes" : "Next"}
                <FiArrowRight aria-hidden="true" className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
