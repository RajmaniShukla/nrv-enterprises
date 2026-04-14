import type { Metadata } from "next";
import InquiryPageContent from "./InquiryPageContent";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free quote from NRV Enterprises for industrial supplies, engine oil, lubricants, and more. Submit your inquiry and receive a competitive quote within 24 hours.",
  openGraph: {
    title: "Get a Quote — NRV Enterprises",
    description:
      "Tell us what you need. NRV Enterprises will send you a competitive quote for industrial supplies and lubricants within 24 hours.",
    url: "/inquiry",
  },
};

export default function InquiryPage() {
  return <InquiryPageContent />;
}
