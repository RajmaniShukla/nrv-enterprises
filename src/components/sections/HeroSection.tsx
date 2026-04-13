"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Trusted Lubricant Supplier — India
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
          >
            {t("tagline")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              {t("cta")}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/inquiry`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
