"use client";

import { useTranslations } from "next-intl";
import { Target, Eye, ShieldCheck, Users, Handshake, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import PageHero from "@/components/ui/PageHero";

interface CompanyInfo {
  description?: string;
  yearsOfExperience?: number;
  teamSize?: number;
}

export default function AboutContent({ companyInfo }: { companyInfo: CompanyInfo | null }) {
  const t = useTranslations("about");

  const values = [
    { key: "quality", icon: ShieldCheck },
    { key: "trust", icon: Handshake },
    { key: "service", icon: Users },
    { key: "growth", icon: TrendingUp },
  ] as const;

  return (
    <div>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-6">{t("story.title")}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{companyInfo?.description || t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p>{t("story.p3")}</p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {[
                { value: `${companyInfo?.yearsOfExperience || 3}+`, label: "Years Experience" },
                { value: "50+", label: "Products" },
                { value: "200+", label: "Happy Clients" },
                { value: `${companyInfo?.teamSize || 3}`, label: "Team Members" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerItem} className="bg-blue-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-blue-700 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { icon: Target, titleKey: "mission.title" as const, descKey: "mission.desc" as const },
              { icon: Eye, titleKey: "vision.title" as const, descKey: "vision.desc" as const },
            ].map(({ icon: Icon, titleKey, descKey }) => (
              <motion.div key={titleKey} variants={staggerItem} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-3xl font-black text-gray-900 mb-10 text-center"
          >
            {t("values.title")}
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {values.map(({ key, icon: Icon }) => (
              <motion.div
                key={key}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-700 hover:text-white transition-colors group cursor-default"
              >
                <Icon size={32} className="mx-auto mb-3 text-blue-700 group-hover:text-white transition-colors" />
                <div className="font-bold text-gray-900 group-hover:text-white transition-colors text-sm">
                  {t(`values.${key}`)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
