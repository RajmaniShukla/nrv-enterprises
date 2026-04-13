"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p variants={fadeUp} className="text-blue-200 text-xl max-w-2xl">
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
