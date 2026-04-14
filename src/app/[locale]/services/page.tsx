import type { Metadata } from "next";
import { getAllServices } from "../../../../sanity/queries";
import ServicesContent from "./ServicesContent";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Services",
  description:
    "NRV Enterprises offers expert guidance, product consultation, and reliable supply of industrial products. Let our team help you find the right lubricant or industrial solution.",
  openGraph: {
    title: "Services — NRV Enterprises",
    description:
      "Expert product consultation, industrial supply services, and dedicated support from NRV Enterprises, West Delhi.",
    url: "/services",
  },
};

export default async function ServicesPage() {
  const services = await getAllServices();
  return <ServicesContent services={services} />;
}
