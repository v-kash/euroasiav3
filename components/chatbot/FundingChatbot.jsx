"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { rememberLeadSent } from "@/components/contact/leadMemory";
import ChatPresence from "@/components/chatbot/ChatPresence";
import ChatLauncher from "@/components/chatbot/ChatLauncher";
import { CHAT_LAUNCHER_MASCOT } from "@/components/mascot/config";

/*
  Ankur, the AI funding assistant. The widget itself lives on the chatbot server
  (one script, shared by every website that embeds it); this component only loads
  it with Euroasia's look and keeps it clear of the WhatsApp button and the mobile bar.

  Change the server with NEXT_PUBLIC_CHATBOT_URL (defaults to production).
*/
const CHATBOT_URL = (process.env.NEXT_PUBLIC_CHATBOT_URL || "https://chatbot.euroasia.cloud").replace(/\/+$/, "");

/*
  The chatbot server tells browsers to keep chatbot.js for 10 years, so a browser
  that loaded an older copy never fetches a new one by itself. Change this
  whenever the widget changes, so every visitor downloads the current file.
  (2026-11-05: the greeting bubble on every page load, greeting-repeat="always".)
*/
const WIDGET_VERSION = "2026-11-05";

const BOT_NAME = "Nisarg";

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
      <Script src={`${CHATBOT_URL}/widget/chatbot.js?v=${WIDGET_VERSION}`} strategy="lazyOnload" />
      <funding-chatbot
        api={`${CHATBOT_URL}/api/v1`}
        bot-name={BOT_NAME}
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
      {/* Ankur himself as the chat button, in place of the widget's round one */}
      {CHAT_LAUNCHER_MASCOT && <ChatLauncher botName={BOT_NAME} />}
      <ChatPresence />
    </>
  );
}
