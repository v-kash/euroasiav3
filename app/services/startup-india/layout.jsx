import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("startup-india");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="startup-india" />
      {children}
    </>
  );
}
