"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "services", href: "/services" },
  { key: "whyUs", href: "/why-us" },
  { key: "contact", href: "/contact" },
];

function switchLocale(pathname: string, currentLocale: string, targetLocale: string): string {
  // usePathname() from next/navigation returns the FULL path including locale
  // e.g. /en/about → strip /en → /about, then prepend /hi → /hi/about
  const withoutLocale = pathname.replace(new RegExp(`^/${currentLocale}`), "") || "/";
  return `/${targetLocale}${withoutLocale === "/" ? "" : withoutLocale}`;
}

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // next-intl's usePathname returns path WITHOUT locale, e.g. "/about" or "/"
  const localePath = (href: string) => `/${locale}${href === "/" ? "" : href}`;
  const isActivePath = (href: string) => pathname === `/${locale}${href === "/" ? "" : href}`;

  const otherLocale = locale === "en" ? "hi" : "en";
  const otherLocalePath = switchLocale(pathname, locale, otherLocale);
  const toggleLabel = locale === "en" ? "हि" : "EN";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={localePath("/")} className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">NRV</span>
            </div>
            <span className="font-bold text-gray-900 text-lg hidden sm:block">
              NRV Enterprises
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const href = localePath(link.href);
              const isActive = isActivePath(link.href);
              return (
                <Link
                  key={link.key}
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                  }`}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <Link
              href={otherLocalePath}
              className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-blue-700 border border-gray-200 rounded-md px-2 py-1 hover:border-blue-300 transition-colors"
            >
              <Globe size={14} />
              <span>{toggleLabel}</span>
            </Link>

            {/* CTA Button */}
            <Link
              href={localePath("/inquiry")}
              className="hidden sm:block bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              {t("inquiry")}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-700 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const href = localePath(link.href);
            const isActive = isActivePath(link.href);
            return (
              <Link
                key={link.key}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                {t(link.key)}
              </Link>
            );
          })}
          <Link
            href={localePath("/inquiry")}
            onClick={() => setMenuOpen(false)}
            className="block mt-2 bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-blue-800 transition-colors"
          >
            {t("inquiry")}
          </Link>
        </div>
      )}
    </header>
  );
}
