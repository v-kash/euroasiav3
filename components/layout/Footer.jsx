"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    name: "Business Certifications",
    href: "/services/business-certifications",
  },
  { name: "Compliance & Legal", href: "/services/compliance-legal" },
  { name: "Tender Assistance", href: "/services/tender-assistance" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Tax Exemption", href: "/services/tax-exemption" },
  { name: "Business Advisory", href: "/services/business-advisory" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/company/euroasia-aquatic",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    href: "https://www.instagram.com/euroasiaaquatic",
  },
  {
    name: "Facebook",
    icon: FiFacebook,
    href: "https://www.facebook.com/euroasiaaquatic",
  },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/918485984488" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setSubscribeStatus("Subscribing...");
      // In production, this would call an API endpoint
      setTimeout(() => {
        setSubscribeStatus("Thank you for subscribing!");
        setEmail("");
        setTimeout(() => setSubscribeStatus(""), 3000);
      }, 1000);
    } catch (error) {
      setSubscribeStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="Euroasia Aquatic Pvt Ltd"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-silver-grey text-sm leading-relaxed">
              Making Compliance Effortless. Your trusted partner for business
              certifications, compliance, tenders, and digital marketing
              solutions in Gujarat.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-navy flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-silver-grey hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-silver-grey hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-silver-grey text-sm">
                  105–107, Athena Avenue, Gota,
                  <br />
                  Ahmedabad, Gujarat – 382481
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919898921290"
                  className="text-silver-grey hover:text-white transition-colors text-sm"
                >
                  +91-9898921290
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@euroasias.com"
                  className="text-silver-grey hover:text-white transition-colors text-sm"
                >
                  info@euroasias.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">
                Subscribe to Our Newsletter
              </h4>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col space-y-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-secondary-navy text-white placeholder-silver-grey text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </button>
                {subscribeStatus && (
                  <p className="text-xs text-silver-grey">{subscribeStatus}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-silver-grey text-sm">
              © {new Date().getFullYear()} Euroasia Aquatic Pvt Ltd. All rights
              reserved.
            </p>
            <p className="text-silver-grey text-xs text-center md:text-right">
              Disclaimer: The information provided on this website is for
              general purposes only and does not constitute legal or
              professional advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
