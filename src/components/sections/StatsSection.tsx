"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

interface StatsProps {
  yearsOfExperience?: number;
  teamSize?: number;
}

export default function StatsSection({ yearsOfExperience = 3, teamSize = 3 }: StatsProps) {
  const t = useTranslations("home.stats");

  const stats = [
    { value: `${yearsOfExperience}+`, label: t("experience") },
    { value: "50+", label: t("products") },
    { value: "200+", label: t("clients") },
    { value: `${teamSize}`, label: t("team") },
  ];

  return (
    <section className="bg-blue-700 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <div className="text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
