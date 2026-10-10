import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("government-grants");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="government-grants" />
      {children}
    </>
  );
}
