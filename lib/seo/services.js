// Page-specific SEO / AEO / GEO content for the service pages (supplied by the SEO team).
// Plain data + helpers only (no JSX) so both server layouts and client pages can import it.

export const SITE_URL = "https://www.euroasias.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const serviceSeo = {
  "government-grants": {
    name: "Government Grants & Subsidies",
    title: "Government Grants & MSME Subsidy Support India | Euroasia",
    description:
      "Government grant and subsidy support for eligible MSMEs and startups, including scheme identification, eligibility review, DPR preparation, documentation and application assistance.",
    faqs: [
      {
        question: "What government grants can MSMEs apply for?",
        answer:
          "The suitable program depends on business activity, location, applicant category, project cost and current central or state guidelines. Euroasia can assess relevant schemes and help prepare the required application material.",
      },
      {
        question: "Are government grants guaranteed?",
        answer:
          "No. Eligibility and application support do not guarantee sanction or disbursement. The relevant government authority, lender or scheme administrator makes the final decision.",
      },
    ],
  },
  pmegp: {
    name: "PMEGP Scheme Support",
    title: "PMEGP Application, DPR & Loan Support | Euroasia",
    description:
      "PMEGP application support for eligible new micro-enterprises, including eligibility assessment, DPR preparation, documentation, bank application assistance and follow-up.",
    faqs: [
      {
        question: "What is the current PMEGP project-cost limit?",
        answer:
          "Under current official PMEGP guidelines, the maximum project cost eligible for margin-money subsidy for a new unit is ₹50 lakh for manufacturing and ₹20 lakh for business/service activities. Scheme rules should be rechecked before application.",
      },
      {
        question: "Does Euroasia guarantee PMEGP approval?",
        answer:
          "No. Euroasia can support eligibility review, DPR preparation, documentation and application follow-up. Approval, loan sanction and subsidy adjustment depend on the bank and relevant PMEGP authorities.",
      },
    ],
  },
  cgtmse: {
    name: "CGTMSE Loan Support",
    title: "CGTMSE Loan & Credit Guarantee Support for MSEs | Euroasia",
    description:
      "CGTMSE-linked loan preparation for eligible micro and small enterprises, including eligibility review, project reports, financial documentation and lender application support.",
    faqs: [
      {
        question: "What is the current CGTMSE coverage ceiling?",
        answer:
          "Current CGTMSE guidance covers eligible fund and non-fund credit facilities up to ₹10 crore per eligible borrower, subject to scheme conditions and lender assessment. Guarantee percentages vary by borrower category.",
      },
      {
        question: "Is a CGTMSE loan automatically approved without collateral?",
        answer:
          "No. CGTMSE is a credit-guarantee framework for eligible lending. The member lending institution still evaluates project viability, borrower profile, documentation and credit risk before sanction.",
      },
    ],
  },
  "business-funding": {
    name: "Business Funding Solutions",
    title: "Business Funding & MSME Loan Consulting India | Euroasia",
    description:
      "Business funding support for working capital, term loans, equipment finance, government schemes and other suitable funding routes, with documentation and application preparation.",
    faqs: [
      {
        question: "What funding options can a growing business consider?",
        answer:
          "Depending on the business profile, options can include working-capital facilities, term loans, equipment finance, eligible government-linked schemes, NBFC finance or equity funding. Suitability depends on need, cash flow, stage and lender criteria.",
      },
      {
        question: "Can you guarantee a bank or NBFC loan?",
        answer:
          "No. Euroasia can help prepare the funding case and documentation, but credit approval, pricing, security and disbursement are determined by the lender.",
      },
    ],
  },
  "startup-india": {
    name: "Startup India & DPIIT Recognition",
    title: "Startup India DPIIT Recognition Support | Euroasia",
    description:
      "Startup India and DPIIT recognition support for eligible startups, including eligibility review, business description, document preparation and application assistance.",
    faqs: [
      {
        question: "Who can seek DPIIT startup recognition?",
        answer:
          "Eligibility depends on the current Startup India criteria for entity type, age, turnover and innovation/scalability. Applicants should verify the latest criteria on the official Startup India/NSWS portal before filing.",
      },
      {
        question: "Is Angel Tax exemption still a Startup India benefit?",
        answer:
          "The former Section 56(2)(viib) angel-tax provisions were removed effective 1 April 2025.",
      },
    ],
  },
  "80-iac": {
    name: "80-IAC Tax Exemption",
    title: "80-IAC Startup Tax Exemption Support | Euroasia",
    description:
      "80-IAC tax-exemption application support for eligible DPIIT-recognized startups, including eligibility review, documentation and application preparation.",
    faqs: [
      {
        question: "What does Section 80-IAC provide?",
        answer:
          "Eligible startups that obtain the required approval may claim a 100% deduction of profits for three consecutive financial years within the permitted statutory window, subject to current law and eligibility conditions.",
      },
      {
        question: "Does DPIIT recognition automatically give 80-IAC tax exemption?",
        answer:
          "No. DPIIT recognition and 80-IAC tax exemption are separate steps. A recognized startup must satisfy the applicable conditions and obtain the required approval before claiming the deduction.",
      },
    ],
  },
  "tender-assistance": {
    name: "Tender & Government Liaison",
    title: "GeM Registration & Government Tender Consulting | Euroasia",
    description:
      "Government tender and GeM support for businesses, including portal registration, tender search, bid documentation, compliance review and submission assistance.",
    faqs: [
      {
        question: "What tender support does Euroasia provide?",
        answer:
          "Support can include GeM and e-procurement registration, tender identification, document preparation, compliance checks, technical-bid assistance and submission coordination.",
      },
      {
        question: "Can a consultant guarantee that a tender will be won?",
        answer:
          "No. Tender award depends on the procurement rules, eligibility, bid evaluation, competition, pricing and the procuring authority. Consulting support should never be presented as a guaranteed award.",
      },
    ],
  },
  "business-certifications": {
    name: "Business Certifications",
    title: "Business Certification & Registration Support India | Euroasia",
    description:
      "Business certification and registration support for Udyam, ZED, IEC, Startup India and other applicable registrations, with documentation and application assistance.",
    faqs: [
      {
        question: "Which certifications should a business obtain?",
        answer:
          "The right registrations or certifications depend on the entity, industry, products, market, tender requirements and growth plans. A business should obtain only credentials that are applicable to its activities and objectives.",
      },
      {
        question: "Does Euroasia issue government certificates itself?",
        answer:
          "No. Euroasia is an independent consultant. Certificates and registrations are issued by the relevant government authority, portal, accreditation or certification body.",
      },
    ],
  },
  "compliance-legal": {
    name: "Company Compliance & Legal Advisory",
    title: "Company Registration & Compliance Services | Euroasia",
    description:
      "Company formation and compliance support for private limited companies, LLPs and other businesses, including ROC filings, director KYC and corporate documentation.",
    faqs: [
      {
        question: "What does company compliance support include?",
        answer:
          "Depending on the entity, support can include incorporation documentation, annual ROC filings, director KYC, statutory records, corporate changes and compliance-calendar assistance.",
      },
      {
        question: "Is this a substitute for legal or tax advice?",
        answer:
          "The appropriate professional review depends on the matter. Legal, tax and regulated professional work should be handled or reviewed by appropriately qualified professionals where required.",
      },
    ],
  },
  "digital-marketing": {
    name: "Digital Marketing & Web",
    title: "SEO, Digital Marketing & Website Services Ahmedabad | Euroasia",
    description:
      "Website development, SEO, PPC, social media, content and digital marketing support for businesses seeking stronger online visibility and lead generation.",
    faqs: [
      {
        question: "What is included in SEO support?",
        answer:
          "SEO can include keyword research, technical review, on-page optimization, content planning, local SEO, internal linking and performance measurement based on the agreed scope.",
      },
      {
        question: "Can SEO rankings or ROI be guaranteed?",
        answer:
          "No. Search rankings and marketing ROI depend on competition, website quality, budget, market conditions and platform changes. Use measured targets rather than guaranteed ranking or ROI claims.",
      },
    ],
  },
};

// Q&As shown in the page's existing FAQ accordion (must stay visible to match the FAQPage schema).
export function seoFaqs(slug) {
  return serviceSeo[slug].faqs;
}

export function serviceMetadata(slug) {
  const { title, description } = serviceSeo[slug];
  const path = `/services/${slug}`;

  return {
    title: { absolute: title },
    description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: "Euroasia",
      title,
      description,
      url: path,
      locale: "en_IN",
    },
  };
}

export function serviceJsonLd(slug) {
  const { name, description, faqs } = serviceSeo[slug];
  const url = `${SITE_URL}/services/${slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        url,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}
