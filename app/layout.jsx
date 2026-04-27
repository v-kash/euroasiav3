import "@/styles/globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import FloatingAlerts from "@/components/shared/FloatingAlerts";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Euroasia Aquatic Pvt Ltd",
              description:
                "Business consulting company specializing in certifications, compliance, tenders, digital marketing, and tax advisory.",
              url: "https://www.euroasias.com",
              telephone: "+91-9898921290",
              email: "info@euroasias.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "105–107, Athena Avenue, Gota",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382481",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.0968,
                longitude: 72.5462,
              },
              openingHours: "Mo-Sa 09:00-18:00",
              sameAs: [
                "https://www.linkedin.com/company/euroasia-aquatic",
                "https://www.instagram.com/euroasiaaquatic",
                "https://www.facebook.com/euroasiaaquatic",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="fixed top-0 left-0 right-0 z-50">
          <AnnouncementBar />
          <Navbar />
        </div>
        <main className="min-h-screen pt-28 md:pt-32">{children}</main>
        <Footer />
        <WhatsAppButton />
        <FloatingAlerts />
      </body>
    </html>
  );
}
