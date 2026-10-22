"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-navy rounded-3xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mb-5">
                Ready to Unlock Government Funding?
              </h2>
              <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto lg:mx-0">
                Join 500+ businesses. Free consultation. No hidden charges. 99%
                success rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl hover:bg-accent-dark transition-colors duration-200"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="https://wa.me/919898921290?text=Hi%2C%20I%20want%20to%20know%20about%20government%20funding%20schemes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary-navy transition-colors duration-200"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us Now
                </a>
              </div>
            </motion.div>

            {/* Right - Funding Ledger */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="border border-white/20 rounded-2xl p-8">
                <p className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-white/60 mb-3">
                  Funding Available
                </p>
                <p className="font-display text-5xl font-extrabold text-white tracking-[-0.03em] leading-none mb-7">
                  ₹10L – ₹1Cr
                </p>
                <div className="border-t border-white/15">
                  <div className="flex items-center gap-3 py-4 border-b border-white/15 text-white/85">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0"></span>
                    PMEGP up to ₹25 Lakhs
                  </div>
                  <div className="flex items-center gap-3 py-4 border-b border-white/15 text-white/85">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0"></span>
                    MUDRA up to ₹10 Lakhs
                  </div>
                  <div className="flex items-center gap-3 py-4 border-b border-white/15 text-white/85">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0"></span>
                    CGTMSE up to ₹2 Crore
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
