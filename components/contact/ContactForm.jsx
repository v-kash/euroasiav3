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

/*
  Used on the /contact page and inside the site-wide contact popup.
  - idPrefix keeps field ids unique when both are on screen at once.
  - defaultService preselects the dropdown (added as an option if it isn't one).
  - onSuccess lets the popup swap the form for its own thank-you view.
  - source records where the lead came from (see lib/leadSources.js).
*/
export default function ContactForm({
  idPrefix = "",
  defaultService = "",
  source = "contact-page",
  onSuccess,
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
        onSuccess?.(data);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={compact ? "space-y-4" : "space-y-5"}
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
      <div>
        <label
          htmlFor={`${idPrefix}name`}
          className="block font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-2"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`${idPrefix}name`}
          {...register("name", { required: "Full name is required" })}
          className={`w-full min-h-[48px] px-4 py-3 rounded-xl border-2 bg-white text-text-dark placeholder:text-silver-grey ${
            errors.name ? "border-red-500" : "border-[#D5DDE9]"
          } focus:outline-none focus:border-primary-navy focus:ring-4 focus:ring-accent/30 transition-colors`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email + Phone: side by side in the popup, stacked on the page */}
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "space-y-5"}>
        {/* Email */}
        <div>
          <label
            htmlFor={`${idPrefix}email`}
            className="block font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-2"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
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
            className={`w-full min-h-[48px] px-4 py-3 rounded-xl border-2 bg-white text-text-dark placeholder:text-silver-grey ${
              errors.email ? "border-red-500" : "border-[#D5DDE9]"
            } focus:outline-none focus:border-primary-navy focus:ring-4 focus:ring-accent/30 transition-colors`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor={`${idPrefix}phone`}
            className="block font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
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
            className={`w-full min-h-[48px] px-4 py-3 rounded-xl border-2 bg-white text-text-dark placeholder:text-silver-grey ${
              errors.phone ? "border-red-500" : "border-[#D5DDE9]"
            } focus:outline-none focus:border-primary-navy focus:ring-4 focus:ring-accent/30 transition-colors`}
            placeholder={
              compact ? "10-digit mobile" : "Enter your phone number"
            }
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label
          htmlFor={`${idPrefix}serviceInterest`}
          className="block font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-2"
        >
          Service Interest
        </label>
        <select
          id={`${idPrefix}serviceInterest`}
          {...register("serviceInterest")}
          className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-[#D5DDE9] bg-white text-text-dark focus:outline-none focus:border-primary-navy focus:ring-4 focus:ring-accent/30 transition-colors"
        >
          <option value="">Select a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor={`${idPrefix}message`}
          className="block font-ledger text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy mb-2"
        >
          Message{" "}
          <span className="normal-case tracking-normal font-sans font-normal text-text-muted">
            (optional)
          </span>
        </label>
        <textarea
          id={`${idPrefix}message`}
          rows={compact ? 3 : 4}
          {...register("message")}
          className={`w-full min-h-[48px] px-4 py-3 rounded-xl border-2 bg-white text-text-dark placeholder:text-silver-grey ${
            errors.message ? "border-red-500" : "border-[#D5DDE9]"
          } focus:outline-none focus:border-primary-navy focus:ring-4 focus:ring-accent/30 transition-colors resize-none`}
          placeholder="Tell us about your requirements"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Consent: unticked by default and required (DPDP Act) */}
      <div>
        <label
          htmlFor={`${idPrefix}consent`}
          className="flex items-start gap-3 text-sm text-text-muted cursor-pointer"
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
