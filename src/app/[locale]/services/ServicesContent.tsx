"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Wrench, Truck, ShieldCheck, HeadphonesIcon, Package, BarChart3 } from "lucide-react";

interface Service {
  _id: string;
  title: string;
  description?: string;
  icon?: string;
  order: number;
}

const fallbackServices = [
  { _id: "1", title: "Product Supply & Delivery", description: "We supply a wide range of lubricants and industrial products directly to your location. Fast, reliable, and on schedule.", icon: "Truck", order: 1 },
  { _id: "2", title: "Technical Consultation", description: "Not sure which product fits your machinery? Our experts analyze your requirements and recommend the right solution.", icon: "Wrench", order: 2 },
  { _id: "3", title: "Quality Assurance", description: "Every product we supply is verified for quality. We only deal in certified, genuine products from trusted manufacturers.", icon: "ShieldCheck", order: 3 },
  { _id: "4", title: "After-Sales Support", description: "Our relationship doesn't end at delivery. We provide ongoing support to ensure you get the best out of our products.", icon: "HeadphonesIcon", order: 4 },
  { _id: "5", title: "Bulk Supply", description: "Special pricing and priority delivery for bulk orders. Ideal for industries, factories, and fleet operators.", icon: "Package", order: 5 },
  { _id: "6", title: "Custom Procurement", description: "Need a specific product not in our catalog? We procure it for you. Tell us what you need — we'll find it.", icon: "BarChart3", order: 6 },
];

const iconMap: Record<string, React.ElementType> = {
  Truck, Wrench, ShieldCheck, HeadphonesIcon, Package, BarChart3,
};

export default function ServicesContent({ services }: { services: Service[] }) {
  const t = useTranslations("services");
  const locale = useLocale();
  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t("hero.title")}</h1>
          <p className="text-blue-200 text-xl">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service) => {
              const Icon = iconMap[service.icon || ""] || Wrench;
              return (
                <div key={service._id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-700 transition-colors">
                    <Icon size={26} className="text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  {service.description && (
                    <p className="text-gray-500 leading-relaxed">{service.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">{t("cta.title")}</h2>
          <p className="text-blue-200 mb-8">{t("cta.subtitle")}</p>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            {t("cta.btn")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
