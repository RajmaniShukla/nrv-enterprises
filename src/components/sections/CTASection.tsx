"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function CTASection() {
  const t = useTranslations("home.cta");
  const locale = useLocale();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black mb-4">
            {t("title")}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-blue-200 text-lg mb-8">
            {t("subtitle")}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href={`/${locale}/inquiry`}
              className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              {t("btn")} <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
