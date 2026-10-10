import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("tender-assistance");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="tender-assistance" />
      {children}
    </>
  );
}
