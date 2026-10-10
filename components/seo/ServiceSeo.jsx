import { serviceJsonLd } from "@/lib/seo/services";

// Service + BreadcrumbList + FAQPage structured data for a service page. Renders nothing visible.
export default function ServiceSeo({ slug }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(slug)) }}
    />
  );
}
