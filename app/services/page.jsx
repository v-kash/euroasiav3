import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: {
    absolute: "MSME Funding, Registration & Compliance Services | Euroasia",
  },
  description:
    "Explore Euroasia services for government grants, MSME/Udyam registration, business funding, Startup India, GST, tenders, ZED, IEC and digital marketing.",
  keywords:
    "MSME registration, Udyam, Startup India, DPIIT, GST compliance, tender assistance, ZED certification, government grants, business funding",
  alternates: {
    canonical: "/services",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

const services = [
  {
    title: "Government Grants & Subsidies",
    category: "Funding",
    href: "/services/government-grants",
    badge: "Up to ₹1 Crore",
    successRate: 98,
    price: "₹2,999",
    timeline: "2–3 Months",
    description:
      "Access PMEGP, state subsidies and central government grants for your business.",
    bullets: [
      "PMEGP Scheme Support",
      "CGTMSE Guarantee",
      "State Subsidies",
      "Eligibility Assessment",
    ],
  },
  {
    title: "MSME Registration & Udyam",
    category: "Registration",
    href: "/services/msme-registration",
    badge: "Same Day",
    successRate: 100,
    price: "₹999",
    timeline: "48 Hours",
    description:
      "Get your Udyam registration and MSME certificate with priority processing.",
    bullets: [
      "Udyam Registration",
      "MSME Certificate",
      "Priority Sector Benefits",
      "Instant Processing",
    ],
  },
  {
    title: "Business Funding Solutions",
    category: "Funding",
    href: "/services/business-funding",
    badge: "₹10L – ₹50L",
    successRate: 95,
    price: "₹1,999",
    timeline: "7–15 Days",
    description:
      "Working capital loans, equipment financing and MUDRA loans for MSMEs.",
    bullets: [
      "Working Capital Loans",
      "Equipment Financing",
      "MUDRA Loans",
      "Quick Disbursement",
    ],
  },
  {
    title: "Startup India & DPIIT Registration",
    category: "Registration",
    href: "/services/startup-india",
    badge: "Tax Free 3 Yrs",
    successRate: 99,
    price: "₹2,499",
    timeline: "7–10 Days",
    description:
      "DPIIT recognition with 80-IAC tax exemption and angel tax relief benefits.",
    bullets: [
      "DPIIT Recognition",
      "80-IAC Tax Exemption",
      "Angel Tax Relief",
      "Startup Certificate",
    ],
  },
  {
    title: "GST & Tax Compliance",
    category: "Compliance",
    href: "/services/gst-compliance",
    badge: "From ₹999/mo",
    successRate: 100,
    price: "₹999/mo",
    timeline: "Ongoing",
    description: "Complete GST registration, filing and tax planning services.",
    bullets: [
      "GST Registration",
      "Monthly/Quarterly Filing",
      "Tax Planning",
      "Compliance Audit",
    ],
  },
  {
    title: "Tender & Government Liaison",
    category: "Growth",
    href: "/services/tender-assistance",
    badge: "Win Tenders",
    successRate: 92,
    price: "₹3,999",
    timeline: "Project-Based",
    description:
      "End-to-end tender support from search to bid submission and coordination.",
    bullets: [
      "Tender Search",
      "Bid Preparation",
      "Documentation",
      "Department Coordination",
    ],
  },
  {
    title: "ZED Certification",
    category: "Registration",
    href: "/services/zed-certification",
    badge: "₹5L Subsidy",
    successRate: 96,
    price: "₹4,999",
    timeline: "30–45 Days",
    description:
      "Zero Defect Zero Effect certification for quality and export readiness.",
    bullets: [
      "Zero Defect Zero Effect",
      "Quality Certification",
      "Export Readiness",
      "Govt Incentives",
    ],
  },
  {
    title: "Import Export Code (IEC)",
    category: "Growth",
    href: "/services/iec-registration",
    badge: "Go Global",
    successRate: 100,
    price: "₹1,499",
    timeline: "5–7 Days",
    description:
      "IEC registration for import/export with DGFT support and customs guidance.",
    bullets: [
      "IEC Registration",
      "Export Benefits",
      "DGFT Support",
      "Customs Guidance",
    ],
  },
  {
    title: "Digital Marketing & Web",
    category: "Digital",
    href: "/services/digital-marketing",
    badge: "3x ROI Avg",
    successRate: 95,
    price: "₹9,999/mo",
    timeline: "Ongoing",
    description:
      "Complete digital presence with SEO, PPC, social media and lead generation.",
    bullets: [
      "SEO & PPC",
      "Website Development",
      "Social Media",
      "Lead Generation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-light-bg border-b border-[#D5DDE9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2.5 px-3.5 py-2 mb-7 border-[1.5px] border-primary-navy rounded-full text-primary-navy font-ledger text-xs font-semibold tracking-[0.12em]">
              <span aria-hidden="true" className="w-2 h-2 rounded-[2px] bg-accent" />
              EXPERT MSME SERVICES
            </span>
            <h1 className="font-display font-extrabold text-primary-navy text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-[-0.04em] mb-6">
              Complete Solutions for
              <br />
              <span className="text-accent-text">Your Business Growth</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mb-8">
              From registration to funding, compliance to expansion — end-to-end
              consulting with 99% success rate.
            </p>
            <div className="flex flex-wrap gap-2.5 text-sm font-medium text-primary-navy">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#D5DDE9] rounded-full">
                <FiCheck aria-hidden="true" className="text-success-green" /> 500+ Clients
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#D5DDE9] rounded-full">
                <FiCheck aria-hidden="true" className="text-success-green" /> 48-Hour Processing
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#D5DDE9] rounded-full">
                <FiCheck aria-hidden="true" className="text-success-green" /> 99% Success Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col bg-white border border-[#D5DDE9] rounded-2xl p-6 hover:border-primary-navy transition-colors duration-200"
              >
                {/* Category + Success Badge */}
                <div className="flex items-start justify-between mb-5">
                  <span className="px-2.5 py-1 bg-light-bg border border-[#D5DDE9] text-primary-navy font-ledger text-[11px] font-semibold uppercase tracking-[0.1em] rounded">
                    {service.category}
                  </span>
                  <span className="px-2 py-1 bg-success-green/10 text-success-green font-ledger text-xs font-semibold rounded">
                    ✓ {service.successRate}%
                  </span>
                </div>

                {/* Badge */}
                <div className="font-display font-extrabold text-accent-text text-2xl tracking-[-0.02em] mb-1">
                  {service.badge}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] leading-snug mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm mb-5 line-clamp-2">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-text-dark"
                    >
                      <FiCheck aria-hidden="true" className="w-4 h-4 text-accent-text mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Timeline */}
                <div className="mt-auto flex items-center justify-end pt-4 mb-5 border-t border-dashed border-[#D5DDE9]">
                  <span className="px-3 py-1 bg-light-bg border border-[#D5DDE9] text-primary-navy font-ledger text-xs font-semibold rounded-full">
                    {service.timeline}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={service.href}
                    className="flex-1 inline-flex items-center justify-center min-h-[44px] border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center min-h-[44px] bg-accent text-primary-navy font-semibold rounded-lg hover:bg-accent-dark transition-colors text-sm"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
