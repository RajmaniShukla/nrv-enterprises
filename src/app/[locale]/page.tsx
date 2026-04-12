import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import { getFeaturedProducts, getCompanyInfo } from "../../../sanity/queries";

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
