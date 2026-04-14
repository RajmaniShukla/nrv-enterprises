import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "NRV Enterprises — Industrial Supplies, Engine Oil & Lubricants",
    template: "%s | NRV Enterprises",
  },
  description:
    "NRV Enterprises is a trusted supplier of industrial supplies, engine oil, and lubricants in West Delhi, India. Quality products for machinery, vehicles & industrial operations — since 2021.",
  keywords: [
    "NRV Enterprises",
    "industrial supplies Delhi",
    "engine oil supplier Delhi",
    "lubricants supplier India",
    "gear oil",
    "hydraulic oil",
    "industrial lubricants",
    "Tikri Kalan",
    "West Delhi industrial supplier",
    "machine oil Delhi",
  ],
  authors: [{ name: "NRV Enterprises" }],
  creator: "NRV Enterprises",
  publisher: "NRV Enterprises",
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
    title: "NRV Enterprises — Industrial Supplies, Engine Oil & Lubricants",
    description:
      "Trusted supplier of industrial supplies, engine oil, and lubricants in West Delhi. Serving businesses across India since 2021.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NRV Enterprises — Industrial Supplies, Engine Oil & Lubricants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRV Enterprises — Industrial Supplies, Engine Oil & Lubricants",
    description:
      "Trusted supplier of industrial supplies, engine oil, and lubricants in West Delhi, India. Since 2021.",
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
