"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { rememberLeadSent } from "@/components/contact/leadMemory";

/*
  Ankur, the AI funding assistant. The widget itself lives on the chatbot server
  (one script, shared by every website that embeds it); this component only loads
  it with Euroasia's look and keeps it clear of the WhatsApp button and the mobile bar.

  Change the server with NEXT_PUBLIC_CHATBOT_URL (defaults to production).
*/
const CHATBOT_URL = (process.env.NEXT_PUBLIC_CHATBOT_URL || "https://chatbot.euroasia.cloud").replace(/\/+$/, "");

// Not in the admin area
const HIDDEN_ON = ["/admin"];

export default function FundingChatbot() {
  const pathname = usePathname() || "";

  useEffect(() => {
    const track = (name, params) => window.gtag?.("event", name, params);
    const onOpen = () => track("chatbot_open");
    const onLead = () => {
      // They've given their number in the chat: the contact popup shouldn't ask again
      rememberLeadSent();
      track("generate_lead", { method: "chatbot" });
    };
    window.addEventListener("funding-chatbot:open", onOpen);
    window.addEventListener("funding-chatbot:lead", onLead);
    return () => {
      window.removeEventListener("funding-chatbot:open", onOpen);
      window.removeEventListener("funding-chatbot:lead", onLead);
    };
  }, []);

  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;

  return (
    <>
      <Script src={`${CHATBOT_URL}/widget/chatbot.js`} strategy="lazyOnload" />
      <funding-chatbot
        api={`${CHATBOT_URL}/api/v1`}
        bot-name="Nisarg"
        avatar="ankur"
        company="Euroasia"
        subtitle="Euroasia · Scheme finder"
        shadow="hard"
        greeting-repeat="always"
        font-display="var(--font-display), 'Plus Jakarta Sans', sans-serif"
        font-mono="var(--font-ledger), ui-monospace, monospace"
        /* Desktop: above the WhatsApp button (56px, 16px from the bottom). Phones/tablets: above MobileActionBar (lg breakpoint). */
        offset-bottom="38px"
        offset-side="32px"
        offset-bottom-mobile="calc(4.5rem + env(safe-area-inset-bottom) + 14px)"
        offset-side-mobile="16px"
        mobile-breakpoint="1024"
        /* Popup level, like ContactModal (z-[9999]): the festival cursors (Navratri 10000, Diwali sparkler 10001) stay on top */
        z-index="9998"
      />
    </>
  );
}
