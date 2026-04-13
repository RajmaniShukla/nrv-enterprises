import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NRV Enterprises — Lubricants & Industrial Products",
    template: "%s | NRV Enterprises",
  },
  description:
    "NRV Enterprises is a trusted supplier of lubricants and industrial products in India. Engine oils, gear oils, hydraulic oils, greases, and more.",
  keywords: [
    "lubricants", "engine oil", "gear oil", "hydraulic oil",
    "industrial lubricants", "NRV Enterprises", "India",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "NRV Enterprises",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NRV Enterprises — Lubricants & Industrial Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRV Enterprises — Lubricants & Industrial Products",
    description: "Trusted supplier of lubricants and industrial products in India.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  const locale = params?.locale ?? "en";

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased bg-surface text-gray-900">
        {children}
      </body>
    </html>
  );
}
