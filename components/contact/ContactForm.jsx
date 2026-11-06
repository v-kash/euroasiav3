"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { rememberLeadSent } from "@/components/contact/leadMemory";

const services = [
  "Business Certifications",
  "Compliance & Legal",
  "Tender Assistance",
  "Digital Marketing",
  "Tax Exemption",
  "Business Advisory",
  "Other",
];

const LABEL =
  "block font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-2";

/*
  Popup on phones: each label sits inside its field like a placeholder and
  floats up to the top corner once the field is focused or filled, so a field
  takes one row instead of two. From sm up the label goes back above the field.
  The field comes before its label in the DOM so the label can follow it
  (Tailwind's peer-*); the real placeholder stays hidden until focus, then
  shows as a hint under the floated label.
*/
const FLOAT_LABEL =
  "max-sm:pointer-events-none max-sm:absolute max-sm:left-[18px] max-sm:top-2 max-sm:mb-0 max-sm:text-[10.5px] max-sm:leading-4 max-sm:transition-all max-sm:duration-150 " +
  "max-sm:peer-placeholder-shown:top-5 max-sm:peer-placeholder-shown:text-[13px] max-sm:peer-placeholder-shown:text-text-muted " +
  "max-sm:peer-focus:top-2 max-sm:peer-focus:text-[10.5px] max-sm:peer-focus:text-primary-navy";
// The service dropdown always shows a value, so its label stays up.
const FLOAT_LABEL_UP =
  "max-sm:pointer-events-none max-sm:absolute max-sm:left-[18px] max-sm:top-2 max-sm:mb-0 max-sm:text-[10.5px] max-sm:leading-4";
const FLOAT_ROOM = "max-sm:min-h-[56px] max-sm:pt-[22px] max-sm:pb-1.5";
const FLOAT_FIELD = `peer ${FLOAT_ROOM} max-sm:placeholder:text-transparent max-sm:focus:placeholder:text-silver-grey`;

const fieldClass = (hasError, extra = "") =>
  `w-full min-h-[48px] px-4 py-3 rounded-xl border-2 bg-white text-text-dark placeholder:text-silver-grey ${
    hasError ? "border-red-500" : "border-[#D5DDE9]"
  } focus:outline-none focus:border-primary-navy focus:ring-4 focus:ring-accent/30 transition-colors ${extra}`;

