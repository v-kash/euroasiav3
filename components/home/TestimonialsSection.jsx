"use client";

import { motion } from "framer-motion";

const featuredTestimonial = {
  quote:
    "Excellent professional service. The team provided clear guidance throughout the DPIIT Startup India Certificate process and handled all requirements efficiently. Their communication was prompt, and the entire process was completed smoothly and on time. I appreciate their expertise and highly recommend their services.",
  name: "T-Cell Pharmaceuticals Pvt Ltd",
  rating: 5,
  scheme: "Startup India",
  source: "Google Review",
};

// const testimonials = [
//   {
//     quote:
//       "We are very satisfied with the professional support provided for our Startup India certification process.",
//     name: "Shaurya Enterprise",
//     rating: 5,
//     scheme: "Startup India",
//   },
//   {
//     quote:
//       "Very smooth process and very humble and cooperative staff.",
//     name: "Riddhish Naik",
//     rating: 5,
//     scheme: "Certification",
//   },
//   {
//     quote:
//       "Excellent work done by entire team with genuine and prosperity.",
//     name: "HB E",
//     rating: 5,
//     scheme: "Consulting",
//   },
//   {
//     quote:
//       "Best company for all the documentation related work for startups.",
//     name: "Nagesh Rabari",
//     rating: 5,
//     scheme: "Documentation",
//   },
//   {
//     quote:
//       "Best company for all the documentation related work. Provides end-to-end solutions with proper follow-up and complete assistance.",
//     name: "Ronit Khasbhage",
//     rating: 5,
//     scheme: "Documentation",
//   },
//   {
//     quote:
//       "I had a great experience working with EUROASIA AQUATIC PRIVATE LIMITED. They provided excellent support in obtaining my certification.",
//     name: "Priyanka Chavda",
//     rating: 5,
//     scheme: "Certification",
//   },
//   {
//     quote:
//       "Great work. Excellent quick response.",
//     name: "Sidharth Aggarwal",
//     rating: 5,
//     scheme: "Consulting",
//   },
//   {
//     quote:
//       "EUROASIA AQUATIC PVT LTD provides outstanding service with a very professional approach. Their team is efficient.",
//     name: "Vivek Gadhavi",
//     rating: 5,
//     scheme: "Professional Service",
//   },
//   {
//     quote:
//       "We had a very smooth and professional experience. The entire process was handled efficiently.",
//     name: "Chiranjibi Das",
//     rating: 5,
//     scheme: "Consulting",
//   },
//   {
//     quote:
//       "I recently used Euroasia Aquatic Pvt Ltd for Startup India certificate services and had a very positive experience.",
//     name: "Day of Judgment",
//     rating: 5,
//     scheme: "Startup India",
//   },
//   {
//     quote:
//       "Good service for Startup Certificates.",
//     name: "Dharam Raj",
//     rating: 5,
//     scheme: "Startup India",
//   },
//   {
//     quote:
//       "Connected to Euroasia Aquatic Pvt Ltd for MSME certification and they resolved my query within 30 minutes.",
//     name: "Deepan Unadkat",
//     rating: 5,
//     scheme: "MSME",
//   },
//   {
//     quote:
//       "I got my Startup India certificate within 2 days without any hassle. Thanks Euroasia for your service.",
//     name: "Sukhwant Singh",
//     rating: 5,
//     scheme: "Startup India",
//   },
//   {
//     quote:
//       "The startup certification process was handled smoothly and quickly. The entire process was clear, efficient, and completed without unnecessary delays.",
//     name: "Ridheswar Nath",
//     rating: 5,
//     scheme: "Startup India",
//   },
//   {
//     quote:
//       "Communication was clear, response was quick, and the quality exceeded expectations. I would definitely recommend it to others.",
//     name: "Daimora World",
//     rating: 5,
//     scheme: "Consulting",
//   },
//   {
//     quote:
//       "Exceptional guidance and incredibly fast service for our startup certification.",
//     name: "Vijay Mahajan",
//     rating: 5,
//     scheme: "Startup India",
//   },
//   {
//     quote:
//       "Euroasia Aquatic Pvt. Ltd. has delivered exceptional service with the highest level of professionalism and efficiency.",
//     name: "Dr. A. R. Bhasker",
//     rating: 5,
//     scheme: "Professional Service",
//   },
//   {
//     quote:
//       "We took services for tender search and bid submission — the team gave proper guidance and documents were handled with expertise. Good for companies looking to expand through government tenders.",
//     name: "Shubham Zinzuwadiya",
//     rating: 5,
//     scheme: "Tender Services",
//   },
// ];


