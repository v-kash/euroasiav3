"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiSearch } from "react-icons/fi";
import AISearchModal from "@/components/shared/AISearchModal";

const schemes = [
  { name: "PMEGP", href: "/services/pmegp" },
  { name: "MUDRA Loan", href: "/services/mudra" },
  { name: "Startup India", href: "/services/startup-india" },
  { name: "ZED Certification", href: "/services/zed-certification" },
  { name: "GEM Portal", href: "/services/gem-registration" },
  { name: "80-IAC Tax Exemption", href: "/services/80-iac" },
  { name: "CGTMSE", href: "/services/cgtmse" },
];

const registrationServices = [
  { name: "Udyam / MSME Registration", href: "/services/msme-registration" },
  { name: "Startup India (DPIIT)", href: "/services/startup-india" },
  { name: "Import Export Code (IEC)", href: "/services/iec-registration" },
  { name: "ZED Certification", href: "/services/zed-certification" },
  { name: "GEM Registration", href: "/services/gem-registration" },
];

const advisoryServices = [
  { name: "Government Grants", href: "/services/government-grants" },
  { name: "Business Funding", href: "/services/business-funding" },
  { name: "GST & Tax Compliance", href: "/services/gst-compliance" },
  { name: "Tender Assistance", href: "/services/tender-assistance" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Schemes", href: "/schemes", hasDropdown: "schemes" },
  { name: "Services", href: "/services", hasDropdown: "services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Euroasia Aquatic"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.hasDropdown)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-body font-medium transition-colors ${
                        pathname.startsWith(`/${link.hasDropdown}`)
                          ? "text-accent"
                          : "text-text-dark hover:text-accent-text"
                      }`}
                    >
                      <span>{link.name}</span>
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.hasDropdown
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Schemes Dropdown */}
                    {link.hasDropdown === "schemes" &&
                      activeDropdown === "schemes" && (
                        <div className="absolute top-full left-0 pt-4">
                          <div className="bg-white rounded-xl shadow-xl border border-border-color p-4 w-[220px]">
                            <div className="space-y-1">
                              {schemes.map((scheme) => (
                                <Link
                                  key={scheme.name}
                                  href={scheme.href}
                                  className="block px-3 py-2 rounded-lg text-text-dark hover:bg-light-bg hover:text-accent-text transition-colors font-medium text-sm"
                                >
                                  {scheme.name}
                                </Link>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-border-color">
                              <Link
                                href="/schemes"
                                className="text-accent font-medium text-sm hover:underline"
                              >
                                View All Schemes →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Services Mega Dropdown */}
                    {link.hasDropdown === "services" &&
                      activeDropdown === "services" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                          <div className="bg-white rounded-xl shadow-xl border border-border-color p-6 w-[550px]">
                            <div className="grid grid-cols-2 gap-8">
                              <div>
                                <h4 className="text-label uppercase text-accent mb-3">
                                  Registration Services
                                </h4>
                                <div className="space-y-1">
                                  {registrationServices.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="block px-3 py-2 rounded-lg text-text-dark hover:bg-light-bg hover:text-accent-text transition-colors font-medium text-sm"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-label uppercase text-accent mb-3">
                                  Advisory Services
                                </h4>
                                <div className="space-y-1">
                                  {advisoryServices.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="block px-3 py-2 rounded-lg text-text-dark hover:bg-light-bg hover:text-accent-text transition-colors font-medium text-sm"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border-color">
                              <Link
                                href="/services"
                                className="text-accent font-medium hover:underline"
                              >
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-body font-medium transition-colors ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-text-dark hover:text-accent-text"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center px-4 py-2 bg-primary-navy/5 text-primary-navy font-medium rounded-lg hover:bg-primary-navy hover:text-white transition-colors text-sm"
            >
              <FiSearch className="w-4 h-4 mr-2" />
              AI Search
            </button>
            {/* <a
              href="tel:+919898921290"
              className="flex items-center text-primary-navy font-medium hover:text-accent-dark transition-colors text-sm"
            >
              <FiPhone className="w-4 h-4 mr-2" />
              +91-9898921290
            </a> */}
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-navy text-white font-semibold rounded-lg hover:bg-secondary-navy transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.hasDropdown
                            ? null
                            : link.hasDropdown,
                        )
                      }
                      className="flex items-center justify-between w-full text-left font-semibold text-text-dark py-3 border-b border-border-color"
                    >
                      <span>{link.name}</span>
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.hasDropdown
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.hasDropdown && (
                      <div className="pl-4 py-2 space-y-2 bg-light-bg rounded-lg mt-2">
                        {link.hasDropdown === "schemes" &&
                          schemes.map((scheme) => (
                            <Link
                              key={scheme.name}
                              href={scheme.href}
                              className="block py-2 text-text-muted hover:text-accent-text"
                            >
                              {scheme.name}
                            </Link>
                          ))}
                        {link.hasDropdown === "services" && (
                          <>
                            <p className="text-xs uppercase text-accent font-semibold pt-2">
                              Registration
                            </p>
                            {registrationServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block py-2 text-text-muted hover:text-accent-text"
                              >
                                {service.name}
                              </Link>
                            ))}
                            <p className="text-xs uppercase text-accent font-semibold pt-2">
                              Advisory
                            </p>
                            {advisoryServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block py-2 text-text-muted hover:text-accent-text"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block py-3 font-semibold border-b border-border-color ${
                      pathname === link.href ? "text-accent" : "text-text-dark"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-4">
              <a
                href="tel:+919898921290"
                className="flex items-center justify-center text-primary-navy font-semibold py-3 border border-primary-navy rounded-lg"
              >
                <FiPhone className="w-4 h-4 mr-2" />
                +91-9898921290
              </a>
              <Link
                href="/contact"
                className="block text-center px-6 py-4 bg-accent text-white font-semibold rounded-lg"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* AI Search Modal */}
      <AISearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}
