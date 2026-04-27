"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiCheck } from "react-icons/fi";

const businessTypes = [
  { id: "manufacturing", icon: "🏭", label: "Manufacturing" },
  { id: "trading", icon: "🛍️", label: "Trading" },
  { id: "services", icon: "💼", label: "Services" },
  { id: "tech", icon: "💻", label: "Tech Startup" },
  { id: "agriculture", icon: "🌾", label: "Agriculture" },
  { id: "construction", icon: "🏗️", label: "Construction" },
];

const turnoverOptions = [
  { id: "under25l", label: "Under ₹25 Lakh" },
  { id: "25l-1cr", label: "₹25L – ₹1 Crore" },
  { id: "1cr-5cr", label: "₹1Cr – ₹5 Crore" },
  { id: "above5cr", label: "Above ₹5 Crore" },
];

const helpOptions = [
  { id: "funding", label: "Government Funding" },
  { id: "registration", label: "Business Registration" },
  { id: "tax", label: "Tax Exemptions" },
  { id: "tender", label: "Tender Participation" },
  { id: "export", label: "Export/Import" },
  { id: "digital", label: "Digital Growth" },
];

const schemeResults = [
  { name: "PMEGP", amount: "Up to ₹25 Lakhs", icon: "💰" },
  { name: "MUDRA Loan", amount: "Up to ₹10 Lakhs", icon: "🏦" },
  { name: "Startup India", amount: "Tax Benefits", icon: "🚀" },
  { name: "ZED Certification", amount: "₹5L Subsidy", icon: "✅" },
];

export default function EligibilityChecker() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    businessType: "",
    turnover: "",
    helpNeeded: [],
  });

  const handleBusinessType = (type) => {
    setAnswers({ ...answers, businessType: type });
  };

  const handleTurnover = (turnover) => {
    setAnswers({ ...answers, turnover });
  };

  const toggleHelp = (help) => {
    const current = answers.helpNeeded;
    if (current.includes(help)) {
      setAnswers({ ...answers, helpNeeded: current.filter((h) => h !== help) });
    } else {
      setAnswers({ ...answers, helpNeeded: [...current, help] });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const canProceed = () => {
    if (step === 1) return answers.businessType !== "";
    if (step === 2) return answers.turnover !== "";
    if (step === 3) return answers.helpNeeded.length > 0;
    return true;
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
            <span>Step {Math.min(step, 3)} of 3</span>
            <span>{Math.round((Math.min(step, 3) / 3) * 100)}%</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
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
                  What type of business do you have?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {businessTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleBusinessType(type.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                        answers.businessType === type.id
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-3xl mb-2 block">{type.icon}</span>
                      <span className="font-medium text-primary-navy">
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Turnover */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-primary-navy mb-6">
                  What is your annual turnover?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {turnoverOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleTurnover(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                        answers.turnover === option.id
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

            {/* Step 3: Help Needed */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-primary-navy mb-6">
                  What do you need help with? (Select all that apply)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {helpOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleHelp(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-center flex items-center justify-center gap-2 ${
                        answers.helpNeeded.includes(option.id)
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {answers.helpNeeded.includes(option.id) && (
                        <FiCheck className="w-4 h-4 text-accent-text" />
                      )}
                      <span className="font-medium text-primary-navy">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Results */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-primary-navy mb-2">
                  Great news! You qualify for {schemeResults.length} schemes
                </h3>
                <p className="text-text-muted mb-8">
                  Based on your inputs, here are the government schemes you can
                  apply for:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {schemeResults.map((scheme, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-4 bg-light-bg rounded-xl"
                    >
                      <span className="text-2xl mr-3">{scheme.icon}</span>
                      <div className="text-left">
                        <p className="font-semibold text-primary-navy">
                          {scheme.name}
                        </p>
                        <p className="text-accent-text font-medium">
                          {scheme.amount}
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="ml-auto text-accent-text font-medium text-sm hover:underline"
                      >
                        Apply →
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                  >
                    Book Free Consultation
                    <FiArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a
                    href="https://wa.me/919898921290?text=Hi%2C%20I%20want%20to%20know%20more%20about%20government%20schemes"
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
          {step < 4 && (
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
                onClick={step === 3 ? () => setStep(4) : nextStep}
                disabled={!canProceed()}
                className={`flex items-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                  canProceed()
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {step === 3 ? "See Results" : "Next"}
                <FiArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
