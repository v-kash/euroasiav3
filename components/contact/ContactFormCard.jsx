"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import Mascot from "@/components/mascot/Mascot";
import { useFormMascot } from "@/components/mascot/useFormMascot";

// The /contact page form card, with the mascot in its header reacting to the form.
export default function ContactFormCard() {
  const mascotRef = useRef(null);
  const mascot = useFormMascot();
  const { greet } = mascot;
  // Wave once the card scrolls into view, not on page load where nobody sees it.
  const seen = useInView(mascotRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (seen) greet();
  }, [seen, greet]);

  return (
    <div className="bg-white border-2 border-primary-navy rounded-2xl shadow-hard overflow-hidden">
      <div className="flex items-center justify-between gap-4 bg-primary-navy px-6 sm:px-8 py-5">
        <h2 className="font-display font-extrabold text-white text-2xl md:text-3xl tracking-[-0.03em]">
          Send Us a Message
        </h2>
        <div ref={mascotRef} className="-my-2 flex-shrink-0">
          <Mascot mood={mascot.mood} className="h-14 w-14" />
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <ContactForm onActivity={mascot.onActivity} />
      </div>
    </div>
  );
}
