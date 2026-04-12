"use client";

import { useTranslations } from "next-intl";
import { Target, Eye, ShieldCheck, Users, Handshake, TrendingUp } from "lucide-react";

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
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t("hero.title")}</h1>
          <p className="text-blue-200 text-xl">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">{t("story.title")}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{companyInfo?.description || t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p>{t("story.p3")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${companyInfo?.yearsOfExperience || 3}+`, label: "Years Experience" },
                { value: "50+", label: "Products" },
                { value: "200+", label: "Happy Clients" },
                { value: `${companyInfo?.teamSize || 3}`, label: "Team Members" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-blue-700 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("mission.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("mission.desc")}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Eye size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("vision.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("vision.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">
            {t("values.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map(({ key, icon: Icon }) => (
              <div key={key} className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-700 hover:text-white transition-colors group">
                <Icon size={32} className="mx-auto mb-3 text-blue-700 group-hover:text-white transition-colors" />
                <div className="font-bold text-gray-900 group-hover:text-white transition-colors text-sm">
                  {t(`values.${key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
