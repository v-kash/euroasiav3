"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const certifications = [
  {
    title: "Startup India Registration",
    category: "Certification",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    href: "/services/business-certifications",
  },
  {
    title: "Tax Exemption Certificate",
    category: "Tax Services",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    href: "/services/tax-exemption",
  },
  {
    title: "ZED Certification",
    category: "Quality",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80",
    href: "/services/business-certifications",
  },
  {
    title: "GEM Registration",
    category: "Government",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    href: "/services/tender-assistance",
  },
  {
    title: "MSME Udyam Certificate",
    category: "Certification",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    href: "/services/business-certifications",
  },
  {
    title: "Digital Transformation",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    href: "/services/digital-marketing",
  },
];

export default function CertificationsShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="CERTIFICATIONS"
          title="Trusted Certification Support for MSMEs"
          description="We help businesses obtain essential certifications and registrations to unlock growth opportunities."
        />

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="flex-shrink-0 w-72 snap-center"
                variants={shouldReduceMotion ? {} : cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <Link href={cert.href} className="group block">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="288px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2 py-1 bg-accent text-white text-xs font-semibold rounded mb-2">
                        {cert.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
