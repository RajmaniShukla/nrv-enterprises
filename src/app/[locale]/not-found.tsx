"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Package } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function NotFound() {
  const locale = useLocale();

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        className="text-center max-w-lg"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Gear icon decorative */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Package size={36} className="text-blue-600" />
              </div>
            </div>
            {/* 404 badge */}
            <div className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs font-black px-2 py-1 rounded-full">
              404
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl sm:text-7xl font-black text-gray-900 mb-4 tracking-tight"
        >
          4<span className="text-blue-700">0</span>4
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="text-xl sm:text-2xl font-bold text-gray-800 mb-3"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-500 text-base mb-10 leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors"
          >
            <Package size={18} />
            Browse Products
          </Link>
        </motion.div>

        {/* Back link */}
        <motion.div variants={fadeUp} className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={14} />
            Go back
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
