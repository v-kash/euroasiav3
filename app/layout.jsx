import Script from "next/script";
import "@/styles/globals.css";
import { displayFont, ledgerFont } from "@/styles/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
// import FloatingAlerts from "@/components/shared/FloatingAlerts";
import NavratriProvider from "@/components/navratri/NavratriProvider";
import { DIWALI } from "@/components/diwali/config";
import { diwaliHeadScript } from "@/components/diwali/headScript";
import DiwaliIntro from "@/components/diwali/DiwaliIntro";
import DiwaliLayer from "@/components/diwali/DiwaliLayer";
import DiwaliOfferBar from "@/components/diwali/DiwaliOfferBar";
import ContactModalProvider from "@/components/contact/ContactModal";
import LeadTriggers from "@/components/contact/LeadTriggers";
import MobileActionBar from "@/components/layout/MobileActionBar";

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
      // The Diwali head script adds attributes to <html> before React loads.
      suppressHydrationWarning
      className={`${displayFont.variable} ${ledgerFont.variable}`}
    >
      <head>
        {DIWALI.enabled && (
          <script dangerouslySetInnerHTML={{ __html: diwaliHeadScript() }} />
        )}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-72MEWT6M66"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-72MEWT6M66');
          `}
        </Script>
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
        <DiwaliIntro />
        {/* Site-wide contact popup, opened by <ContactButton> and <LeadTriggers>. */}
        <ContactModalProvider>
        {/* Seasonal layer; renders the children untouched outside Navratri (components/navratri/config.js). */}
        <NavratriProvider>
          {/* Sticky, not fixed: the header keeps its own space, so the page sits right whether the offer bar is showing or not. */}
          <div className="sticky top-0 z-50">
            <DiwaliOfferBar />

            <Navbar />
          </div>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileActionBar />
          <WhatsAppButton />
          {/* Keep off: its "approved/sanctioned" alerts are made up, which counts as a dark pattern. */}
          {/* <FloatingAlerts /> */}
          <LeadTriggers />
          <DiwaliLayer />
        </NavratriProvider>
        </ContactModalProvider>
      </body>
    </html>
  );
}