"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Package, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { urlFor } from "../../../../sanity/image";
import PageHero from "@/components/ui/PageHero";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  description?: string;
  image?: object;
  inStock: boolean;
  featured: boolean;
}

const categoryKeys = [
  { key: "all", value: "" },
  { key: "engineOils", value: "engine-oils" },
  { key: "gearOils", value: "gear-oils" },
  { key: "hydraulicOils", value: "hydraulic-oils" },
  { key: "greases", value: "greases" },
  { key: "industrialLubricants", value: "industrial-lubricants" },
  { key: "machineParts", value: "machine-parts" },
];

export default function ProductsContent({ products }: { products: Product[] }) {
  const t = useTranslations("products");
  const locale = useLocale();

  return (
    <div>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* Category Filter — horizontally scrollable on mobile */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categoryKeys.map(({ key }, i) => (
              <button
                key={key}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors shrink-0 ${
                  i === 0
                    ? "bg-blue-700 text-white border-blue-700"
                    : "border-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700"
                }`}
              >
                {t(`filter.${key}` as Parameters<typeof t>[0])}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Package size={48} className="mx-auto mb-4 opacity-30" />
              <p>{t("noProducts")}</p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {products.map((product) => (
                <motion.div
                  key={product._id}
                  variants={staggerItem}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                    {product.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={urlFor(product.image).width(400).height(300).url()}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Package size={40} className="text-blue-300" />
                    )}
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                      {product.featured && (
                        <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                          {t("featured")}
                        </span>
                      )}
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        product.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {product.inStock ? t("inStock") : t("outOfStock")}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                      {product.category.replace(/-/g, " ")}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                    {product.description && (
                      <p className="text-gray-500 text-sm line-clamp-2 mb-3">{product.description}</p>
                    )}
                    <Link
                      href={`/${locale}/inquiry?product=${product.slug.current}`}
                      className="inline-flex items-center gap-1 text-blue-700 font-semibold text-sm hover:gap-2 transition-all"
                    >
                      {t("inquire")} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
