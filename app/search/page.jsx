"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { FiSearch, FiArrowRight } from "react-icons/fi";

const searchableContent = [
  {
    title: "PMEGP Scheme",
    description:
      "Get up to 35% subsidy on projects up to ₹50 Lakhs for manufacturing units",
    href: "/services/pmegp",
    keywords: [
      "pmegp",
      "subsidy",
      "manufacturing",
      "kvic",
      "employment generation",
    ],
  },
  {
    title: "MUDRA Loan",
    description:
      "Collateral-free loans up to ₹10 Lakhs under Shishu, Kishore, Tarun categories",
    href: "/services/mudra",
    keywords: [
      "mudra",
      "loan",
      "shishu",
      "kishore",
      "tarun",
      "collateral free",
    ],
  },
  {
    title: "Startup India Registration",
    description:
      "DPIIT recognition for tax benefits, funding access, and easier compliance",
    href: "/services/startup-india",
    keywords: ["startup", "dpiit", "recognition", "innovation", "tax benefits"],
  },
  {
    title: "ZED Certification",
    description:
      "Zero Defect Zero Effect certification with up to ₹5 Lakhs subsidy",
    href: "/services/zed-certification",
    keywords: ["zed", "certification", "quality", "zero defect", "msme"],
  },
  {
    title: "80-IAC Tax Exemption",
    description: "100% income tax exemption for 3 years for eligible startups",
    href: "/services/80-iac",
    keywords: ["80iac", "tax", "exemption", "income tax", "startup"],
  },
  {
    title: "CGTMSE Loan",
    description:
      "Credit guarantee scheme for collateral-free loans up to ₹5 Crore",
    href: "/services/cgtmse",
    keywords: ["cgtmse", "credit guarantee", "collateral free", "loan"],
  },
  {
    title: "MSME / Udyam Registration",
    description:
      "Official MSME registration for government benefits and subsidies",
    href: "/services/msme-registration",
    keywords: ["msme", "udyam", "registration", "udyog aadhaar"],
  },
  {
    title: "IEC Registration",
    description: "Import Export Code for international trade operations",
    href: "/services/iec-registration",
    keywords: ["iec", "import", "export", "international trade"],
  },
  {
    title: "GEM Registration",
    description:
      "Register on Government e-Marketplace to sell to government departments",
    href: "/services/gem-registration",
    keywords: ["gem", "government", "marketplace", "tender", "procurement"],
  },
  {
    title: "Government Grants",
    description:
      "Access ₹10 Lakhs to ₹2 Crore in government subsidies and grants",
    href: "/services/government-grants",
    keywords: ["grants", "subsidy", "funding", "government"],
  },
  {
    title: "Business Funding",
    description:
      "Complete funding support - bank loans, NBFCs, and government schemes",
    href: "/services/business-funding",
    keywords: ["funding", "loan", "bank", "nbfc", "finance"],
  },
  {
    title: "GST Compliance",
    description: "GST registration, returns filing, and tax planning services",
    href: "/services/gst-compliance",
    keywords: ["gst", "tax", "compliance", "returns", "registration"],
  },
  {
    title: "About Us",
    description: "Learn about Euroasia - your trusted MSME funding consultancy",
    href: "/about",
    keywords: ["about", "company", "team", "euroasia"],
  },
  {
    title: "Contact Us",
    description: "Get free consultation on government schemes and MSME funding",
    href: "/contact",
    keywords: ["contact", "consultation", "phone", "address"],
  },
  {
    title: "All Services",
    description: "Complete list of MSME consulting and registration services",
    href: "/services",
    keywords: ["services", "all", "list"],
  },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = query
    ? searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.keywords.some((kw) => kw.includes(query)),
      )
    : [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {query ? (
        <>
          <p className="font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-6 pb-4 border-b border-[#D5DDE9]">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;
            {query}&rdquo;
          </p>

          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  className="group block p-6 bg-white border border-[#D5DDE9] rounded-2xl hover:border-primary-navy transition-colors duration-200"
                >
                  <h2 className="font-display font-bold text-primary-navy text-xl md:text-2xl tracking-[-0.02em] mb-2 flex items-center">
                    {result.title}
                    <FiArrowRight aria-hidden="true" className="w-5 h-5 ml-2 text-accent-text opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h2>
                  <p className="text-text-muted">{result.description}</p>
                  <span className="font-ledger text-xs font-medium text-accent-text mt-3 inline-block">
                    euroasias.com{result.href}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <span aria-hidden="true" className="w-16 h-16 mx-auto mb-5 rounded-2xl border-2 border-primary-navy flex items-center justify-center text-accent-text"><FiSearch className="w-7 h-7" /></span>
              <h2 className="font-display font-extrabold text-primary-navy text-3xl tracking-[-0.03em] mb-2">
                No results found
              </h2>
              <p className="text-text-muted text-lg mb-6">
                Try searching for PMEGP, MUDRA, Startup India, or other schemes
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl shadow-hard-sm hover:bg-accent-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              >
                Browse All Services
                <FiArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <span aria-hidden="true" className="w-16 h-16 mx-auto mb-5 rounded-2xl border-2 border-primary-navy flex items-center justify-center text-accent-text"><FiSearch className="w-7 h-7" /></span>
          <h2 className="font-display font-extrabold text-primary-navy text-3xl tracking-[-0.03em] mb-2">
            Search Euroasia
          </h2>
          <p className="text-text-muted text-lg mb-6">
            Search for government schemes, services, and more
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["PMEGP", "MUDRA", "Startup India", "ZED", "MSME"].map((term) => (
              <Link
                key={term}
                href={`/search?q=${term.toLowerCase()}`}
                className="inline-flex items-center min-h-[44px] px-5 border-2 border-[#D5DDE9] text-primary-navy font-semibold rounded-full hover:border-primary-navy transition-colors text-sm"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <PageHero
        title="Search"
        description="Find government schemes, services, and information"
        breadcrumbs={[{ label: "Search" }]}
      />
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        }
      >
        <SearchResults />
      </Suspense>
    </>
  );
}
