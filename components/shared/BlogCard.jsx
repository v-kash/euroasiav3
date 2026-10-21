"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// With reduced motion, both states stay fully visible (an empty variants
// object would leave server-rendered content stuck at opacity 0).
const noMotion = {
  hidden: { opacity: 1, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function BlogCard({ blog, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.08,
      },
    },
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <motion.article
      variants={shouldReduceMotion ? noMotion : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="group flex flex-col h-full bg-white border border-[#D5DDE9] rounded-2xl overflow-hidden hover:border-primary-navy transition-colors duration-200"
      >
        <div className="relative h-48 overflow-hidden border-b border-[#D5DDE9]">
          <Image
            src={
              blog.featuredImage ||
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
            }
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-2.5 py-1 bg-white border-[1.5px] border-primary-navy text-primary-navy font-ledger text-[11px] font-semibold uppercase tracking-[0.1em] rounded">
              {blog.category}
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center gap-3 font-ledger text-xs font-medium text-text-muted mb-3">
            <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
            <span className="text-[#B8C4D6]">•</span>
            <span>{blog.author || "Euroasia Team"}</span>
          </div>
          <h3 className="font-display font-bold text-primary-navy text-xl tracking-[-0.02em] leading-snug mb-2 group-hover:text-accent-text transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-text-muted text-sm line-clamp-2 mb-5">
            {blog.excerpt}
          </p>
          <span className="mt-auto inline-flex items-center self-start text-primary-navy font-semibold text-sm underline decoration-accent decoration-2 underline-offset-[6px] group-hover:text-accent-text transition-colors">
            Read More
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
