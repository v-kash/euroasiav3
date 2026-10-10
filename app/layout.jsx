import "@/styles/globals.css";
// import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
// import FloatingAlerts from "@/components/shared/FloatingAlerts";
import NavratriProvider from "@/components/navratri/NavratriProvider";
import NavratriOfferBar from "@/components/navratri/NavratriOfferBar";

export const metadata = {
  metadataBase: new URL("https://www.euroasias.com"),
  title: {
    default: "Government Grants & MSME Funding | Euroasia Aquatic Pvt Ltd",
    template: "%s | Euroasia",
  },
  description:
    "Unlock ₹10 Lakh – ₹1 Crore government funding for your MSME. Expert consulting for PMEGP, MUDRA, Startup India, ZED, 80-IAC. 99% success rate. Pan-India services.",
  keywords: [
    "PMEGP",
    "MUDRA loan",
    "Startup India",
    "MSME registration",
    "Udyam",
    "ZED certification",
    "80-IAC",
    "government grants",
    "business funding",
    "CGTMSE",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Euroasia Aquatic Pvt Ltd",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.euroasias.com/#organization",
              name: "Euroasia Aquatic Pvt Ltd",
              alternateName: "Euroasia",
              url: "https://www.euroasias.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.euroasias.com/logo.png",
                width: 200,
                height: 60,
              },
              description:
                "Expert MSME consulting for government grants, PMEGP, MUDRA loans, Startup India registration, ZED certification, and 80-IAC tax exemptions. 99% success rate with ₹100 Cr+ funded.",
              telephone: "+91-9898921290",
              email: "info@euroasias.com",
              address: [
                {
                  "@type": "PostalAddress",
                  name: "Head Office - Ahmedabad",
                  streetAddress: "105–107, Athena Avenue, Gota",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  postalCode: "382481",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  name: "Branch Office - Pune",
                  streetAddress: "201, D Gold House, Dnyaneshwar Paduka Chowk, Fergusson College Rd, Shivajinagar",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  postalCode: "411005",
                  addressCountry: "IN",
                },
              ],
              location: [
                {
                  "@type": "Place",
                  name: "Euroasia Head Office - Ahmedabad",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 23.0968,
                    longitude: 72.5462,
                  },
                },
                {
                  "@type": "Place",
                  name: "Euroasia Branch Office - Pune",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 18.5204,
                    longitude: 73.8567,
                  },
                },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.linkedin.com/company/euroasia-aquatic",
                "https://www.instagram.com/euroasiaaquatic",
                "https://www.facebook.com/euroasiaaquatic",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9898921290",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            }),
          }}
        />
        {/* WebSite Schema with Sitelinks Searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.euroasias.com/#website",
              url: "https://www.euroasias.com",
              name: "Euroasia Aquatic Pvt Ltd",
              alternateName: "Euroasia - Government Grants & MSME Funding",
              description:
                "Unlock ₹10 Lakh – ₹1 Crore government funding for your MSME. Expert consulting for PMEGP, MUDRA, Startup India, ZED, 80-IAC.",
              publisher: {
                "@id": "https://www.euroasias.com/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.euroasias.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* FAQPage Schema - Common Questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is PMEGP subsidy and how much can I get?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PMEGP (Prime Minister Employment Generation Programme) provides 15-35% subsidy on projects up to ₹50 lakhs for manufacturing and ₹20 lakhs for service sector. General category gets 15-25% and special category (SC/ST/Women/OBC) gets 25-35% subsidy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is eligible for government grants in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "MSMEs, startups, entrepreneurs, and small businesses are eligible for various government grants. Eligibility varies by scheme - PMEGP requires 8th pass for projects above ₹10L, MUDRA is for non-corporate small businesses, and Startup India requires DPIIT recognition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to get MSME funding?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timeline varies by scheme: MUDRA loans take 7-15 days, PMEGP takes 2-3 months, and Startup India recognition takes 2-5 days. Our expert team helps expedite the process with 99% success rate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is 80-IAC tax exemption for startups?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Section 80-IAC provides 100% income tax exemption for 3 consecutive years out of first 10 years for DPIIT-recognized startups incorporated after April 2016 with turnover under ₹100 crores. This can save startups lakhs in taxes.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Seasonal layer; renders the children untouched outside Navratri (components/navratri/config.js). */}
        <NavratriProvider>
          <div className="fixed top-0 left-0 right-0 z-50">
            {/* <AnnouncementBar /> */}
                        <NavratriOfferBar />

            <Navbar />
          </div>
          <main className="min-h-screen pt-28 md:pt-32">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          {/* <FloatingAlerts /> */}
        </NavratriProvider>
      </body>
    </html>
  );
}
