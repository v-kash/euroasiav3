import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Government Schemes for MSMEs | PMEGP, MUDRA, Startup India",
  description:
    "Explore 50+ government schemes for your business. PMEGP up to ₹25 Lakhs, MUDRA up to ₹10 Lakhs, CGTMSE up to ₹2 Crore, 80-IAC tax exemption, and more. Check eligibility now.",
  keywords:
    "PMEGP scheme, MUDRA loan, CGTMSE, Startup India, 80-IAC, ZED certification, Stand-Up India, GEM registration, government grants",
};

const schemeCategories = [
  "All",
  "Funding",
  "Tax",
  "Registration",
  "Export",
  "Women",
  "SC/ST",
];

const schemes = [
  {
    id: "pmegp",
    name: "PMEGP",
    fullName: "Prime Minister's Employment Generation Programme",
    category: "Funding",
    amount: "Up to ₹25 Lakhs",
    subsidy: "15-35% Subsidy",
    timeline: "2-3 Months",
    eligibility: [
      "New manufacturing/service units",
      "Age 18+ years",
      "VIII pass for projects above ₹10L",
    ],
    benefits: [
      "No collateral required",
      "Margin money subsidy",
      "Bank loan facilitation",
    ],
    href: "/services/pmegp",
  },
  {
    id: "mudra",
    name: "MUDRA Loan",
    fullName: "Micro Units Development & Refinance Agency",
    category: "Funding",
    amount: "Up to ₹10 Lakhs",
    subsidy: "Shishu/Kishore/Tarun",
    timeline: "7-15 Days",
    eligibility: [
      "Non-corporate small businesses",
      "Manufacturing/trading/services",
      "No collateral needed",
    ],
    benefits: [
      "Quick disbursement",
      "Flexible repayment",
      "Working capital support",
    ],
    href: "/services/mudra",
  },
  {
    id: "cgtmse",
    name: "CGTMSE",
    fullName: "Credit Guarantee Fund Trust for Micro & Small",
    category: "Funding",
    amount: "Up to ₹2 Crore",
    subsidy: "Collateral-free",
    timeline: "15-30 Days",
    eligibility: [
      "New and existing MSEs",
      "Manufacturing and service sector",
      "Good credit history",
    ],
    benefits: [
      "No collateral/third party guarantee",
      "Coverage up to 85%",
      "Lower interest rates",
    ],
    href: "/services/cgtmse",
  },
  {
    id: "80-iac",
    name: "80-IAC",
    fullName: "Income Tax Exemption for Startups",
    category: "Tax",
    amount: "100% Tax Free",
    subsidy: "3 Years Exemption",
    timeline: "7-10 Days",
    eligibility: [
      "DPIIT recognized startup",
      "Incorporated after Apr 2016",
      "Turnover below ₹100 Cr",
    ],
    benefits: [
      "100% tax exemption for 3 years",
      "Angel tax exemption",
      "Self-certification for labor laws",
    ],
    href: "/services/80-iac",
  },
  {
    id: "startup-india",
    name: "Startup India",
    fullName: "DPIIT Recognition & Benefits",
    category: "Registration",
    amount: "₹20L Patent Support",
    subsidy: "Multiple Benefits",
    timeline: "7-10 Days",
    eligibility: [
      "Innovation-driven company",
      "Less than 10 years old",
      "Turnover below ₹100 Cr",
    ],
    benefits: [
      "Tax benefits",
      "Easy compliance",
      "Funding access",
      "IPR support",
    ],
    href: "/services/startup-india",
  },
  {
    id: "zed",
    name: "ZED Certification",
    fullName: "Zero Defect Zero Effect",
    category: "Registration",
    amount: "₹5L Subsidy",
    subsidy: "Quality Certification",
    timeline: "30-45 Days",
    eligibility: [
      "Registered MSME",
      "Manufacturing sector",
      "Commitment to quality",
    ],
    benefits: [
      "Government subsidy",
      "Export readiness",
      "Quality certification",
      "Tender preference",
    ],
    href: "/services/zed-certification",
  },
  {
    id: "stand-up-india",
    name: "Stand-Up India",
    fullName: "SC/ST & Women Entrepreneur Loans",
    category: "Women",
    amount: "₹10L – ₹1Cr",
    subsidy: "Composite Loan",
    timeline: "15-30 Days",
    eligibility: [
      "SC/ST or Women entrepreneur",
      "Greenfield enterprise",
      "Manufacturing/services/trading",
    ],
    benefits: [
      "Composite loan",
      "Margin money 25%",
      "Working capital included",
    ],
    href: "/services/government-grants",
  },
  {
    id: "gem",
    name: "GEM Registration",
    fullName: "Government e-Marketplace",
    category: "Registration",
    amount: "Free + Revenue",
    subsidy: "Govt Vendor Access",
    timeline: "48 Hours",
    eligibility: ["Valid GST registration", "PAN card", "Bank account"],
    benefits: [
      "Direct govt orders",
      "No intermediaries",
      "Quick payments",
      "Pan-India market",
    ],
    href: "/services/gem-registration",
  },
  {
    id: "udyam",
    name: "Udyam Registration",
    fullName: "MSME Registration",
    category: "Registration",
    amount: "Same Day",
    subsidy: "Priority Sector",
    timeline: "24-48 Hours",
    eligibility: ["Aadhaar number", "PAN/GSTIN", "Business details"],
    benefits: [
      "Priority sector lending",
      "Govt scheme access",
      "Tender eligibility",
      "Subsidy access",
    ],
    href: "/services/msme-registration",
  },
  {
    id: "iec",
    name: "IEC Registration",
    fullName: "Import Export Code",
    category: "Export",
    amount: "Go Global",
    subsidy: "Export Benefits",
    timeline: "5-7 Days",
    eligibility: ["PAN card", "Bank account", "Address proof"],
    benefits: [
      "Legal import/export",
      "DGFT benefits",
      "Export incentives",
      "Global market access",
    ],
    href: "/services/iec-registration",
  },
];

