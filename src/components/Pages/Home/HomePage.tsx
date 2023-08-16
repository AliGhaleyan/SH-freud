import { BasePageLayout } from "@/components/Layout";
import { Hero } from "./components/Hero";
import { CompanySlider } from "./components/CompanySlider";
import { Statistics } from "./components/Statistics";

const HomePage = () => {
  return (
    <BasePageLayout>
      <Hero />
      <CompanySlider />
      <Statistics />
    </BasePageLayout>
  );
};

export default HomePage;
