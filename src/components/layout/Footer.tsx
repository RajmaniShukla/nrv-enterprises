"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";

const PHONE = process.env.NEXT_PUBLIC_PHONE || "+91XXXXXXXXXX";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "info@nrventerprises.com";
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || "Your Address, City, State - PIN";

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const locale = useLocale();

  const localePath = (href: string) => `/${locale}${href === "/" ? "" : href}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">NRV</span>
              </div>
              <span className="font-bold text-white text-lg">NRV Enterprises</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {tf("tagline")}
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-xs font-bold">f</a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors text-xs font-bold">in</a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors text-xs font-bold">li</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { key: "home", href: "/" },
                { key: "about", href: "/about" },
                { key: "products", href: "/products" },
                { key: "services", href: "/services" },
                { key: "whyUs", href: "/why-us" },
              ].map((link) => (
                <li key={link.key}>
                  <Link href={localePath(link.href)} className="hover:text-blue-400 transition-colors">
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Engine Oils</li>
              <li>Gear Oils</li>
              <li>Hydraulic Oils</li>
              <li>Greases</li>
              <li>Industrial Lubricants</li>
              <li>Machine Parts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-blue-400 shrink-0" />
                <span className="text-gray-400">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-blue-400 transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-blue-400 transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© {year} NRV Enterprises. {tf("rights")}</p>
          <Link href={localePath("/contact")} className="hover:text-blue-400 transition-colors">
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
