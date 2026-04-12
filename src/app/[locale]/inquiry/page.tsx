"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Clock, ShieldCheck, Phone } from "lucide-react";
import InquiryForm from "./InquiryForm";

export default function InquiryPage() {
  const t = useTranslations("inquiry");

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t("hero.title")}</h1>
          <p className="text-blue-200 text-xl">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left — Trust signals */}
            <div className="space-y-5">
              {[
                { icon: Clock, title: "24-Hour Response", desc: "We'll get back to you within one business day with a competitive quote." },
                { icon: ShieldCheck, title: "No Obligation", desc: "A quote is just a quote. No pressure, no hidden charges." },
                { icon: Phone, title: "Prefer to Call?", desc: `Reach us directly at ${process.env.NEXT_PUBLIC_PHONE || "+91XXXXXXXXXX"}` },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={20} className="text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-6">{t("hero.title")}</h2>
              <Suspense fallback={<div className="text-gray-400 text-sm">Loading form...</div>}>
                <InquiryForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
