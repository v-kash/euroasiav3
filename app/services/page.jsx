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
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
            EXPERT MSME SERVICES
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Complete Solutions for
            <br />
            <span className="text-accent">Your Business Growth</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            From registration to funding, compliance to expansion — end-to-end
            consulting with 99% success rate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center">
              <FiCheck className="mr-1 text-success-green" /> 500+ Clients
            </span>
            <span className="flex items-center">
              <FiCheck className="mr-1 text-success-green" /> 48-Hour Processing
            </span>
            <span className="flex items-center">
              <FiCheck className="mr-1 text-success-green" /> 99% Success Rate
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Category + Success Badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-1 bg-primary-navy/10 text-primary-navy text-xs font-medium rounded">
                    {service.category}
                  </span>
                  <span className="px-2 py-1 bg-success-green/10 text-success-green text-xs font-semibold rounded">
                    ✓ {service.successRate}%
                  </span>
                </div>

                {/* Badge */}
                <div className="text-accent-text font-bold text-xl mb-2">
                  {service.badge}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-primary-navy mb-2 group-hover:text-accent-text transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-text-dark"
                    >
                      <FiCheck className="w-4 h-4 text-accent-text mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Timeline */}
                <div className="flex items-center justify-end mb-5 pb-5 border-b border-gray-100">
                  <span className="px-3 py-1 bg-blue-50 text-primary-navy text-xs font-medium rounded-full">
                    {service.timeline}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={service.href}
                    className="flex-1 text-center py-2.5 border border-primary-navy text-primary-navy font-medium rounded-lg hover:bg-primary-navy hover:text-white transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors text-sm"
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
