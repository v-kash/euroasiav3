"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiExternalLink, FiMapPin } from "react-icons/fi";

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
    address: "106,107 1st Floor, Athena Avenue, 105, Sarkhej - Gandhinagar Hwy, nr. Jaguar Showroom, Gota, Ahmedabad, Gujarat 382481, India",
    phone: "+91-9898921290",
    email: "info@euroasias.com",
    mapUrl: "https://www.google.com/maps/place/EUROASIA+AQUATIC+PRIVATE+LIMITED/@23.109681,72.5375612,1061m/data=!3m2!1e3!4b1!4m6!3m5!1s0x44bab6b89e296a55:0xa926f5b90801b247!8m2!3d23.109681!4d72.5375612!16s%2Fg%2F11yq4sgjj2?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29357.248948465494!2d72.537561!3d23.109681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44bab6b89e296a55%3A0xa926f5b90801b247!2sEUROASIA%20AQUATIC%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1792562169245!5m2!1sen!2sin",
    Icon: AhmedabadIcon,
    typeColor: "bg-accent text-primary-navy",
  },
  {
    id: 2,
    city: "PUNE",
    state: "Maharashtra",
    type: "Branch Office",
    address: "201, D Gold House, Dnyaneshwar Paduka Chowk, Fergusson College Rd, behind Bharat Petrol Pump, Shivajinagar, Pune, Maharashtra 411005",
    phone: "+91-9898921290",
    email: "pune@euroasias.com",
    mapUrl: "https://www.google.com/maps/place/EUROASIA+AQUATIC+PRIVATE+LIMITED+-+PUNE/@18.5273393,73.8428431,1094m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2c1a4ecc5d497:0xa6cf2e5a9522527f!8m2!3d18.5273393!4d73.8428431!16s%2Fg%2F11zh6qbvb5?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
    mapEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0344704691665!2d73.84026817600683!3d18.52734436896578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a4ecc5d497%3A0xa6cf2e5a9522527f!2sEUROASIA%20AQUATIC%20PRIVATE%20LIMITED%20-%20PUNE!5e0!3m2!1sen!2sin!4v1792562310965!5m2!1sen!2sin",
    Icon: PuneIcon,
    typeColor: "bg-primary-navy text-white",
  },
];

export default function OfficesSection({ variant = "default" }) {
  const isCompact = variant === "compact";

  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!isCompact && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8"
          >
            <div className="max-w-2xl">
              <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
                Our Presence
              </span>
              <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mt-3">
                Visit Our Offices
              </h2>
            </div>
            <p className="text-text-muted text-lg max-w-md">
              We have strategically located offices to serve you better. 
              Visit us for a free consultation on government schemes and business funding.
            </p>
          </motion.div>
        )}

        {isCompact && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl tracking-[-0.03em]">
              Our Office Locations
            </h2>
          </motion.div>
        )}

        {/* Office Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col bg-white border border-[#D5DDE9] rounded-2xl overflow-hidden hover:border-primary-navy transition-colors duration-200"
            >
              <div className="flex flex-col flex-1 p-5 md:p-6">
                {/* Office Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex-shrink-0">
                      <office.Icon />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-primary-navy text-2xl tracking-[-0.02em] leading-tight">
                        {office.city}
                      </h3>
                      <span className="text-sm text-text-muted">{office.state}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full font-ledger text-[11px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap ${office.typeColor}`}>
                    {office.type}
                  </span>
                </div>

                {/* Address */}
                <div className="bg-light-bg rounded-xl p-4 mb-5 border-l-4 border-accent">
                  <p className="text-text-dark text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 mb-5">
                  <a 
                    href={`tel:${office.phone.replace(/-/g, '')}`}
                    className="flex items-center gap-3 text-primary-navy font-medium hover:text-accent-text transition-colors"
                  >
                    <FiPhone aria-hidden="true" className="w-5 h-5 text-accent-text" />
                    <span className="font-ledger text-sm">{office.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-primary-navy font-medium hover:text-accent-text transition-colors"
                  >
                    <FiMail aria-hidden="true" className="w-5 h-5 text-accent-text" />
                    <span className="font-ledger text-sm">{office.email}</span>
                  </a>
                </div>

                {/* Map: embedded on the contact page, a directions button on the home page */}
                {isCompact ? (
                  <div className="mt-auto rounded-xl overflow-hidden h-40 relative border-2 border-primary-navy">
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
                      className="absolute bottom-2 left-2 inline-flex items-center gap-1 px-3 py-1.5 bg-white border-2 border-primary-navy text-primary-navy text-xs font-bold rounded-lg hover:bg-accent transition-colors"
                    >
                      Maps <FiExternalLink aria-hidden="true" className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-5 border-2 border-primary-navy text-primary-navy font-semibold text-sm rounded-xl hover:bg-primary-navy hover:text-white transition-colors"
                  >
                    <FiMapPin aria-hidden="true" className="w-4 h-4" />
                    Get Directions
                    <FiExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {!isCompact && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-[#D5DDE9] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left"
          >
            <p className="text-text-muted">
              Can&apos;t visit us? No problem! We offer <span className="text-primary-navy font-semibold">online consultations</span> across India.
            </p>
            <a
              href="tel:+919898921290"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-primary-navy font-bold rounded-xl shadow-hard-sm hover:bg-accent-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 flex-shrink-0"
            >
              <FiPhone aria-hidden="true" className="w-4 h-4" />
              Schedule a Call
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
