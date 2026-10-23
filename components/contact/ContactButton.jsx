"use client";

import Link from "next/link";
import { useContactModal } from "@/components/contact/ContactModal";

/*
  Drop-in replacement for <Link href="/contact">: a normal click opens the
  contact popup, while ctrl/cmd/middle-click, no-JS and crawlers still get
  the /contact page.

  service – preselects the "Service Interest" dropdown (e.g. "PMEGP")
  title   – popup heading (defaults to "Get a Free Consultation")
  source  – where the lead came from (lib/leadSources.js), default "popup"
*/
export default function ContactButton({
  service,
  title,
  source = "popup",
  onClick,
  children,
  ...props
}) {
  const modal = useContactModal();

  const handleClick = (event) => {
    onClick?.(event);
    if (!modal || event.defaultPrevented) return;
    const opensElsewhere =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;
    if (opensElsewhere) return;

    event.preventDefault();
    modal.open({ service, title, source });
  };

  return (
    <Link
      href="/contact"
      aria-haspopup="dialog"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
