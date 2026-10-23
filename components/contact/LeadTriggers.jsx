"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useContactModal } from "@/components/contact/ContactModal";
import {
  autoPopupWithin,
  leadSentWithin,
  openedThisVisit,
  rememberAutoPopup,
} from "@/components/contact/leadMemory";

/*
  Opens the contact popup by itself, politely:
  - Timed: after 40s on the site, or after 15s once they've scrolled 60% of a long page.
  - Exit (desktop only): when the mouse leaves through the top of the window.

  It never opens:
  - more than once per visitor every 7 days (timed and exit share that one chance)
  - after they've sent an enquiry, or once they've opened the popup themselves
  - while they're typing, or while another overlay (menu, AI search) is open
  - on the pages in SKIP_PATHS, or in the first few seconds on a page

  To test it again on your own browser, use a private window (it remembers per browser).
*/
const SETTINGS = {
  timed: true,
  exit: true,
  timedAfterSeconds: 40,
  scrollDepth: 0.6,
  scrollMinSeconds: 15,
  exitMinSeconds: 8,
  minSecondsOnPage: 5,
  quietDays: 7,
  leadQuietDays: 90,
};

const SKIP_PATHS = [
  "/contact",
  "/check-eligibility",
  "/admin",
  "/privacy-policy",
  "/terms-conditions",
];

const POPUPS = {
  timed: {
    source: "popup-timed",
    eyebrow: "Free consultation",
    title: "Not sure which scheme fits your business?",
    intro:
      "Share a few details and an expert will suggest the right schemes, registrations and next steps for you. Free, with no obligation.",
  },
  exit: {
    source: "popup-exit",
    eyebrow: "Before you go",
    title: "Find out which schemes you qualify for",
    intro:
      "Leave your details and our experts will tell you which government schemes and subsidies fit your business. Free, with no obligation.",
  },
};

const skipped = (path = "") =>
  SKIP_PATHS.some((p) => path === p || path.startsWith(`${p}/`));

// Typing somewhere, or something already covering the middle of the screen?
function visitorIsBusy() {
  const el = document.activeElement;
  if (
    el &&
    (el.isContentEditable ||
      ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName))
  ) {
    return true;
  }
  const middle = document.elementFromPoint(
    window.innerWidth / 2,
    window.innerHeight / 2,
  );
  return Boolean(middle?.closest(".fixed"));
}

export default function LeadTriggers() {
  const modal = useContactModal();
  const pathname = usePathname();

  // Refs so the long-lived listeners below always see the latest values.
  const modalRef = useRef(modal);
  const pathRef = useRef(pathname);
  const pageSeconds = useRef(0);
  const maxDepth = useRef(0);

  useEffect(() => {
    modalRef.current = modal;
  }, [modal]);

  useEffect(() => {
    pathRef.current = pathname;
    pageSeconds.current = 0;
    maxDepth.current = 0;
  }, [pathname]);

  useEffect(() => {
    let siteSeconds = 0;
    let fired = false;

    const canOpen = () => {
      const m = modalRef.current;
      return (
        !fired &&
        m &&
        !m.isOpen &&
        !skipped(pathRef.current) &&
        pageSeconds.current >= SETTINGS.minSecondsOnPage &&
        document.visibilityState === "visible" &&
        !openedThisVisit() &&
        !autoPopupWithin(SETTINGS.quietDays) &&
        !leadSentWithin(SETTINGS.leadQuietDays) &&
        !visitorIsBusy()
      );
    };

    const open = (kind) => {
      fired = true;
      rememberAutoPopup();
      modalRef.current.open({ ...POPUPS[kind], auto: true });
    };

    // Timed + scroll
    const onScroll = () => {
      const doc = document.documentElement;
      if (doc.scrollHeight < window.innerHeight * 1.8) return; // short page
      const depth = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (depth > maxDepth.current) maxDepth.current = depth;
    };

    const tick = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      siteSeconds += 1;
      pageSeconds.current += 1;
      if (!SETTINGS.timed) return;

      const ready =
        siteSeconds >= SETTINGS.timedAfterSeconds ||
        (siteSeconds >= SETTINGS.scrollMinSeconds &&
          maxDepth.current >= SETTINGS.scrollDepth);
      if (ready && canOpen()) open("timed");
    }, 1000);

    // Exit intent (desktop mouse only)
    const desktop = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)",
    );
    const onMouseOut = (event) => {
      if (!SETTINGS.exit || event.relatedTarget || event.clientY > 0) return;
      if (!desktop.matches || siteSeconds < SETTINGS.exitMinSeconds) return;
      if (canOpen()) open("exit");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      clearInterval(tick);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return null;
}
