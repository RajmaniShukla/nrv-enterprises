"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("home.cta");
  const locale = useLocale();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">{t("title")}</h2>
        <p className="text-blue-200 text-lg mb-8">{t("subtitle")}</p>
        <Link
          href={`/${locale}/inquiry`}
          className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg"
        >
          {t("btn")} <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
