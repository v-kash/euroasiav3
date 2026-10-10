import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("80-iac");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="80-iac" />
      {children}
    </>
  );
}
