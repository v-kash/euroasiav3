import "@/styles/globals.css";
import { displayFont, ledgerFont } from "@/styles/fonts";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
// import FloatingAlerts from "@/components/shared/FloatingAlerts";
import NavratriProvider from "@/components/navratri/NavratriProvider";

export const metadata = {
  metadataBase: new URL("https://www.euroasias.com"),
  title: {
    default: "MSME Funding & Government Scheme Consultants India | Euroasia",
    template: "%s | Euroasia",
  },
  description:
    "Euroasia supports MSMEs and startups across India with government schemes, funding documentation, Udyam, DPIIT, certifications, tenders and compliance.",
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
    siteName: "Euroasia",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${displayFont.variable} ${ledgerFont.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Organization + WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.euroasias.com/#organization",
                  name: "Euroasia Aquatic Pvt Ltd",
                  alternateName: "Euroasia",
                  url: "https://www.euroasias.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.euroasias.com/logo.png",
                  },
                  email: "info@euroasias.com",
                  telephone: "+91-9898921290",
                  description:
                    "Independent business consultancy supporting MSMEs and startups with government schemes, funding documentation, registrations, certifications, tenders and compliance.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "105–107, Athena Avenue, Gota",
                    addressLocality: "Ahmedabad",
                    addressRegion: "Gujarat",
                    postalCode: "382481",
                    addressCountry: "IN",
                  },
                  areaServed: { "@type": "Country", name: "India" },
                  sameAs: [
                    "https://www.linkedin.com/company/euroasia-aquatic",
                    "https://www.instagram.com/euroasiaaquatic",
                    "https://www.facebook.com/euroasiaaquatic",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.euroasias.com/#website",
                  url: "https://www.euroasias.com/",
                  name: "Euroasia",
                  publisher: {
                    "@id": "https://www.euroasias.com/#organization",
                  },
                  inLanguage: "en-IN",
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
            <AnnouncementBar />

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