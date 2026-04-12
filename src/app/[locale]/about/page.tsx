import { getCompanyInfo } from "../../../../sanity/queries";
import AboutContent from "./AboutContent";

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo();
  return <AboutContent companyInfo={companyInfo} />;
}
