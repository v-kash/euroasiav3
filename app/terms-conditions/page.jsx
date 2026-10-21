import PageHero from "@/components/shared/PageHero";
import { FiMail } from "react-icons/fi";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using Euroasia Aquatic Business Solutions website and services.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none text-[1.0625rem]">
            <p className="text-text-muted leading-relaxed mb-8">
              Welcome to Euroasia Aquatic Business Solutions (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, 
              &ldquo;our&rdquo;, or &ldquo;us&rdquo;). These Terms & Conditions govern your use of our 
              website and services. By accessing or using our website or purchasing our services, 
              you agree to be bound by these Terms.
            </p>
            <p className="text-text-muted leading-relaxed mb-8 font-medium">
              If you do not agree with these Terms, please do not use our website or services.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">1. Nature of Services</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Company provides business consultancy, documentation support, marketing and designing 
              work, compliance assistance, licensing support, certification assistance, and related 
              advisory services.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              We strive to offer guidance tailored to modern enterprises. However:
            </p>
            <ul className="list-disc marker:text-accent-text pl-6 text-text-muted space-y-2 mb-6">
              <li>Company is a consultancy service provider only</li>
              <li>We are not affiliated with any Government or Non-Government body</li>
              <li>All approvals are subject to respective authority rules and client responsibility</li>
            </ul>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">2. Third-Party Services</h2>
            <ul className="list-disc marker:text-accent-text pl-6 text-text-muted space-y-2 mb-6">
              <li>Some services may involve third-party partners</li>
              <li>They may contact you directly via email or phone</li>
              <li>Company is not liable for third-party services or practices</li>
            </ul>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">3. Intellectual Property Rights</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              All content including documents, text, graphics, logos, and software are owned by the 
              Company or licensors.
            </p>
            <p className="text-text-muted leading-relaxed mb-6 font-medium">
              Unauthorized copying, resale, or redistribution is strictly prohibited.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">4. Limitation of Liability</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Company shall not be liable for indirect or consequential damages including loss of 
              profit, data, or goodwill.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Liability is limited to the amount paid for the specific service.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">5. Indemnification</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              You agree to indemnify and hold harmless the Company from any claims, damages, or 
              liabilities arising from your use of services or violation of these Terms.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">6. Refund & Cancellation Policy</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Refund eligibility depends strictly on the Service Agreement or MOU.
            </p>
            <ul className="list-disc marker:text-accent-text pl-6 text-text-muted space-y-2 mb-4">
              <li>Services may be refundable or non-refundable as per agreement</li>
              <li>No refund beyond agreed terms will be entertained</li>
            </ul>
            <p className="text-text-muted leading-relaxed mb-4">
              <strong>Refund Timeframe:</strong> Up to 45 working days after completion of required formalities.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              <strong>Refund Process:</strong> Confirmation via email and submission of bank details is required.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">7. Delivery of Services</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Services may be delivered electronically or physically. Shipping charges may apply.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">8. Force Majeure</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Company is not liable for delays caused by events beyond control such as natural 
              disasters, strikes, or government actions.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">9. Cookies & Data Collection</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              We use cookies to enhance user experience and analyze traffic. Disabling cookies may 
              affect functionality.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">10. Reviews & User Content</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              By submitting content, you grant us rights to use it for promotional purposes.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">11. Dispute Resolution</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Disputes shall be resolved through arbitration under the Indian Council of Arbitration.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">12. Governing Law</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              These Terms are governed by Indian law with jurisdiction in Ahmedabad, Gujarat.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">13. Acknowledgement</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              By using our services, you confirm that you are 18+ and agree to these Terms.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">14. Grievance Resolution</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              For queries, email us with company name, service details, and contact information.
            </p>

            <h2 className="font-display font-extrabold text-primary-navy text-2xl md:text-3xl tracking-[-0.03em] leading-tight mt-12 mb-4 pt-6 border-t-2 border-primary-navy">15. Contact Us</h2>
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
