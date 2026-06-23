import PageHero from "@/components/shared/PageHero";
import EligibilityChecker from "@/components/home/EligibilityChecker";

export const metadata = {
  title: "Check Your Eligibility | Government Schemes for MSMEs",
  description:
    "Check your eligibility for government schemes in 60 seconds. Find out which PMEGP, MUDRA, Startup India, ZED, and other schemes your business qualifies for.",
  keywords: [
    "eligibility check",
    "government scheme eligibility",
    "PMEGP eligibility",
    "MUDRA loan eligibility",
    "startup india eligibility",
    "MSME scheme checker",
  ],
  alternates: {
    canonical: "/check-eligibility",
  },
};

export default function CheckEligibilityPage() {
  return (
    <>
      <PageHero
        title="Check Your Eligibility"
        description="Find out which government schemes your business qualifies for — in just 60 seconds"
        breadcrumbs={[{ label: "Check Eligibility" }]}
      />

      <EligibilityChecker />

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-navy mb-4">
            Why Check Eligibility First?
          </h2>
          <p className="text-text-gray mb-8 max-w-2xl mx-auto">
            Not all government schemes are suitable for every business. Our eligibility checker 
            helps you identify the right schemes based on your business type, turnover, and goals — 
            saving you time and increasing your approval chances.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-light-bg rounded-xl">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-semibold text-primary-navy mb-2">Save Time</h3>
              <p className="text-text-gray text-sm">
                Know exactly which schemes to apply for instead of wasting time on ineligible ones.
              </p>
            </div>
            <div className="p-6 bg-light-bg rounded-xl">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-primary-navy mb-2">Higher Success Rate</h3>
              <p className="text-text-gray text-sm">
                Applying to the right schemes dramatically improves your approval chances.
              </p>
            </div>
            <div className="p-6 bg-light-bg rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-primary-navy mb-2">Maximize Benefits</h3>
              <p className="text-text-gray text-sm">
                Discover schemes you didn&apos;t know about and maximize your funding potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
