import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NRV Enterprises. Call, email, or visit us at Tikri Kalan, West Delhi. We respond within 24 hours. Phone: +91 78275 52429.",
  openGraph: {
    title: "Contact NRV Enterprises",
    description:
      "Reach NRV Enterprises by phone, email, or WhatsApp. Located at Tikri Kalan, West Delhi. Mon–Sat, 9 AM–6 PM.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
