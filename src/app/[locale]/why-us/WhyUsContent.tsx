"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ShieldCheck, Award, Truck, HeadphonesIcon, Clock, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import PageHero from "@/components/ui/PageHero";

export default function WhyUsContent() {
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
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-3xl font-black text-gray-900 text-center mb-12"
          >
            {t("reasons.title")}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={staggerItem}
                  className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all"
                >
                  <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-3xl font-black text-gray-900 text-center mb-12"
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.name}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-black mb-8">{t("cta.title")}</motion.h2>
          <motion.div variants={fadeUp}>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              {t("cta.btn")} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
