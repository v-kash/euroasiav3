import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("iec-registration");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="iec-registration" />
      {children}
    </>
  );
}
