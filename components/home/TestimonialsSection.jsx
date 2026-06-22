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

const testimonials = [
  {
    quote:
      "We are very satisfied with the professional support provided for our Startup India certification process.",
    name: "Shaurya Enterprise",
    rating: 5,
    scheme: "Startup India",
  },
  {
    quote:
      "Very smooth process and very humble and cooperative staff.",
    name: "Riddhish Naik",
    rating: 5,
    scheme: "Certification",
  },
  {
    quote:
      "Excellent work done by entire team with genuine and prosperity.",
    name: "HB E",
    rating: 5,
    scheme: "Consulting",
  },
  {
    quote:
      "Best company for all the documentation related work for startups.",
    name: "Nagesh Rabari",
    rating: 5,
    scheme: "Documentation",
  },
  {
    quote:
      "Best company for all the documentation related work. Provides end-to-end solutions with proper follow-up and complete assistance.",
    name: "Ronit Khasbhage",
    rating: 5,
    scheme: "Documentation",
  },
  {
    quote:
      "I had a great experience working with EUROASIA AQUATIC PRIVATE LIMITED. They provided excellent support in obtaining my certification.",
    name: "Priyanka Chavda",
    rating: 5,
    scheme: "Certification",
  },
  {
    quote:
      "Great work. Excellent quick response.",
    name: "Sidharth Aggarwal",
    rating: 5,
    scheme: "Consulting",
  },
  {
    quote:
      "EUROASIA AQUATIC PVT LTD provides outstanding service with a very professional approach. Their team is efficient.",
    name: "Vivek Gadhavi",
    rating: 5,
    scheme: "Professional Service",
  },
  {
    quote:
      "We had a very smooth and professional experience. The entire process was handled efficiently.",
    name: "Chiranjibi Das",
    rating: 5,
    scheme: "Consulting",
  },
  {
    quote:
      "I recently used Euroasia Aquatic Pvt Ltd for Startup India certificate services and had a very positive experience.",
    name: "Day of Judgment",
    rating: 5,
    scheme: "Startup India",
  },
  {
    quote:
      "Good service for Startup Certificates.",
    name: "Dharam Raj",
    rating: 5,
    scheme: "Startup India",
  },
  {
    quote:
      "Connected to Euroasia Aquatic Pvt Ltd for MSME certification and they resolved my query within 30 minutes.",
    name: "Deepan Unadkat",
    rating: 5,
    scheme: "MSME",
  },
  {
    quote:
      "I got my Startup India certificate within 2 days without any hassle. Thanks Euroasia for your service.",
    name: "Sukhwant Singh",
    rating: 5,
    scheme: "Startup India",
  },
  {
    quote:
      "The startup certification process was handled smoothly and quickly. The entire process was clear, efficient, and completed without unnecessary delays.",
    name: "Ridheswar Nath",
    rating: 5,
    scheme: "Startup India",
  },
  {
    quote:
      "Communication was clear, response was quick, and the quality exceeded expectations. I would definitely recommend it to others.",
    name: "Daimora World",
    rating: 5,
    scheme: "Consulting",
  },
  {
    quote:
      "Exceptional guidance and incredibly fast service for our startup certification.",
    name: "Vijay Mahajan",
    rating: 5,
    scheme: "Startup India",
  },
  {
    quote:
      "Euroasia Aquatic Pvt. Ltd. has delivered exceptional service with the highest level of professionalism and efficiency.",
    name: "Dr. A. R. Bhasker",
    rating: 5,
    scheme: "Professional Service",
  },
  {
    quote:
      "We took services for tender search and bid submission — the team gave proper guidance and documents were handled with expertise. Good for companies looking to expand through government tenders.",
    name: "Shubham Zinzuwadiya",
    rating: 5,
    scheme: "Tender Services",
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
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
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
                <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google Review
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-white leading-relaxed mb-4">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  {featuredTestimonial.scheme}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 9).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-sm font-bold text-primary-navy">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-navy text-sm">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
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
                </div>
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="text-text-dark text-sm mb-4 line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <span className="inline-block px-2 py-1 bg-primary-navy/10 text-primary-navy rounded text-xs font-medium">
                {testimonial.scheme}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-12 border-t border-border-color"
        >
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-primary-navy">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-text-muted">Based on 50+ Google Reviews</p>
            </div>
          </div>
          <a 
            href="https://www.google.com/search?q=euroasia+aquatic+pvt+ltd+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-primary-navy font-medium transition-colors"
          >
            View all reviews →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
