"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const services = [
  "Business Certifications",
  "Compliance & Legal",
  "Tender Assistance",
  "Digital Marketing",
  "Tax Exemption",
  "Business Advisory",
  "Other",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          htmlFor="name"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Full name is required" })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? "border-red-500" : "border-border-color"
          } focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent transition-colors`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? "border-red-500" : "border-border-color"
          } focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent transition-colors`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Phone Number <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number",
            },
          })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.phone ? "border-red-500" : "border-border-color"
          } focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent transition-colors`}
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Interest */}
      <div>
        <label
          htmlFor="serviceInterest"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Service Interest
        </label>
        <select
          id="serviceInterest"
          {...register("serviceInterest")}
          className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent transition-colors bg-white"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: "Message is required" })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? "border-red-500" : "border-border-color"
          } focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent transition-colors resize-none`}
          placeholder="Tell us about your requirements"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary-navy text-white font-semibold rounded-lg hover:bg-secondary-navy transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
          <svg
            className="w-5 h-5"
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
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
          <svg
            className="w-5 h-5"
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
