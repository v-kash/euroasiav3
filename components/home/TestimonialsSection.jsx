"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=euroasia+aquatic+pvt+ltd+reviews";

// One review card. Long quotes are clamped to 3 lines with a Read more toggle.
function ReviewCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const quoteRef = useRef(null);

  // Measure only while collapsed: expanded text never overflows, but the
  // "Show less" button still has to stay visible.
  useEffect(() => {
    if (expanded) return;
    const el = quoteRef.current;
    if (!el) return;
    const check = () => setIsClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <div className="snap-start shrink-0 w-[85%] sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_2.5rem)/3)] flex flex-col bg-white border border-[#D5DDE9] rounded-2xl p-5 hover:border-primary-navy transition-colors">
      <div className="flex items-start justify-between mb-3">
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
      <p
        ref={quoteRef}
        className={`text-text-dark text-[15px] leading-relaxed ${expanded ? "" : "line-clamp-3"}`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      {isClamped && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="self-start mt-1 py-1 text-sm font-semibold text-accent-text hover:text-primary-navy hover:underline underline-offset-4 transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <div className="mt-auto pt-4">
        <span className="inline-block px-2.5 py-1 bg-light-bg text-primary-navy rounded font-ledger text-[11px] font-semibold uppercase tracking-[0.1em]">
          {testimonial.scheme}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  // Scroll by exactly one card (card width + gap)
  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * step, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const arrowClass =
    "w-11 h-11 rounded-full border-2 border-primary-navy text-primary-navy flex items-center justify-center hover:bg-primary-navy hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none";

  return (
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8"
        >
          <div className="max-w-2xl">
            <span className="font-ledger text-xs font-semibold uppercase tracking-[0.14em] text-accent-text">
              SUCCESS STORIES
            </span>
            <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] mt-3">
              Real Businesses, Real Results
            </h2>
          </div>
          <div className="flex items-center justify-between gap-6">
            {/* Google rating */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rated 4.8 out of 5 from 100+ Google reviews. View all reviews (opens in a new tab)"
              className="group flex items-center gap-2.5"
            >
              <GoogleG className="w-6 h-6" />
              <span className="font-display text-xl font-extrabold text-primary-navy leading-none">4.8</span>
              <span className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <StarPath />
                  </svg>
                ))}
              </span>
              <span className="text-sm text-text-muted underline decoration-accent decoration-2 underline-offset-4 group-hover:text-primary-navy transition-colors">
                100+ reviews
              </span>
            </a>

            {/* Carousel arrows (mobile users swipe) */}
            <div className="hidden sm:flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Previous reviews"
                className={arrowClass}
              >
                <FiChevronLeft aria-hidden="true" className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label="Next reviews"
                className={arrowClass}
              >
                <FiChevronRight aria-hidden="true" className="w-5 h-5" />
              </button>
            </div>
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

        {/* Reviews carousel — swipe on mobile, arrows on larger screens */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="flex items-start gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 lg:scroll-px-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
