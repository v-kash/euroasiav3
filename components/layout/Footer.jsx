import Link from "next/link";
import Image from "next/image";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { NavratriGreeting } from "@/components/navratri/NavratriAccents";

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
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Blog", href: "/blog" },
];

const policyLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
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
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/919898921290" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-white">
      {/* Top Section - Logo & Social */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-white.png"
                alt="Euroasia Aquatic Pvt Ltd"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-silver-grey text-sm leading-relaxed">
              At the core of our work is a commitment to simplifying business processes. 
              Your growth is our shared success, and we&apos;re dedicated to guiding you at every step.
            </p>
          </div>
          <div className="flex space-x-3">
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
      </div>

      {/* Disclaimer Section */}
      <div className="border-t border-secondary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-silver-grey text-sm leading-relaxed">
            <span className="text-white font-medium">Disclaimer:</span> We act solely as an independent third-party consultant, 
            providing advisory support, documents support, guidance, and application assistance; approval or sanction of any 
            scheme or service is not guaranteed and remains subject to the sole discretion of the concerned authority.
          </p>
        </div>
      </div>

      {/* Links Grid */}
      <div className="border-t border-secondary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 4).map((service) => (
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

            {/* Menu */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Menu</h3>
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

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
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

            {/* Policies */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Policies</h3>
              <ul className="space-y-3">
                {policyLinks.map((link) => (
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-silver-grey text-sm text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-accent hover:text-white transition-colors">
              Euroasia
            </Link>
            . All rights reserved.
          </p>
          <NavratriGreeting />
        </div>
      </div>
    </footer>
  );
}
