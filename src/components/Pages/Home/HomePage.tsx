import { BasePageLayout } from "@/components/Layout";
import { Hero } from "./components/Hero";
import { CompanySlider } from "./components/CompanySlider";
import { Statistics } from "./components/Statistics";
import { Feature } from "./components/Feature";
import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { LatestNews } from "./components/LatestNews";

const HomePage = () => {
  return (
    <BasePageLayout>
      <Hero />
      <CompanySlider />
      <Statistics />
      <Feature />
      <Benefits />
      <CTA />
      <LatestNews />
    </BasePageLayout>
  );
};

export default HomePage;
