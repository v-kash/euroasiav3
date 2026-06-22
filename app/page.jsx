import HeroSection from "@/components/home/HeroSection";
import SchemeMarquee from "@/components/home/SchemeMarquee";
import ImpactStats from "@/components/home/ImpactStats";
import ServicesSection from "@/components/home/ServicesSection";
import EligibilityChecker from "@/components/home/EligibilityChecker";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SchemeSpotlight from "@/components/home/SchemeSpotlight";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import OfficesSection from "@/components/shared/OfficesSection";
import BlogPreview from "@/components/home/BlogPreview";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "MSME Consulting & Government Scheme Processing | Euroasia",
  description:
    "Expert consulting for PMEGP, MUDRA, Startup India, ZED, 80-IAC. We process government schemes worth ₹10 Lakh – ₹1 Crore for your MSME. 99% success rate. Pan-India services.",
  keywords:
    "PMEGP, MUDRA loan, Startup India, MSME registration, Udyam, ZED certification, 80-IAC, government schemes, business consulting, CGTMSE",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SchemeMarquee />
      <ImpactStats />
      <ServicesSection />
      <EligibilityChecker />
      <WhyChooseUs />
      <SchemeSpotlight />
      <TestimonialsSection />
      <ProcessSection />
      <OfficesSection />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
