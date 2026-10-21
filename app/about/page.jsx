import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import StatsSection from "@/components/home/StatsSection";
import TeamSection from "@/components/home/TeamSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "About Us - Your Trusted MSME Funding Consultancy",
  description:
    "Euroasia Aquatic Pvt Ltd helps MSMEs access ₹10L-₹1Cr government grants. 99% success rate, 500+ businesses funded, ₹100Cr+ disbursed. Expert PMEGP, MUDRA, Startup India consultants in Ahmedabad.",
  keywords: [
    "MSME consultancy",
    "government grants consultant",
    "PMEGP consultant Ahmedabad",
    "business funding expert",
    "startup consultancy Gujarat",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Euroasia - MSME Funding & Government Grants Experts",
    description:
      "99% success rate in government funding. 500+ businesses funded with ₹100Cr+ in grants.",
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

const eyebrow =
  "font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text";
const sectionTitle =
  "font-display font-extrabold text-primary-navy text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em]";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Euroasia"
        description="Your trusted partner for business certifications, compliance, and growth solutions since 2021."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* About Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="w-full max-w-xl mx-auto lg:max-w-none">
              <div className="bg-white border-2 border-primary-navy rounded-2xl shadow-hard overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Euroasia team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <span className={eyebrow}>OUR STORY</span>
              <h2 className={`${sectionTitle} mt-4 mb-6`}>
                Making Compliance Effortless Since 2021
              </h2>
              <div className="space-y-4 text-text-muted text-lg leading-relaxed">
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
      <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-primary-navy rounded-2xl p-8 lg:p-10 text-white">
              <div className="w-14 h-14 border-2 border-accent rounded-xl flex items-center justify-center text-accent mb-6">
                <svg
                  aria-hidden="true"
                  className="w-7 h-7"
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
              <h3 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.03em] mb-4">
                Our Mission
              </h3>
              <p className="text-white/75 text-lg leading-relaxed">
                To empower businesses by simplifying compliance, unlocking
                growth opportunities, and providing expert guidance that enables
                our clients to focus on what they do best — running and growing
                their business.
              </p>
            </div>
            <div className="bg-white border-2 border-primary-navy rounded-2xl shadow-hard p-8 lg:p-10">
              <div className="w-14 h-14 border-2 border-primary-navy rounded-xl flex items-center justify-center text-accent-text mb-6">
                <svg
                  aria-hidden="true"
                  className="w-7 h-7"
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
              <h3 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl tracking-[-0.03em] mb-4">
                Our Vision
              </h3>
              <p className="text-text-muted text-lg leading-relaxed">
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
      <section className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className={eyebrow}>OUR VALUES</span>
            <h2 className={`${sectionTitle} mt-4`}>What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {values.map((value, index) => (
              <div key={index} className="border-t-2 border-primary-navy pt-6">
                <div className="w-12 h-12 rounded-xl border-2 border-primary-navy flex items-center justify-center text-accent-text mb-5 [&>svg]:w-6 [&>svg]:h-6">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <span className={eyebrow}>OUR JOURNEY</span>
            <h2 className={`${sectionTitle} mt-4`}>Milestones</h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {milestones.map((milestone, index) => (
              <li key={index} className="flex flex-col">
                <span className="font-display font-extrabold text-accent-text text-6xl lg:text-7xl leading-none tracking-[-0.05em] mb-5">
                  {milestone.year}
                </span>
                <div aria-hidden="true" className="relative h-0.5 bg-primary-navy mb-5">
                  <span className="absolute -top-[5px] left-0 w-3 h-3 rounded-[3px] bg-accent border-2 border-primary-navy" />
                </div>
                <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] mb-2">
                  {milestone.title}
                </h3>
                <p className="text-text-muted">{milestone.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
