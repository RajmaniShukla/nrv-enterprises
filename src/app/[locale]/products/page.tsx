import type { Metadata } from "next";
import { getAllProducts } from "../../../../sanity/queries";
import ProductsContent from "./ProductsContent";

export const revalidate = 60; // revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse NRV Enterprises' range of industrial supplies — engine oils, gear oils, hydraulic oils, greases, industrial lubricants, and machine parts. Available in Delhi and across India.",
  openGraph: {
    title: "Products — NRV Enterprises",
    description:
      "Engine oils, gear oils, hydraulic oils, greases, and industrial lubricants. Quality products from NRV Enterprises, West Delhi.",
    url: "/products",
  },
};

export default async function ProductsPage() {
  const products = await getAllProducts();
  return <ProductsContent products={products} />;
}
