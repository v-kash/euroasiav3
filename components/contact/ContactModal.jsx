"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiX,
} from "react-icons/fi";
import ContactForm from "@/components/contact/ContactForm";
import { rememberOpenedThisVisit } from "@/components/contact/leadMemory";

const ContactModalContext = createContext(null);

// Returns null outside the provider, so ContactButton can fall back to a plain link.
export const useContactModal = () => useContext(ContactModalContext);

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ContactModalProvider({ children }) {
  // null when closed; otherwise the options passed to open():
  //   service, title, eyebrow, intro – what the popup says
  //   source – where the lead came from (lib/leadSources.js)
  //   auto   – true when a timed/exit trigger opened it, not the visitor
  const [options, setOptions] = useState(null);
  const pathname = usePathname();

  const open = useCallback((opts = {}) => {
    // Opening it themselves means no automatic popup is needed this visit.
    if (!opts.auto) rememberOpenedThisVisit();
    setOptions(opts);
  }, []);
  const close = useCallback(() => setOptions(null), []);

  // Close if the visitor navigates away (e.g. a link inside the popup).
  useEffect(() => {
    setOptions(null);
  }, [pathname]);

  const isOpen = options !== null;
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {options && (
          <ContactDialog
            key="contact-dialog"
            options={options}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}

const PHONE = { label: "+91-9898921290", href: "tel:+919898921290" };
const EMAIL = "info@euroasias.com";
const WHATSAPP =
  "https://wa.me/919898921290?text=Hi%2C%20I%20want%20a%20free%20consultation";

const OFFICES = [
  {
    label: "Head Office · Ahmedabad",
    address: "105–107, Athena Avenue, Gota, Ahmedabad, Gujarat 382481",
    mapUrl:
      "https://www.google.com/maps/place/EUROASIA+AQUATIC+PRIVATE+LIMITED/@23.109681,72.5375612,1061m/data=!3m2!1e3!4b1!4m6!3m5!1s0x44bab6b89e296a55:0xa926f5b90801b247!8m2!3d23.109681!4d72.5375612!16s%2Fg%2F11yq4sgjj2",
  },
  {
    label: "Branch Office · Pune",
    address:
      "201, D Gold House, Fergusson College Rd, Shivajinagar, Pune, Maharashtra 411005",
    mapUrl:
      "https://www.google.com/maps/place/EUROASIA+AQUATIC+PRIVATE+LIMITED+-+PUNE/@18.5273393,73.8428431,1094m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2c1a4ecc5d497:0xa6cf2e5a9522527f!8m2!3d18.5273393!4d73.8428431!16s%2Fg%2F11zh6qbvb5",
  },
];

const label =
  "font-ledger text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60";

function InfoItem({ icon: Icon, title, children }) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent"
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className={label}>{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-white/90">
          {children}
        </div>
      </div>
    </li>
  );
}

function ContactDialog({ options, onClose }) {
  const panelRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [sentName, setSentName] = useState(null);

  const title = options.title || "Get a Free Consultation";

  // Lock page scroll and give focus back on close. With a mouse, start in the
  // first field; on touch screens focus the dialog so the keyboard doesn't pop up.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const firstField = panelRef.current?.querySelector(
      "input:not([tabindex='-1'])",
    );
    const finePointer = window.matchMedia?.("(pointer: fine)").matches;
    (finePointer && firstField ? firstField : panelRef.current)?.focus({
      preventScroll: true,
    });

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  // Escape closes; Tab stays inside the popup.
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab" || !panelRef.current) return;

    const focusable = [...panelRef.current.querySelectorAll(FOCUSABLE)].filter(
      (el) => el.offsetParent !== null,
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const panelMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 24, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 24, scale: 0.98 },
        transition: { type: "spring", damping: 28, stiffness: 320 },
      };

  return (
    // z-[9999] matches the WhatsApp button; rendering after it puts the popup on top,
    // while the Navratri cursor (z-[10000]) stays visible above.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-deep-navy/60 backdrop-blur-sm sm:p-4 lg:p-6"
      onMouseDown={(event) => {
        // Only a click that starts on the backdrop closes it (not a text-selection drag).
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={handleKeyDown}
    >
      <motion.div
        {...panelMotion}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        tabIndex={-1}
        className="relative flex w-full sm:max-w-xl lg:max-w-5xl max-h-[92dvh] flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl border-2 border-primary-navy bg-white shadow-2xl outline-none"
      >
        {/* Stays put while the content scrolls. White over the navy header on
            phones, navy over the white form column on desktop. */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:right-4 lg:top-4 lg:text-text-muted lg:hover:bg-light-bg lg:hover:text-primary-navy"
        >
          <FiX aria-hidden="true" className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain">
          {/* Phones: intro → form → info. Desktop: intro + info on the left, form on the right. */}
          <div className="relative grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[auto_1fr]">
            {/* One continuous navy column behind intro + info on desktop */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 hidden w-5/12 bg-primary-navy lg:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Intro */}
            <div className="relative bg-primary-navy px-6 pb-6 pt-7 pr-16 text-white sm:px-8 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:px-10 lg:pb-8 lg:pt-10">
              <p className="font-ledger text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                {options.eyebrow || options.service || "Free consultation"}
              </p>
              <h2
                id="contact-popup-title"
                className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-[-0.02em] lg:text-3xl"
              >
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {options.intro ||
                  "Tell us what you need and our experts will guide you on the right schemes, registrations and paperwork. Free, with no obligation."}
              </p>
            </div>

            {/* Form */}
            <div className="px-6 py-7 sm:px-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:px-10 lg:py-10">
              {sentName ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success-green/10 text-success-green">
                    <FiCheck aria-hidden="true" className="h-8 w-8" />
                  </div>
                  <p className="font-display text-2xl font-bold text-primary-navy">
                    Thank you, {sentName.split(" ")[0]}!
                  </p>
                  <p className="mt-2 max-w-sm text-text-muted">
                    Your details have reached our team. We&apos;ll get back to
                    you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary-navy px-8 font-semibold text-white transition-colors hover:bg-secondary-navy"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-primary-navy lg:pr-10">
                    Send us your details
                  </h3>
                  <p className="mb-6 mt-1 text-sm text-text-muted">
                    Fields marked <span className="text-red-500">*</span> are
                    required.
                  </p>
                  <ContactForm
                    idPrefix="popup-"
                    defaultService={options.service}
                    source={options.source || "popup"}
                    onSuccess={(data) => setSentName(data.name || "there")}
                    compact
                  />
                </>
              )}
            </div>

            {/* Contact info */}
            <div className="relative bg-primary-navy px-6 pb-8 pt-7 text-white sm:px-8 lg:col-start-1 lg:row-start-2 lg:bg-transparent lg:px-10 lg:pb-10 lg:pt-0">
              <ul className="space-y-5 lg:border-t lg:border-white/15 lg:pt-8">
                <InfoItem icon={FiPhone} title="Call or WhatsApp">
                  <a
                    href={PHONE.href}
                    className="font-semibold text-white hover:text-accent"
                  >
                    {PHONE.label}
                  </a>
                  <span aria-hidden="true" className="mx-2 text-white/40">
                    ·
                  </span>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
                  >
                    WhatsApp
                  </a>
                </InfoItem>
                <InfoItem icon={FiMail} title="Email">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold text-white hover:text-accent"
                  >
                    {EMAIL}
                  </a>
                </InfoItem>
                {OFFICES.map((office) => (
                  <InfoItem
                    key={office.label}
                    icon={FiMapPin}
                    title={office.label}
                  >
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline hover:decoration-accent hover:underline-offset-4"
                    >
                      {office.address}
                      <span className="sr-only"> (opens Google Maps)</span>
                    </a>
                  </InfoItem>
                ))}
                <InfoItem icon={FiClock} title="Office Hours">
                  Monday – Saturday, 9:00 AM – 6:00 PM
                </InfoItem>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
