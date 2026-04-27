"use client";

import { useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-navy text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
        <span className="mr-2">🎉</span>
        <span className="hidden sm:inline">
          Limited Time: Free Consultation for First 50 MSMEs This Month
        </span>
        <span className="sm:hidden">Free Consultation Available</span>
        <Link
          href="/contact"
          className="ml-2 font-semibold text-accent hover:underline"
        >
          → Book Now
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
