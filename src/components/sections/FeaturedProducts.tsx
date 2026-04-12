"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Package } from "lucide-react";
import { urlFor } from "../../../sanity/image";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  description?: string;
  image?: object;
  inStock: boolean;
}

interface FeaturedProductsProps {
  products: Product[];
}

const categoryLabels: Record<string, string> = {
  "engine-oils": "Engine Oils",
  "gear-oils": "Gear Oils",
  "hydraulic-oils": "Hydraulic Oils",
  "greases": "Greases",
  "industrial-lubricants": "Industrial Lubricants",
  "machine-parts": "Machine Parts",
};

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const t = useTranslations("home");
  const tp = useTranslations("products");
  const locale = useLocale();

  if (!products || products.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t("featuredProducts")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t("featuredProductsSubtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={urlFor(product.image).width(400).height(300).url()}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Package size={48} className="text-blue-300" />
                )}
                {/* Stock badge */}
                <div className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${
                  product.inStock
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}>
                  {product.inStock ? tp("inStock") : tp("outOfStock")}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  {categoryLabels[product.category] || product.category}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{product.name}</h3>
                {product.description && (
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {product.description}
                  </p>
                )}
                <Link
                  href={`/${locale}/inquiry?product=${product.slug.current}`}
                  className="inline-flex items-center gap-1 text-blue-700 font-semibold text-sm hover:gap-2 transition-all"
                >
                  {tp("inquire")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-800 transition-colors"
          >
            {t("viewAll")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
