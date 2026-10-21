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
      <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <h2 className="font-display font-extrabold text-primary-navy text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em] max-w-2xl">
              Why Check Eligibility First?
            </h2>
            <p className="text-text-muted text-lg max-w-md">
              Not all government schemes are suitable for every business. Our eligibility checker 
              helps you identify the right schemes based on your business type, turnover, and goals — 
              saving you time and increasing your approval chances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            <div className="border-t-2 border-primary-navy pt-6">
              <div className="w-12 h-12 rounded-xl border-2 border-primary-navy flex items-center justify-center text-2xl mb-4">⏱️</div>
              <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-2">Save Time</h3>
              <p className="text-text-muted">
                Know exactly which schemes to apply for instead of wasting time on ineligible ones.
              </p>
            </div>
            <div className="border-t-2 border-primary-navy pt-6">
              <div className="w-12 h-12 rounded-xl border-2 border-primary-navy flex items-center justify-center text-2xl mb-4">✅</div>
              <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-2">Higher Success Rate</h3>
              <p className="text-text-muted">
                Applying to the right schemes dramatically improves your approval chances.
              </p>
            </div>
            <div className="border-t-2 border-primary-navy pt-6">
              <div className="w-12 h-12 rounded-xl border-2 border-primary-navy flex items-center justify-center text-2xl mb-4">💰</div>
              <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-2">Maximize Benefits</h3>
              <p className="text-text-muted">
                Discover schemes you didn&apos;t know about and maximize your funding potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
