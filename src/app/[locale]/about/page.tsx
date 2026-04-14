import type { Metadata } from "next";
import { getCompanyInfo } from "../../../../sanity/queries";
import AboutContent from "./AboutContent";

export const revalidate = 300; // revalidate every 5 minutes

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NRV Enterprises — a trusted supplier of industrial supplies, engine oil, and lubricants based in West Delhi. Founded in 2021 by Vikas Tiwari.",
  openGraph: {
    title: "About NRV Enterprises",
    description:
      "Trusted industrial supplies and lubricants supplier in West Delhi, India. Our story, mission, and values.",
    url: "/about",
  },
};

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo();
  return <AboutContent companyInfo={companyInfo} />;
}