const testimonials = [
  {
    quote:
      "Great experience with Team Euroasia for our NSIC registration. Their team was very helpful with documentation, resolving queries, and guiding us throughout the process. Very professional, responsive, and supportive team. Really appreciate their assistance and would definitely recommend them!",
    name: "Amit Raval",
    rating: 5,
    scheme: "NSIC Registration",
  },
  {
    quote:
      "Aapki funding aur startup support se mujhe apne idea ko aage badhane ka confidence mila. Is opportunity se mujhe bahut kuch seekhne aur grow karne ka mauka mila. Iske liye main dil se aapka thank you karta hoon.",
    name: "Jay Patel",
    rating: 5,
    scheme: "Startup Funding",
  },
  {
    quote:
      "I am very happy with the support I received for my funding requirements and Startup India registration. The team was professional, polite, and very supportive throughout the process. They helped me understand the documentation and procedure clearly. Overall, it was a great experience.",
    name: "Krish Rabari",
    rating: 5,
    scheme: "Startup India & Funding",
  },
  {
    quote:
      "Aapki funding aur guidance mere startup ke liye bahut valuable rahi. Is support se mujhe growth ke saath bahut kuch naya seekhne ko mila. Itni achhi opportunity dene ke liye aapka bahut-bahut thank you.",
    name: "delvadiya Arya",
    rating: 5,
    scheme: "Startup Funding",
  },
  {
    quote:
      "I am truly thankful for the excellent support I received for funding and Startup India registration. The entire process was explained very clearly and professionally. The team was always available to guide me whenever I had any doubts. I really appreciate their helpful and supportive approach.",
    name: "Divyanshu Singh",
    rating: 5,
    scheme: "Startup India & Funding",
  },
  {
    quote:
      "I am extremely satisfied with the professional and smooth handling of my CGTMSE loan application. The entire process was managed efficiently, with clear communication and proper guidance at every step. I truly appreciate the team’s dedication, professionalism, and timely support. Highly recommended!",
    name: "chintan barman",
    rating: 5,
    scheme: "CGTMSE Loan",
  },
];
const StarPath = () => (
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
);

const GoogleG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
              SUCCESS STORIES
            </span>
            <h2 className="font-display font-extrabold text-primary-navy text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em] mt-4">
              Real Businesses, Real Results
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium text-primary-navy lg:justify-end lg:max-w-md">
            <span>500+ Success Stories</span>
            <span aria-hidden="true" className="text-[#B8C4D6]">/</span>
            <span>₹100Cr+ Funded</span>
            <span aria-hidden="true" className="text-[#B8C4D6]">/</span>
            <span>99% Satisfaction</span>
            <span aria-hidden="true" className="text-[#B8C4D6]">/</span>
            <span>20+ Industries</span>
          </div>
        </motion.div>

        {/* Featured Testimonial */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary-navy rounded-2xl p-8 md:p-12 mb-10"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center font-display text-2xl font-extrabold text-primary-navy flex-shrink-0">
                {featuredTestimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white">
                  {featuredTestimonial.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex" role="img" aria-label={`${featuredTestimonial.rating} out of 5 stars`}>
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        aria-hidden="true"
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <StarPath />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-1.5 flex items-center gap-1.5">
                  <GoogleG className="w-3.5 h-3.5" />
                  Google Review
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="font-display text-xl md:text-2xl font-semibold text-white leading-snug tracking-[-0.01em] mb-5">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-accent text-accent rounded-full font-ledger text-xs font-semibold uppercase tracking-[0.1em]">
                  {featuredTestimonial.scheme}
                </span>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 9).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="flex flex-col bg-white border border-[#D5DDE9] rounded-2xl p-6 hover:border-primary-navy transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-light-bg border border-[#D5DDE9] rounded-xl flex items-center justify-center text-sm font-bold text-primary-navy">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary-navy text-sm">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-0.5 mt-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          aria-hidden="true"
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <StarPath />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <GoogleG className="w-5 h-5 flex-shrink-0" />
              </div>
              <p className="text-text-dark text-[15px] leading-relaxed mb-5 line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <span className="mt-auto self-start px-2.5 py-1 bg-light-bg text-primary-navy rounded font-ledger text-[11px] font-semibold uppercase tracking-[0.1em]">
                {testimonial.scheme}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-12 border-t border-[#D5DDE9]"
        >
          <div className="flex items-center gap-3 bg-white border-2 border-primary-navy px-6 py-4 rounded-xl shadow-hard-sm">
            <GoogleG className="w-8 h-8" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl font-extrabold text-primary-navy leading-none">4.8</span>
                <div className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <StarPath />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-text-muted">Based on 100+ Google Reviews</p>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=euroasia+aquatic+pvt+ltd+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary-navy underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent-text transition-colors"
          >
            View all reviews →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
