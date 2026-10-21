"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import SectionHeader from "@/components/shared/SectionHeader";

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const team = [
  {
    name: "Shubham Zinzuwadiya",
    role: "Chief Financial Officer",
    image:
      "https://ui-avatars.com/api/?name=Shubham+Zinzuwadiya&background=1A2E5A&color=fff&size=128",
    linkedin: "#",
  },
  {
    name: "Nisarg Shukla",
    role: "Head of Operations",
    image:
      "https://ui-avatars.com/api/?name=Nisarg+Shukla&background=1A2E5A&color=fff&size=128",
    linkedin: "#",
  },
  {
    name: "Archana Parmar",
    role: "Tender Specialist",
    image:
      "https://ui-avatars.com/api/?name=Archana+Parmar&background=1A2E5A&color=fff&size=128",
    linkedin: "#",
  },
  {
    name: "Rajvi Pandya",
    role: "Head of Human Resources",
    image:
      "https://ui-avatars.com/api/?name=Rajvi+Pandya&background=1A2E5A&color=fff&size=128",
    linkedin: "#",
  },
];

export default function TeamSection() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.08,
      },
    }),
  };

  return (
    <section id="team" className="py-12 lg:py-16 bg-white border-t border-[#D5DDE9] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="OUR TEAM"
          title="Get Consulting From Our Best Consultants"
          description="Our experienced team is dedicated to helping your business succeed."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              variants={shouldReduceMotion ? noMotion : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
            >
              <div className="h-full flex flex-col items-center text-center bg-light-bg border border-[#D5DDE9] rounded-2xl p-6 group-hover:border-primary-navy transition-colors">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary-navy mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-primary-navy text-lg tracking-[-0.02em] mb-1">
                  {member.name}
                </h3>
                <p className="font-ledger text-xs uppercase tracking-[0.1em] text-text-muted">
                  {member.role}
                </p>

                {/* LinkedIn — shown only once a real profile URL is set */}
                {member.linkedin && member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-11 h-11 rounded-full border-2 border-primary-navy flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FiLinkedin aria-hidden="true" className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
