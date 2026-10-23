"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ContactButton from "@/components/contact/ContactButton";

const WHATSAPP =
  "https://wa.me/919898921290?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20services";

const isField = (el) =>
  Boolean(
    el &&
    (el.isContentEditable ||
      ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)),
  );

/*
  Phone/tablet-only bar fixed to the bottom of the screen: Call | WhatsApp | Free Consultation.
  It slides away while the visitor is typing, so it never sits on top of a form field
  or the on-screen keyboard.
*/
export default function MobileActionBar() {
  const pathname = usePathname();
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const onFocusIn = (event) => setTyping(isField(event.target));
    const onFocusOut = (event) => setTyping(isField(event.relatedTarget));
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  const item =
    "flex flex-col items-center justify-center gap-1 rounded-lg py-1 text-[11px] font-semibold text-primary-navy active:bg-light-bg";

  return (
    <>
      {/* Keeps the end of the footer from hiding behind the bar. */}
      <div
        aria-hidden="true"
        className="h-[calc(4.5rem+env(safe-area-inset-bottom))] bg-primary-navy lg:hidden"
      />

      <nav
        aria-label="Quick contact"
        className={`fixed inset-x-0 bottom-0 z-[46] border-t border-[#D5DDE9] bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_rgba(0,33,82,0.08)] backdrop-blur transition-transform duration-200 lg:hidden ${
          typing ? "pointer-events-none translate-y-full" : ""
        }`}
      >
        <div className="mx-auto grid h-[4.5rem] max-w-xl grid-cols-[1fr_1fr_2fr] items-center gap-2 px-3">
          <a href="tel:+919898921290" className={item}>
            <FiPhone aria-hidden="true" className="h-5 w-5" />
            Call
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={item}
          >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5 text-[#1FA855]" />
            WhatsApp
          </a>
          <ContactButton
            source="mobile-bar"
            className="flex h-12 items-center justify-center whitespace-nowrap rounded-xl bg-primary-navy px-2 text-[13px] font-bold text-white transition-colors active:bg-secondary-navy min-[375px]:text-sm"
          >
            Free Consultation
          </ContactButton>
        </div>
      </nav>
    </>
  );
}
