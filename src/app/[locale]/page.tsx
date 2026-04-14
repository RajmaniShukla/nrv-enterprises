import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import { getFeaturedProducts, getCompanyInfo } from "../../../sanity/queries";

export const revalidate = 60; // revalidate every 60 seconds

export const metadata: Metadata = {
  title: "NRV Enterprises — Industrial Supplies, Engine Oil & Lubricants in Delhi",
  description:
    "NRV Enterprises supplies industrial goods, engine oil, and lubricants in West Delhi. Quality products for machinery, vehicles, and industrial operations — since 2021.",
  openGraph: {
    title: "NRV Enterprises — Industrial Supplies, Engine Oil & Lubricants",
    description:
      "Quality industrial supplies, engine oil, and lubricants. Trusted by businesses across Delhi since 2021.",
    url: "/",
  },
};

export default async function Home() {
  const [products, companyInfo] = await Promise.all([
    getFeaturedProducts(),
    getCompanyInfo(),
  ]);

  return (
    <>
      <HeroSection />
      <StatsSection
        yearsOfExperience={companyInfo?.yearsOfExperience}
        teamSize={companyInfo?.teamSize}
      />
      <FeaturedProducts products={products} />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
