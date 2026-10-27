import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("gst-compliance");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="gst-compliance" />
      {children}
    </>
  );
}
