"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Award, Truck, HeadphonesIcon } from "lucide-react";

const icons = [ShieldCheck, Award, Truck, HeadphonesIcon];

export default function WhyUsSection() {
  const t = useTranslations("home.whyUs");

  const items = [
    { key: "quality", icon: icons[0] },
    { key: "expertise", icon: icons[1] },
    { key: "delivery", icon: icons[2] },
    { key: "support", icon: icons[3] },
  ] as const;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ key, icon: Icon }) => (
            <div key={key} className="text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                <Icon size={28} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
