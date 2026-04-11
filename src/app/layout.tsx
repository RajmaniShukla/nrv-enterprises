import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NRV Enterprises",
  description: "Leading supplier of lubricants and machine-related products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
