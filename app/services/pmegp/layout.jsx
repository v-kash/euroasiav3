import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("pmegp");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="pmegp" />
      {children}
    </>
  );
}
