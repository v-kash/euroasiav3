import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import StatsSection from "@/components/home/StatsSection";
import TeamSection from "@/components/home/TeamSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Euroasia Aquatic Pvt Ltd — your trusted partner for business certifications, compliance, and growth solutions in Ahmedabad, Gujarat.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Client-Centric Approach",
    description:
      "We put our clients first, understanding their unique needs and delivering tailored solutions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity & Transparency",
    description:
      "We believe in honest communication, clear pricing, and ethical business practices.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Excellence in Delivery",
    description:
      "We strive for excellence in every project, ensuring quality outcomes and timely delivery.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "We stay updated with latest regulations and best practices to serve you better.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Started with a vision to simplify business compliance.",
  },
  {
    year: "2022",
    title: "Expanded Services",
    description: "Added digital marketing and tender assistance services.",
  },
  {
    year: "2023",
    title: "100+ Clients",
    description: "Crossed 100 satisfied clients across Gujarat.",
  },
  {
    year: "2024",
    title: "Team Growth",
    description: "Expanded to 55+ team members serving diverse industries.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Euroasia"
        description="Your trusted partner for business certifications, compliance, and growth solutions since 2021."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Euroasia team"
                width={600}
                height={450}
                className="rounded-2xl object-cover shadow-xl"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-navy/10 rounded-2xl -z-10" />
            </div>
            <div>
              <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-h2 font-bold text-primary-navy mb-6">
                Making Compliance Effortless Since 2021
              </h2>
              <div className="space-y-4 text-text-muted">
                <p>
                  Euroasia Aquatic Pvt Ltd was founded with a simple mission: to
                  make business compliance effortless for entrepreneurs and
                  companies in India. We recognized that navigating government
                  regulations, obtaining certifications, and maintaining
                  compliance was a significant challenge for businesses of all
                  sizes.
                </p>
                <p>
                  Based in Ahmedabad, Gujarat, we have grown from a small team
                  to a comprehensive business consulting firm serving clients
                  across India. Our expertise spans business certifications,
                  regulatory compliance, government tenders, digital marketing,
                  and strategic advisory services.
                </p>
                <p>
                  With over 150+ products and a 99% client satisfaction rate, we
                  continue to expand our services while maintaining the
                  personalized attention that sets us apart. Our team of 55+
                  professionals brings diverse expertise to help your business
                  succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary-navy rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-silver-grey">
                To empower businesses by simplifying compliance, unlocking
                growth opportunities, and providing expert guidance that enables
                our clients to focus on what they do best — running and growing
                their business.
              </p>
            </div>
            <div className="bg-light-bg rounded-2xl p-8">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                Our Vision
              </h3>
              <p className="text-text-muted">
                To be the most trusted business consulting partner in India,
                known for our expertise, integrity, and commitment to client
                success. We aim to be the first choice for businesses seeking
                compliance and growth solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-3xl md:text-h2 font-bold text-primary-navy">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-primary-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-navy">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-label uppercase tracking-widest text-accent-text font-semibold mb-4">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-h2 font-bold text-primary-navy">
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-color -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <span className="text-accent-text font-bold text-lg">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold text-primary-navy">
                      {milestone.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-navy rounded-full border-4 border-white" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
