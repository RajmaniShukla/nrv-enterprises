import { getAllProducts } from "../../../../sanity/queries";
import ProductsContent from "./ProductsContent";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return <ProductsContent products={products} />;
}
