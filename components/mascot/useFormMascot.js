"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MASCOT_NAME } from "@/components/mascot/config";

// What the mascot does and says at each step of a contact form.
const STEPS = {
  hello: { mood: "hello", line: `Hi, I'm ${MASCOT_NAME}! Tell us what you need.` },
  idle: { mood: "idle", line: null },
  listening: { mood: "listening", line: null },
  sending: { mood: "thinking", line: "Sending this to our team…" },
  invalid: { mood: "confused", line: "Almost there! Check the fields in red." },
  error: { mood: "confused", line: "That didn't go through. Please try again." },
  sent: { mood: "celebrate", line: "Got it! Our team will get back to you soon." },
};

/*
  Connects the mascot to <ContactForm onActivity={...}>.
  Returns { mood, line, greet, onActivity }.
  Each reaction falls back to idle after a few seconds.
*/
export function useFormMascot({ greetOnMount = false } = {}) {
  const [step, setStep] = useState(greetOnMount ? "hello" : "idle");
  // Kept in sync right away (not after render), so events that arrive in
  // the same tick see the latest step.
  const stepRef = useRef(step);
  const timer = useRef(null);

  const go = useCallback((next, backToIdleAfter) => {
    clearTimeout(timer.current);
    stepRef.current = next;
    setStep(next);
    if (backToIdleAfter) {
      timer.current = setTimeout(() => {
        stepRef.current = "idle";
        setStep("idle");
      }, backToIdleAfter);
    }
  }, []);

  const greet = useCallback(() => go("hello", 2600), [go]);

  useEffect(() => {
    if (greetOnMount) go("hello", 2600);
    return () => clearTimeout(timer.current);
  }, [greetOnMount, go]);

  const onActivity = useCallback(
    (event) => {
      const current = stepRef.current;
      switch (event) {
        // Focus alone (e.g. the popup focusing the first field, or the form
        // jumping to a field with an error) shouldn't interrupt a reaction.
        case "focus":
          if (current === "idle" || current === "listening") go("listening", 6000);
          break;
        case "typing":
          if (current !== "sending") go("listening", 6000);
          break;
        case "submitting":
          go("sending");
          break;
        case "invalid":
          go("invalid", 4000);
          break;
        case "error":
          go("error", 5000);
          break;
        case "success":
          go("sent", 5000);
          break;
        default:
      }
    },
    [go],
  );

  return { ...STEPS[step], greet, onActivity };
}
