"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ShieldCheck, Award, Truck, HeadphonesIcon, Clock, ThumbsUp } from "lucide-react";

export default function WhyUsPage() {
  const t = useTranslations("whyUs");
  const locale = useLocale();

  const reasons = [
    { icon: ShieldCheck, title: "Genuine, Certified Products", desc: "We source only from verified manufacturers and authorized distributors. No counterfeits. No shortcuts." },
    { icon: Award, title: "3+ Years of Industry Experience", desc: "We understand the lubricant and industrial products market deeply — and that knowledge translates to better advice for you." },
    { icon: Truck, title: "Reliable & Timely Delivery", desc: "We know downtime is costly. Our logistics are built to ensure you receive your order when you need it." },
    { icon: HeadphonesIcon, title: "Expert Technical Support", desc: "Our team helps you choose the right product for your application — not just what's in stock." },
    { icon: Clock, title: "Quick Response Time", desc: "Inquiries answered within hours. We respect your time and value your business." },
    { icon: ThumbsUp, title: "Competitive Pricing", desc: "Quality doesn't have to be expensive. We offer fair, transparent pricing with no hidden charges." },
  ];

  const testimonials = [
    { name: "Ramesh Sharma", company: "Sharma Industries", text: "NRV Enterprises has been our go-to supplier for engine oils for 2 years. Consistent quality and always on time." },
    { name: "Priya Patel", company: "Patel Automobiles", text: "Great service and genuine products. They helped us pick the right hydraulic oil for our machinery." },
    { name: "Anil Kumar", company: "Kumar Transport Co.", text: "Bulk orders handled smoothly. Excellent pricing for fleet operators. Highly recommended." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t("hero.title")}</h1>
          <p className="text-blue-200 text-xl">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">{t("reasons.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all">
                  <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">{t("testimonials.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{item.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8">{t("cta.title")}</h2>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            {t("cta.btn")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
