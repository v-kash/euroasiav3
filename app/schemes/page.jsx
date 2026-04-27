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
    href: "/schemes/pmegp",
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
    href: "/schemes/mudra",
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
    href: "/schemes/cgtmse",
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
    href: "/schemes/80-iac",
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
    href: "/schemes/startup-india",
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
    href: "/schemes/zed",
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
    href: "/schemes/stand-up-india",
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
    href: "/schemes/gem",
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
    href: "/schemes/udyam",
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
    href: "/schemes/iec",
  },
];

export default function SchemesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
            50+ GOVERNMENT SCHEMES
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Explore Government Schemes
            <br />
            <span className="text-accent">for Your Business</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            From ₹10 Lakhs to ₹2 Crore funding, tax exemptions to quality
            certifications — find the right scheme for your MSME.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Check Your Eligibility
              <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-navy transition-colors"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-center">
            <div>
              <p className="text-2xl font-bold text-primary-navy">₹100 Cr+</p>
              <p className="text-sm text-text-muted">Funding Secured</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-navy">500+</p>
              <p className="text-sm text-text-muted">Businesses Helped</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-navy">50+</p>
              <p className="text-sm text-text-muted">Schemes Available</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-navy">99%</p>
              <p className="text-sm text-text-muted">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs - Static for now */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {schemeCategories.map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm ${
                  cat === "All"
                    ? "bg-primary-navy text-white"
                    : "bg-white text-text-dark hover:bg-gray-100"
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
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-primary-navy/10 text-primary-navy text-xs font-medium rounded mb-2">
                      {scheme.category}
                    </span>
                    <h3 className="text-xl font-bold text-primary-navy group-hover:text-accent-text transition-colors">
                      {scheme.name}
                    </h3>
                    <p className="text-sm text-text-muted">{scheme.fullName}</p>
                  </div>
                </div>

                {/* Amount Badge */}
                <div className="text-accent-text font-bold text-2xl mb-4">
                  {scheme.amount}
                </div>

                {/* Info Row */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-success-green/10 text-success-green text-xs font-medium rounded-full">
                    {scheme.subsidy}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-primary-navy text-xs font-medium rounded-full">
                    {scheme.timeline}
                  </span>
                </div>

                {/* Eligibility */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-text-muted uppercase mb-2">
                    Eligibility
                  </p>
                  <ul className="space-y-1">
                    {scheme.eligibility.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-text-dark"
                      >
                        <FiCheck className="w-4 h-4 text-success-green mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={scheme.href}
                    className="flex items-center justify-center w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                  >
                    Apply for {scheme.name}
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Scheme is Right for You?
          </h2>
          <p className="text-white/70 mb-8">
            Our experts will analyze your business and recommend the best
            schemes you qualify for.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Get Free Expert Consultation
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