export default function SchemesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-light-bg border-b border-[#D5DDE9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2.5 px-3.5 py-2 mb-7 border-[1.5px] border-primary-navy rounded-full text-primary-navy font-ledger text-xs font-semibold tracking-[0.12em]">
              <span aria-hidden="true" className="w-2 h-2 rounded-[2px] bg-accent" />
              50+ GOVERNMENT SCHEMES
            </span>
            <h1 className="font-display font-extrabold text-primary-navy text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-[-0.04em] mb-6">
              Explore Government Schemes
              <br />
              <span className="text-accent-text">for Your Business</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mb-8">
              From ₹10 Lakhs to ₹2 Crore funding, tax exemptions to quality
              certifications — find the right scheme for your MSME.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/check-eligibility"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl shadow-hard-sm hover:bg-accent-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              >
                Check Your Eligibility
                <FiArrowRight aria-hidden="true" className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-bold rounded-xl hover:bg-primary-navy hover:text-white transition-colors duration-150"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-primary-navy">
            {[
              { value: "₹100 Cr+", label: "Funding Secured" },
              { value: "500+", label: "Businesses Helped" },
              { value: "50+", label: "Schemes Available" },
              { value: "99%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`pt-8 pb-6 px-4 md:px-8 border-[#D5DDE9] ${
                  index % 2 === 1 ? "border-l" : ""
                } ${index > 0 ? "md:border-l" : ""} ${
                  index > 1 ? "border-t md:border-t-0" : ""
                }`}
              >
                <p className="font-display text-4xl md:text-5xl font-extrabold text-primary-navy tracking-[-0.04em] leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs - Static for now */}
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#D5DDE9]">
            {schemeCategories.map((cat) => (
              <span
                key={cat}
                className={`inline-flex items-center min-h-[44px] px-5 rounded-full border-2 font-semibold text-sm ${
                  cat === "All"
                    ? "bg-primary-navy border-primary-navy text-white"
                    : "bg-white border-[#D5DDE9] text-primary-navy"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Schemes Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className="group flex flex-col bg-white border border-[#D5DDE9] rounded-2xl p-6 hover:border-primary-navy transition-colors duration-200"
              >
                {/* Header */}
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 bg-light-bg border border-[#D5DDE9] text-primary-navy font-ledger text-[11px] font-semibold uppercase tracking-[0.1em] rounded mb-3">
                    {scheme.category}
                  </span>
                  <h3 className="font-display font-bold text-primary-navy text-2xl tracking-[-0.02em] leading-snug">
                    {scheme.name}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{scheme.fullName}</p>
                </div>

                {/* Amount Badge */}
                <div className="font-display font-extrabold text-accent-text text-3xl tracking-[-0.03em] leading-none mb-4">
                  {scheme.amount}
                </div>

                {/* Info Row */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-3 py-1 bg-success-green/10 text-success-green font-ledger text-xs font-semibold rounded-full">
                    {scheme.subsidy}
                  </span>
                  <span className="px-3 py-1 bg-light-bg border border-[#D5DDE9] text-primary-navy font-ledger text-xs font-semibold rounded-full">
                    {scheme.timeline}
                  </span>
                </div>

                {/* Eligibility */}
                <div className="mb-6 pt-4 border-t border-dashed border-[#D5DDE9]">
                  <p className="font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-3">
                    Eligibility
                  </p>
                  <ul className="space-y-2">
                    {scheme.eligibility.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-text-dark"
                      >
                        <FiCheck aria-hidden="true" className="w-4 h-4 text-success-green mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={scheme.href}
                    className="flex items-center justify-center gap-2 w-full min-h-[48px] bg-accent text-primary-navy font-bold rounded-xl hover:bg-accent-dark transition-colors"
                  >
                    Apply for {scheme.name}
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-navy rounded-3xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-display font-extrabold text-white text-4xl md:text-5xl leading-[1.02] tracking-[-0.035em] mb-4">
                Not Sure Which Scheme is Right for You?
              </h2>
              <p className="text-lg text-white/75">
                Our experts will analyze your business and recommend the best
                schemes you qualify for.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl hover:bg-accent-dark transition-colors flex-shrink-0"
            >
              Get Free Expert Consultation
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
