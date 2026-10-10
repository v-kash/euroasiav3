import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("business-funding");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="business-funding" />
      {children}
    </>
  );
}
