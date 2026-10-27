import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("zed-certification");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="zed-certification" />
      {children}
    </>
  );
}
