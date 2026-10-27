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
  mudra: {
    name: "MUDRA Loan Assistance",
    title: "MUDRA Loan Application Support: Shishu to Tarun Plus | Euroasia",
    description:
      "MUDRA loan support for micro enterprises: category assessment across Shishu, Kishore, Tarun and Tarun Plus (up to ₹20 lakh), business plan preparation and bank application assistance.",
    faqs: [
      {
        question: "Can I apply for a MUDRA loan online myself?",
        answer:
          "Yes. MUDRA loans are given by banks, NBFCs and MFIs, and applicants can apply directly with a lender or through official portals such as Udyamimitra or JanSamarth. Euroasia can help prepare the business plan and documents if you want support.",
      },
      {
        question: "Does Euroasia guarantee MUDRA loan approval?",
        answer:
          "No. Euroasia can help with category assessment, business plan and documentation, but loan sanction, amount and terms are decided by the lending bank or institution.",
      },
    ],
  },
  "msme-registration": {
    name: "MSME / Udyam Registration",
    title: "Udyam (MSME) Registration Support & Classification | Euroasia",
    description:
      "Udyam (MSME) registration support, including enterprise classification under the revised investment and turnover limits, NIC code selection and help accessing MSME benefits.",
    faqs: [
      {
        question: "Is there a government fee for Udyam registration?",
        answer:
          "No. Udyam registration on the official Udyam portal is free. Any fee charged by a consultant is for assistance, not a government charge.",
      },
      {
        question: "Does Euroasia issue the Udyam certificate?",
        answer:
          "No. The Udyam Registration Certificate is issued by the Ministry of MSME through the official Udyam portal. Euroasia assists with correct classification and filing.",
      },
    ],
  },
  "zed-certification": {
    name: "ZED Certification Support",
    title: "ZED Certification Support for MSMEs: Bronze, Silver, Gold | Euroasia",
    description:
      "ZED (Zero Defect Zero Effect) certification support for MSMEs, including level selection, gap assessment, documentation and preparation for Bronze, Silver and Gold assessment.",
    faqs: [
      {
        question: "Who issues ZED certification?",
        answer:
          "ZED certification is issued under the Ministry of MSME's ZED scheme after assessment by the scheme's designated agencies. Euroasia is an independent consultant and does not issue the certificate.",
      },
      {
        question: "Is ZED certification guaranteed after applying?",
        answer:
          "No. Certification depends on the enterprise meeting the parameters for the chosen level during assessment. Euroasia can help with gap analysis and preparation.",
      },
    ],
  },
  "gem-registration": {
    name: "GeM Portal Registration",
    title: "GeM Seller Registration & Catalogue Support | Euroasia",
    description:
      "GeM (Government e-Marketplace) seller registration support, including profile setup, vendor assessment, product cataloguing and guidance on MSME benefits in government procurement.",
    faqs: [
      {
        question: "Can I register on GeM without a consultant?",
        answer:
          "Yes. Sellers can register directly on the official GeM portal. A consultant can help with profile setup, cataloguing and bid documentation if you want support.",
      },
      {
        question: "Does GeM registration guarantee government orders?",
        answer:
          "No. Orders depend on buyer requirements, pricing, product listing quality and procurement rules. Registration only makes you eligible to sell on the portal.",
      },
    ],
  },
  "gst-compliance": {
    name: "GST & Tax Compliance",
    title: "GST Registration & Return Filing Services | Euroasia",
    description:
      "GST registration, return filing (GSTR-1, GSTR-3B, GSTR-9), e-invoicing setup, notice handling and tax-compliance support for MSMEs and startups.",
    faqs: [
      {
        question: "What GST compliance support does Euroasia provide?",
        answer:
          "Support can include GST registration and amendments, periodic and annual return filing, e-invoicing setup, input tax credit reconciliation and replies to GST notices, based on the agreed scope.",
      },
      {
        question: "Is this a substitute for advice from a Chartered Accountant?",
        answer:
          "Complex tax positions, assessments and litigation should be handled or reviewed by an appropriately qualified professional, such as a Chartered Accountant or tax advocate.",
      },
    ],
  },
  "iec-registration": {
    name: "IEC Code Registration",
    title: "IEC Code Registration Support for Importers & Exporters | Euroasia",
    description:
      "Import Export Code (IEC) registration support with DGFT, including application filing, document preparation and help with updating IEC details.",
    faqs: [
      {
        question: "Who issues the IEC?",
        answer:
          "The Import Export Code is issued by the Directorate General of Foreign Trade (DGFT) through its official portal. Euroasia assists with the application and does not issue the code.",
      },
      {
        question: "Do I need to update my IEC regularly?",
        answer:
          "Yes. Under current DGFT rules, IEC holders should review and update their IEC details on the DGFT portal annually, even if nothing has changed, to keep the IEC active.",
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
