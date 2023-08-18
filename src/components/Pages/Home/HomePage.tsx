import { BasePageLayout } from "@/components/Layout";
import { Hero } from "./components/Hero";
import { CompanySlider } from "./components/CompanySlider";
import { Statistics } from "./components/Statistics";
import { Feature } from "./components/Feature";
import { Benefits } from "./components/Benefits";

const HomePage = () => {
  return (
    <BasePageLayout>
      <Hero />
      <CompanySlider />
      <Statistics />
      <Feature />
      <Benefits />
    </BasePageLayout>
  );
};

export default HomePage;
