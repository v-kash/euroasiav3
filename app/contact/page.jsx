import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import OfficesSection from "@/components/shared/OfficesSection";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export const metadata = {
  title: "Contact Us - Get Free MSME Funding Consultation",
  description:
    "Contact Euroasia for free consultation on PMEGP, MUDRA, Startup India registration. Call +91-9898921290. Offices in Ahmedabad & Pune. Expert guidance for government grants.",
  keywords: [
    "contact MSME consultant",
    "PMEGP consultant contact",
    "government grants consultation Ahmedabad",
    "business funding help Pune",
    "MSME consultant Gujarat Maharashtra",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Euroasia - Free MSME Funding Consultation",
    description:
      "Get expert guidance on government schemes. Call +91-9898921290 or visit our offices in Ahmedabad & Pune.",
  },
};

const contactInfo = [
  {
    icon: FiMapPin,
    title: "Office Address",
    content: "105–107, Athena Avenue, Gota,\nAhmedabad, Gujarat – 382481",
  },
  {
    icon: FiPhone,
    title: "Phone Number",
    content: "+91-9898921290",
    href: "tel:+919898921290",
  },
  {
    icon: FiMail,
    title: "Email Address",
    content: "info@euroasias.com",
    href: "mailto:info@euroasias.com",
  },
  {
    icon: FiClock,
    title: "Office Hours",
    content: "Monday - Saturday\n9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Euroasia Aquatic Pvt Ltd",
    description: "Get in touch with Euroasia for business consulting services.",
    url: "https://www.euroasias.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Euroasia Aquatic Pvt Ltd",
      telephone: "+91-9898921290",
      email: "info@euroasias.com",
      location: [
        {
          "@type": "Place",
          name: "Euroasia Head Office - Ahmedabad",
          address: {
            "@type": "PostalAddress",
            streetAddress: "105–107, Athena Avenue, Gota",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "382481",
            addressCountry: "IN",
          },
        },
        {
          "@type": "Place",
          name: "Euroasia Branch Office - Pune",
          address: {
            "@type": "PostalAddress",
            streetAddress: "201, D Gold House, Dnyaneshwar Paduka Chowk, Fergusson College Rd, Shivajinagar",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411005",
            addressCountry: "IN",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <PageHero
        title="Contact Us"
        description="Have questions? We'd love to hear from you. Get in touch with our team."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary-navy mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="text-2xl font-bold text-primary-navy mb-6">
                Get in Touch
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-text-muted hover:text-accent transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-text-muted whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 bg-green-50 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-primary-navy mb-1">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-text-muted text-sm">
                    Chat with us directly for quick responses.
                  </p>
                </div>
                <a
                  href="https://wa.me/918485984488?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <OfficesSection variant="compact" />
    </>
  );
}
