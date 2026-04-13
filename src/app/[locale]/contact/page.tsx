"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animations";
import ContactForm from "./ContactForm";
import PageHero from "@/components/ui/PageHero";

const PHONE = process.env.NEXT_PUBLIC_PHONE || "+91XXXXXXXXXX";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "info@nrventerprises.com";
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || "Your Address, City, State - PIN";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "+91XXXXXXXXXX";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — Contact Info */}
            <motion.div
              className="space-y-6"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {/* Info Cards */}
              {[
                {
                  icon: MapPin,
                  label: t("info.address"),
                  value: ADDRESS,
                  href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
                },
                {
                  icon: Phone,
                  label: t("info.phone"),
                  value: PHONE,
                  href: `tel:${PHONE}`,
                },
                {
                  icon: Mail,
                  label: t("info.email"),
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  icon: Clock,
                  label: t("info.hours"),
                  value: t("info.hoursValue"),
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:text-blue-700 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-gray-800 font-medium">{value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-colors shadow-sm"
              >
                <MessageCircle size={22} />
                {t("info.whatsapp")}
              </a>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-56">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NRV Enterprises Location"
                />
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h2 className="text-2xl font-black text-gray-900 mb-6">{t("hero.title")}</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
