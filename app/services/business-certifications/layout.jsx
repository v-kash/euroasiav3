import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("business-certifications");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="business-certifications" />
      {children}
    </>
  );
}
