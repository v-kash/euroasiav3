"use client";

import { FaWhatsapp } from "react-icons/fa";

// Desktop only: on phones WhatsApp lives in the bottom bar (MobileActionBar).
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919898921290?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-6 z-[9999] group hidden lg:block"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
        <FaWhatsapp className="w-7 h-7 text-white" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-text-dark text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  );
}
