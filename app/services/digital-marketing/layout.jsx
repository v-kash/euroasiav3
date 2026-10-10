import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("digital-marketing");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="digital-marketing" />
      {children}
    </>
  );
}
