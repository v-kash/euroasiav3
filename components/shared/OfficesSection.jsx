"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiExternalLink } from "react-icons/fi";

// Ahmedabad Icon - Sabarmati Ashram / Kite inspired
const AhmedabadIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="32" r="30" fill="url(#ahm-gradient)" />
    <path d="M32 12L44 28H20L32 12Z" fill="white" opacity="0.9"/>
    <path d="M32 52L20 36H44L32 52Z" fill="white" opacity="0.7"/>
    <rect x="28" y="26" width="8" height="12" rx="1" fill="white"/>
    <circle cx="32" cy="32" r="3" fill="#002152"/>
    <defs>
      <linearGradient id="ahm-gradient" x1="0" y1="0" x2="64" y2="64">
        <stop stopColor="#82c8e5"/>
        <stop offset="1" stopColor="#002152"/>
      </linearGradient>
    </defs>
  </svg>
);

// Pune Icon - Shaniwar Wada inspired
const PuneIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="32" r="30" fill="url(#pune-gradient)" />
    <path d="M16 44V28L22 24V44H16Z" fill="white" opacity="0.9"/>
    <path d="M26 44V22L32 18L38 22V44H26Z" fill="white"/>
    <path d="M42 44V28L48 24V44H42Z" fill="white" opacity="0.9"/>
    <path d="M20 20L32 12L44 20" stroke="white" strokeWidth="2" fill="none"/>
    <rect x="29" y="32" width="6" height="12" rx="1" fill="#002152"/>
    <defs>
      <linearGradient id="pune-gradient" x1="0" y1="0" x2="64" y2="64">
        <stop stopColor="#002152"/>
        <stop offset="1" stopColor="#82c8e5"/>
      </linearGradient>
    </defs>
  </svg>
);

const offices = [
  {
    id: 1,
    city: "AHMEDABAD",
    state: "Gujarat",
    type: "Head Office",
    address: "105–107, Athena Avenue, Gota, Ahmedabad, Gujarat – 382481",
    phone: "+91-9898921290",
    email: "info@euroasias.com",
    mapUrl: "https://maps.google.com/?q=105-107,+Athena+Avenue,+Gota,+Ahmedabad,+Gujarat+382481",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5!2d72.5!3d23.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA2JzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    Icon: AhmedabadIcon,
    typeColor: "bg-accent text-white",
  },
  {
    id: 2,
    city: "PUNE",
    state: "Maharashtra",
    type: "Branch Office",
    address: "201, D Gold House, Dnyaneshwar Paduka Chowk, Fergusson College Rd, behind Bharat Petrol Pump, Shivajinagar, Pune, Maharashtra 411005",
    phone: "+91-9898921290",
    email: "pune@euroasias.com",
    mapUrl: "https://maps.google.com/?q=D+Gold+House,+Fergusson+College+Road,+Shivajinagar,+Pune,+Maharashtra+411005",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.84!3d18.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEyLjAiTiA3M8KwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    Icon: PuneIcon,
    typeColor: "bg-primary-navy text-white",
  },
];

export default function OfficesSection({ variant = "default" }) {
  const isCompact = variant === "compact";

  return (
    <section className={`${isCompact ? "py-12" : "py-20"} bg-light-bg overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!isCompact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-navy/10 text-primary-navy text-sm font-semibold rounded-full mb-4">
              Our Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Visit Our Offices
            </h2>
            <p className="text-text-gray max-w-2xl mx-auto">
              We have strategically located offices to serve you better. 
              Visit us for a free consultation on government schemes and business funding.
            </p>
          </motion.div>
        )}

        {isCompact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-primary-navy">
              Our Office Locations
            </h2>
          </motion.div>
        )}

        {/* Office Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-accent"
            >
              <div className="p-6 md:p-8">
                {/* Office Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex-shrink-0">
                      <office.Icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-navy tracking-wide">
                        {office.city}
                      </h3>
                      <span className="text-sm text-text-gray">{office.state}</span>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${office.typeColor}`}>
                    {office.type}
                  </span>
                </div>

                {/* Address */}
                <div className="bg-light-bg rounded-xl p-4 mb-6 border-l-4 border-accent">
                  <p className="text-text-dark text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <a 
                    href={`tel:${office.phone.replace(/-/g, '')}`}
                    className="flex items-center gap-3 text-text-gray hover:text-primary-navy transition-colors"
                  >
                    <FiPhone className="w-5 h-5 text-accent" />
                    <span className="text-sm">{office.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-text-gray hover:text-primary-navy transition-colors"
                  >
                    <FiMail className="w-5 h-5 text-accent" />
                    <span className="text-sm">{office.email}</span>
                  </a>
                </div>

                {/* Map Preview */}
                <div className="rounded-xl overflow-hidden h-36 relative border border-gray-200">
                  <iframe
                    src={office.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.city} Office Location`}
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 left-2 inline-flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary-navy text-xs font-medium rounded-lg hover:bg-white transition-colors shadow-sm"
                  >
                    Maps <FiExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {!isCompact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-text-gray mb-4">
              Can&apos;t visit us? No problem! We offer <span className="text-primary-navy font-medium">online consultations</span> across India.
            </p>
            <a
              href="tel:+919898921290"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-primary-navy transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              Schedule a Call
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
