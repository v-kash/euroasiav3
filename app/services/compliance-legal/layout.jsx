import ServiceSeo from "@/components/seo/ServiceSeo";
import { serviceMetadata } from "@/lib/seo/services";

export const metadata = serviceMetadata("compliance-legal");

export default function Layout({ children }) {
  return (
    <>
      <ServiceSeo slug="compliance-legal" />
      {children}
    </>
  );
}
