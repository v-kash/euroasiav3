"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiX } from "react-icons/fi";

/*
  "N people chatting with Nisarg" pill, stuck beside the chat button on every page
  (rendered by FundingChatbot, positioned by .chat-presence in styles/globals.css).

  PREVIEW ONLY: the number is simulated so the design can be judged, and it only
  renders under `next dev`. The live site renders nothing here until this reads a
  real count from the chatbot server.
*/
// const PREVIEW = process.env.NODE_ENV === "development";
const PREVIEW = true;
const TAG = "funding-chatbot";
const DISMISSED = "chat-presence:dismissed";

// Expected chats at this time of day (IST): busy late morning and afternoon, quiet at night
function expectedNow(date = new Date()) {
  const h = (date.getUTCHours() + date.getUTCMinutes() / 60 + 5.5) % 24;
  const hump = (centre, width) => Math.exp(-((h - centre) ** 2) / (2 * width * width));
  return Math.round(50 + 24 * hump(11.5, 2.2) + 20 * hump(16, 2.5) + 7 * hump(21, 1.8));
}

// One small step: mostly ±1 or no change, slowly pulled back toward the expected level
// function nextCount(current) {
//   if (current === null) return Math.max(3, expectedNow() + Math.round((Math.random() - 0.5) * 4));
//   const pull = Math.random() < 0.3 ? Math.sign(expectedNow() - current) : 0;
//   const jitter = [-1, 0, 0, 1][Math.floor(Math.random() * 4)];
//   return Math.max(3, current + (pull || jitter));
// }
function nextCount(current) {
  if (current === null) {
    return Math.max(3, expectedNow() + Math.round((Math.random() - 0.5) * 4));
  }

  const pull = Math.random() < 0.3
    ? Math.sign(expectedNow() - current)
    : 0;

  const change = Math.floor(Math.random() * 3) + 1;
  const direction = pull || (Math.random() < 0.5 ? 1 : -1);

  return Math.max(3, current + direction * change);
}

const wasDismissed = () => {
  try {
    return sessionStorage.getItem(DISMISSED) === "1";
  } catch {
    return false;
  }
};

export default function ChatPresence() {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(null);
  const [widgetReady, setWidgetReady] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const direction = useRef(1);

  // Simulated count: shows up a moment after load, then drifts every 4–9s
  useEffect(() => {
    if (!PREVIEW) return undefined;
    if (wasDismissed()) {
      setDismissed(true);
      return undefined;
    }
    let timer;
    const tick = () => {
      setCount((current) => {
        const next = nextCount(current);
        if (current !== null && next !== current) direction.current = next > current ? 1 : -1;
        return next;
      });
      timer = setTimeout(tick, 4000 + Math.random() * 5000);
    };
    timer = setTimeout(tick, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Only beside a loaded chat button, and out of the way while the chat is open
  // (the widget has no close event, so check its state)
  useEffect(() => {
    if (!PREVIEW) return undefined;
    const check = () => {
      const bot = document.querySelector(TAG);
      setWidgetReady(typeof bot?.open === "function");
      setChatOpen(Boolean(bot?.isOpen));
    };
    check();
    const id = setInterval(check, 400);
    return () => clearInterval(id);
  }, []);

  const show = count !== null && widgetReady && !chatOpen && !dismissed;
  const shift = reduceMotion ? 0 : direction.current * 100;

  const openChat = () => document.querySelector(TAG)?.open?.();
  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISSED, "1");
    } catch {
      /* private mode: it just comes back on the next page load */
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="chat-presence"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reduceMotion ? 0 : 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="chat-presence fixed z-[9990] flex items-center h-10 bg-white border-[1.5px] border-primary-navy rounded-full shadow-hard-sm text-sm text-primary-navy"
        >
          <button
            type="button"
            onClick={openChat}
            className="flex items-center gap-2 h-full pl-3.5 pr-1.5 rounded-l-full whitespace-nowrap"
          >
            <span className="relative flex w-2.5 h-2.5 flex-shrink-0" aria-hidden="true">
              <span className="absolute inset-0 rounded-full bg-success-green live-pulse" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-success-green" />
            </span>
            <span>
              <span className="relative inline-flex justify-end min-w-[2ch] h-5 leading-5 overflow-hidden align-top font-bold tabular-nums">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={count}
                    initial={{ y: `${shift}%`, opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: `${-shift}%`, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {count}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              <span className="hidden sm:inline">people </span>chatting with Nisarg
            </span>
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Hide"
            className="grid place-items-center w-7 h-7 mr-1.5 rounded-full text-text-muted hover:text-primary-navy hover:bg-light-bg transition-colors duration-150"
          >
            <FiX aria-hidden="true" className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
