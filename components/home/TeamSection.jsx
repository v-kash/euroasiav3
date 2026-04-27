"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import SectionHeader from "@/components/shared/SectionHeader";

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
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
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
          tag="OUR TEAM"
          title="Get Consulting From Our Best Consultants"
          description="Our experienced team is dedicated to helping your business succeed."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group text-center"
              variants={shouldReduceMotion ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary-navy transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-1/2 translate-x-8 w-10 h-10 bg-primary-navy rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-lg font-semibold text-primary-navy mb-1">
                {member.name}
              </h3>
              <p className="text-text-muted text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
