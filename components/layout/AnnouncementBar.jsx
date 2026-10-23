"use client";

import { useState } from "react";
import ContactButton from "@/components/contact/ContactButton";
import { FiX } from "react-icons/fi";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-navy text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
        <span className="mr-2">🎉</span>
        <span className="hidden sm:inline">
          Free Consultation for MSMEs &amp; Startups, No Obligation
        </span>
        <span className="sm:hidden">Free Consultation Available</span>
        <ContactButton
          title="Book Your Free Consultation"
          className="ml-2 font-semibold text-accent hover:underline"
        >
          → Book Now
        </ContactButton>
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