// One form field: its label, the control (children) and its error message.
function Field({ id, label, floating, labelUp, error, children }) {
  const labelEl = (
    <label
      htmlFor={id}
      className={`${LABEL} ${floating ? (labelUp ? FLOAT_LABEL_UP : FLOAT_LABEL) : ""}`}
    >
      {label}
    </label>
  );
  return (
    <div>
      {floating ? (
        <div className="relative sm:flex sm:flex-col-reverse">
          {children}
          {labelEl}
        </div>
      ) : (
        <>
          {labelEl}
          {children}
        </>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

/*
  Used on the /contact page and inside the site-wide contact popup.
  - idPrefix keeps field ids unique when both are on screen at once.
  - defaultService preselects the dropdown (added as an option if it isn't one).
  - onSuccess lets the popup swap the form for its own thank-you view.
  - source records where the lead came from (see lib/leadSources.js).
  - onActivity tells the mascot what's happening: "focus", "typing",
    "invalid", "submitting", "success" or "error".
  - compact: the popup's tighter layout (floating labels on phones).
*/
export default function ContactForm({
  idPrefix = "",
  defaultService = "",
  source = "contact-page",
  onSuccess,
  onActivity,
  compact = false,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions =
    defaultService && !services.includes(defaultService)
      ? [defaultService, ...services]
      : services;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { serviceInterest: defaultService } });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    onActivity?.("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, source }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        rememberLeadSent();
        onActivity?.("success");
        onSuccess?.(data);
      } else {
        setSubmitStatus("error");
        onActivity?.("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      onActivity?.("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => onActivity?.("invalid"))}
      onFocus={() => onActivity?.("focus")}
      onInput={() => onActivity?.("typing")}
      className={compact ? "space-y-3 sm:space-y-4" : "space-y-5"}
      noValidate
    >
      {/* Honeypot field for spam protection */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Full Name */}
      <Field
        id={`${idPrefix}name`}
        floating={compact}
        error={errors.name?.message}
        label={
          <>
            Full Name <span className="text-red-500">*</span>
          </>
        }
      >
        <input
          type="text"
          id={`${idPrefix}name`}
          {...register("name", { required: "Full name is required" })}
          className={fieldClass(errors.name, compact ? FLOAT_FIELD : "")}
          placeholder="Enter your full name"
        />
      </Field>

      {/* Email + Phone: side by side in the popup, stacked on the page */}
      <div className={compact ? "grid gap-3 sm:grid-cols-2 sm:gap-4" : "space-y-5"}>
        <Field
          id={`${idPrefix}email`}
          floating={compact}
          error={errors.email?.message}
          label={
            <>
              Email Address <span className="text-red-500">*</span>
            </>
          }
        >
          <input
            type="email"
            id={`${idPrefix}email`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={fieldClass(errors.email, compact ? FLOAT_FIELD : "")}
            placeholder="Enter your email"
          />
        </Field>

        <Field
          id={`${idPrefix}phone`}
          floating={compact}
          error={errors.phone?.message}
          label={
            <>
              Phone Number <span className="text-red-500">*</span>
            </>
          }
        >
          <input
            type="tel"
            id={`${idPrefix}phone`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            className={fieldClass(errors.phone, compact ? FLOAT_FIELD : "")}
            placeholder={
              compact ? "10-digit mobile" : "Enter your phone number"
            }
          />
        </Field>
      </div>

      {/* Service Interest */}
      <Field
        id={`${idPrefix}serviceInterest`}
        floating={compact}
        labelUp
        label="Service Interest"
      >
        <select
          id={`${idPrefix}serviceInterest`}
          {...register("serviceInterest")}
          className={fieldClass(false, compact ? FLOAT_ROOM : "")}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field
        id={`${idPrefix}message`}
        floating={compact}
        error={errors.message?.message}
        label={
          <>
            Message{" "}
            <span className="normal-case tracking-normal font-sans font-normal text-text-muted">
              (optional)
            </span>
          </>
        }
      >
        <textarea
          id={`${idPrefix}message`}
          rows={compact ? 3 : 4}
          {...register("message")}
          className={fieldClass(
            errors.message,
            `resize-none ${compact ? `${FLOAT_FIELD} max-sm:h-[84px]` : ""}`,
          )}
          placeholder="Tell us about your requirements"
        />
      </Field>

      {/* Consent: unticked by default and required (DPDP Act) */}
      <div>
        <label
          htmlFor={`${idPrefix}consent`}
          className={`flex items-start gap-3 text-sm text-text-muted cursor-pointer ${
            compact ? "max-sm:text-[13px] max-sm:leading-snug" : ""
          }`}
        >
          <input
            type="checkbox"
            id={`${idPrefix}consent`}
            {...register("consent", {
              required: "Please agree to be contacted so we can respond",
            })}
            className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-primary-navy"
          />
          <span>
            I agree to be contacted by Euroasia Business Solutions by call,
            WhatsApp or email about this enquiry, as described in the{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="font-semibold text-primary-navy underline hover:text-accent-text"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-red-500">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl shadow-hard-sm hover:bg-accent-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-hard-sm flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-navy"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="flex items-start gap-3 text-green-700 bg-green-50 border border-green-200 p-4 rounded-xl">
          <svg
            aria-hidden="true"
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>
            Thank you! Your message has been sent successfully. We&apos;ll get
            back to you soon.
          </span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-start gap-3 text-red-700 bg-red-50 border border-red-200 p-4 rounded-xl">
          <svg
            aria-hidden="true"
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>
            Something went wrong. Please try again or contact us directly.
          </span>
        </div>
      )}
    </form>
  );
}
