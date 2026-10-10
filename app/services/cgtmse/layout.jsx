import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("cgtmse");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="cgtmse" />
      {children}
    </>
  );
}
