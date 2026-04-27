"use client";

import { motion } from "framer-motion";

const featuredTestimonial = {
  quote:
    "Euroasia secured us ₹25 lakhs PMEGP funding in just 6 weeks. Documentation was handled end-to-end. Highly professional team!",
  name: "Rajesh Patel",
  company: "RK Industries",
  city: "Surat",
  rating: 5,
  scheme: "PMEGP",
  amount: "₹25 Lakhs",
  timeline: "6 Weeks",
};

const testimonials = [
  {
    quote:
      "Got our Startup India certification and 80-IAC tax exemption approved. Saved us lakhs in taxes!",
    name: "Priya Desai",
    company: "TechNova Solutions",
    city: "Ahmedabad",
    rating: 5,
    scheme: "Startup India",
  },
  {
    quote:
      "MUDRA loan of ₹10 lakhs disbursed in just 15 days. Best consulting service in Gujarat.",
    name: "Amit Shah",
    company: "GreenBuild Infra",
    city: "Vadodara",
    rating: 5,
    scheme: "MUDRA",
  },
  {
    quote:
      "ZED certification done smoothly. Now we qualify for government tenders and got ₹5L subsidy.",
    name: "Neha Joshi",
    company: "Innovate Labs",
    city: "Gandhinagar",
    rating: 5,
    scheme: "ZED",
  },
  {
    quote:
      "GEM registration completed in 48 hours. Already received 3 government orders worth ₹15 lakhs.",
    name: "Vikram Singh",
    company: "Singh Enterprises",
    city: "Rajkot",
    rating: 5,
    scheme: "GEM Portal",
  },
  {
    quote:
      "CGTMSE guarantee helped us get ₹50 lakhs loan without collateral. Game changer for our business!",
    name: "Meera Patel",
    company: "Patel Manufacturing",
    city: "Bharuch",
    rating: 5,
    scheme: "CGTMSE",
  },
  {
    quote:
      "Complete Udyam + GST registration done same day. Very efficient and affordable service.",
    name: "Karan Mehta",
    company: "Mehta Trading Co.",
    city: "Anand",
    rating: 5,
    scheme: "Udyam",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-label uppercase text-accent-text tracking-widest">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-h2 font-bold text-primary-navy mt-3 mb-4">
            Real Businesses, Real Results
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
            <span>500+ Success Stories</span>
            <span>•</span>
            <span>₹100Cr+ Funded</span>
            <span>•</span>
            <span>99% Satisfaction</span>
            <span>•</span>
            <span>20+ Industries</span>
          </div>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary-navy rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {featuredTestimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">
                  {featuredTestimonial.name}
                </p>
                <p className="text-white/60 text-sm">
                  {featuredTestimonial.company}, {featuredTestimonial.city}
                </p>
                <div className="flex mt-1">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-white leading-relaxed mb-4">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  {featuredTestimonial.scheme}
                </span>
                <span className="px-3 py-1 bg-success-green/20 text-success-green rounded-full text-sm font-medium">
                  {featuredTestimonial.amount}
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent-text rounded-full text-sm font-medium">
                  {featuredTestimonial.timeline}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-light-bg rounded-full flex items-center justify-center text-sm font-bold text-primary-navy">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-navy text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-text-muted text-xs">
                    {testimonial.company}, {testimonial.city}
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-text-dark text-sm mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <span className="inline-block px-2 py-1 bg-primary-navy/10 text-primary-navy rounded text-xs font-medium">
                {testimonial.scheme}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-border-color"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-navy">4.9/5</p>
            <p className="text-sm text-text-muted">Google Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-navy">4.8/5</p>
            <p className="text-sm text-text-muted">JustDial</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-navy">4.8/5</p>
            <p className="text-sm text-text-muted">Trustpilot</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
