"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function BlogCard({ blog, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
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
      variants={shouldReduceMotion ? {} : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-48 overflow-hidden">
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
            <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
              {blog.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-text-muted mb-3">
            <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
            <span>•</span>
            <span>{blog.author || "Euroasia Team"}</span>
          </div>
          <h3 className="text-lg font-semibold text-primary-navy mb-2 group-hover:text-accent-text transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-text-muted text-sm line-clamp-2 mb-4">
            {blog.excerpt}
          </p>
          <span className="inline-flex items-center text-primary-navy font-medium text-sm group-hover:text-accent-text transition-colors">
            Read More
            <svg
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
