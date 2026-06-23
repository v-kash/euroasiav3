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
  { id: "innopreneur", name: "Inno-Preneurs", amount: "Up to ₹5 Cr + ₹50L Reward", icon: "�", sectors: ["tech", "healthcare", "cleantech", "defence"], entities: ["individual", "partnership", "pvtltd"], funding: ["1cr-5cr", "above5cr"], special: [] },
  { id: "dpiit", name: "Startup India (DPIIT)", amount: "Tax Benefits + IPR Support", icon: "🇮🇳", sectors: ["tech", "healthcare", "fintech", "cleantech", "education", "ecommerce"], entities: ["pvtltd", "partnership"], funding: ["under10l", "10l-50l", "50l-1cr", "1cr-5cr", "above5cr"], special: [] },
  { id: "80iac", name: "80-IAC Tax Exemption", amount: "100% Tax Free 3 Years", icon: "�", sectors: ["tech", "healthcare", "fintech", "cleantech", "education"], entities: ["pvtltd", "partnership"], funding: ["under10l", "10l-50l", "50l-1cr", "1cr-5cr", "above5cr"], special: [] },
  { id: "zed", name: "ZED Certification", amount: "₹5L Subsidy", icon: "✓", sectors: ["manufacturing"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l", "10l-50l"], special: [] },
  { id: "gem", name: "GEM Registration", amount: "Access to Govt Orders", icon: "🛒", sectors: ["manufacturing", "services", "trading", "tech"], entities: ["individual", "partnership", "pvtltd"], funding: ["under10l", "10l-50l", "50l-1cr", "1cr-5cr", "above5cr"], special: [] },
];

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

  return (
    <section className="py-20 bg-light-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-h2 font-bold text-primary-navy mb-4">
            Check Your Eligibility in 60 Seconds
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Find out which government schemes your business qualifies for —
            instantly.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-text-muted mb-2">
            <span>Step {Math.min(step, 4)} of 4</span>
            <span>{Math.round((Math.min(step, 4) / 4) * 100)}%</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Business Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-primary-navy mb-6">
                  What sector is your business in?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleSelect("businessType", type.id)}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 text-center ${
                        answers.businessType === type.id
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-2xl mb-1 block">{type.icon}</span>
                      <span className="font-medium text-primary-navy text-sm">
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Entity Type */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-primary-navy mb-6">
                  What is your business entity type?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {entityTypes.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect("entityType", option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                        answers.entityType === option.id
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="font-medium text-primary-navy">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Funding Range */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-primary-navy mb-6">
                  How much funding do you need?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {fundingRanges.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect("fundingRange", option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                        answers.fundingRange === option.id
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="font-medium text-primary-navy">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Special Category */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-primary-navy mb-6">
                  Do you belong to any special category?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {specialCategories.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect("specialCategory", option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                        answers.specialCategory === option.id
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="font-medium text-primary-navy">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Results */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-primary-navy mb-2">
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
                  <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                    {matchedSchemes.map((scheme, idx) => (
                      <div
                        key={idx}
                        className="flex items-center p-4 bg-light-bg rounded-xl"
                      >
                        <span className="text-2xl mr-3">{scheme.icon}</span>
                        <div className="flex-1">
                          <p className="font-semibold text-primary-navy">
                            {scheme.name}
                          </p>
                          <p className="text-accent-text font-medium text-sm">
                            {scheme.amount}
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="text-accent-text font-medium text-sm hover:underline"
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
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                  >
                    Book Free Consultation
                    <FiArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a
                    href="https://wa.me/919898921290?text=Hi%2C%20I%20checked%20my%20eligibility%20and%20want%20to%20know%20more%20about%20government%20schemes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors"
                  >
                    Talk to Expert on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center px-6 py-3 font-medium rounded-lg transition-colors ${
                  step === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-primary-navy hover:bg-light-bg"
                }`}
              >
                <FiArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <button
                onClick={step === 4 ? calculateResults : nextStep}
                disabled={!canProceed()}
                className={`flex items-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                  canProceed()
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {step === 4 ? "See My Schemes" : "Next"}
                <FiArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
