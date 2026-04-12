"use client";

import { useTranslations } from "next-intl";

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
    <section className="bg-blue-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
