import PageHero from "@/components/shared/PageHero";
import { FiMail } from "react-icons/fi";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Euroasia Aquatic Private Limited. Learn how we collect, use, store, and safeguard your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none text-[1.0625rem]">
            <p className="text-text-muted leading-relaxed mb-8">
              Euroasia Aquatic Private Limited, operating as Euroasia Business Solutions, 
              is committed to protecting the privacy and confidentiality of all users accessing 
              www.euroasias.com. This Privacy Policy explains how we collect, use, store, and 
              safeguard your information.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">1. Purpose</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Euroasia Business Solutions empowers startups, entrepreneurs, MSMEs, and established 
              companies by providing consultancy, certification, compliance, tender, and advisory 
              services. We are committed to handling all personal and business information with 
              transparency, responsibility, and due care.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">2. Applicability</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              This Privacy Policy applies only to online activities conducted through our website 
              and is valid for visitors with respect to information shared and/or collected by 
              Euroasia Business Solutions.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">3. Information Collected</h2>
            
            <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mt-8 mb-3">3.1 Information You Provide</h3>
            <ul className="list-disc marker:text-accent-text pl-6 text-text-muted space-y-2 mb-6">
              <li>Name, email address, phone number</li>
              <li>Organization and business details</li>
              <li>Documents submitted for registrations or compliance</li>
              <li>Survey responses, inquiries, and communication records</li>
            </ul>

            <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mt-8 mb-3">3.2 Automatically Collected Information</h3>
            <ul className="list-disc marker:text-accent-text pl-6 text-text-muted space-y-2 mb-6">
              <li>IP address and browser type</li>
              <li>Device, operating system, and network information</li>
              <li>Pages visited before and after accessing our website</li>
              <li>Date, time, and usage statistics</li>
            </ul>

            <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mt-8 mb-3">3.3 Additional Information During Services</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              During service delivery, we may additionally collect address details, service usage 
              records, payment transaction references, and records of communications or agreements. 
              Providing information is voluntary; however, certain services require minimum 
              information to proceed effectively.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">4. How We Use Your Information</h2>
            <ul className="list-disc marker:text-accent-text pl-6 text-text-muted space-y-2 mb-6">
              <li>To communicate regarding inquiries, applications, and service updates</li>
              <li>To process service requests and documentation</li>
              <li>To provide technical and customer support</li>
              <li>To enforce legal terms and policies</li>
              <li>To conduct internal analysis and research</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
            <p className="text-text-muted leading-relaxed mb-6">
              The legal basis for processing personal data is your explicit consent. You may 
              withdraw consent at any time by emailing info@euroasias.com.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">5. Cookies</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Our website uses cookies to enhance user experience, store preferences, and collect 
              anonymized analytics data. You may disable cookies via your browser settings, though 
              certain features may not function correctly.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">6. Security & Data Processing</h2>
            
            <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mt-8 mb-3">6.1 Data Security</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              We implement physical, electronic, and administrative safeguards to protect personal 
              and business data from unauthorized access, alteration, disclosure, or misuse.
            </p>

            <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mt-8 mb-3">6.2 Data Retention</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Information is retained only for the duration necessary to provide services, or as 
              required by legal, regulatory, audit, or contractual obligations.
            </p>

            <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mt-8 mb-3">6.3 Limitation of Liability</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              While reasonable security measures are implemented, no method of electronic data 
              transmission or storage is completely secure. Euroasia shall not be liable for 
              breaches beyond reasonable control, except in cases of proven gross negligence.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">7. Acceptance of Policy</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              By accessing, browsing, or using our website, submitting information, or availing 
              our services, you acknowledge and accept this Privacy Policy. If you do not agree, 
              please discontinue use of the website.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">8. Policy Updates</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              We may update this Privacy Policy periodically. Continued use of the website after 
              changes are published constitutes acceptance of the updated policy.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">9. Third-Party Links</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible for 
              the content, privacy policies, or practices of such external websites.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">10. Contact Us</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              For questions or concerns regarding this Privacy Policy, contact us at:
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 border-2 border-primary-navy rounded-xl text-primary-navy shadow-hard-sm">
              <FiMail aria-hidden="true" className="w-5 h-5 text-accent-text" />
              <a href="mailto:info@euroasias.com" className="font-ledger font-semibold hover:text-accent-text transition-colors">
                info@euroasias.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
