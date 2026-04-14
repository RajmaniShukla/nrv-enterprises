import type { Metadata } from "next";
import WhyUsContent from "./WhyUsContent";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why businesses trust NRV Enterprises for industrial supplies, engine oil, and lubricants. Genuine products, expert support, competitive pricing — since 2021.",
  openGraph: {
    title: "Why Choose NRV Enterprises",
    description:
      "Genuine products, expert technical support, timely delivery, and competitive pricing. Find out why NRV Enterprises is the trusted choice in West Delhi.",
    url: "/why-us",
  },
};

export default function WhyUsPage() {
  return <WhyUsContent />;
}
