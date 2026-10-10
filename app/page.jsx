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

const title = "MSME Funding & Government Scheme Consultants India | Euroasia";
const ogImage = "/images/euroasia-og.jpg";

export const metadata = {
  title: { absolute: title },
  description:
    "Euroasia supports MSMEs and startups across India with government schemes, funding documentation, Udyam, DPIIT, certifications, tenders and compliance.",
  keywords:
    "PMEGP, MUDRA loan, Startup India, MSME registration, Udyam, ZED certification, 80-IAC, government schemes, business consulting, CGTMSE",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Euroasia",
    title,
    description:
      "Independent MSME consulting for funding, government schemes, registrations, certifications, tenders and compliance.",
    url: "/",
    locale: "en_IN",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Funding, government scheme, registration, certification, tender and compliance support for Indian businesses.",
    images: [ogImage],
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
