import { BasePageLayout } from "@/components/Layout";
import { Hero } from "./components/Hero";
import { CompanySlider } from "./components/CompanySlider";

const HomePage = () => {
  return (
    <BasePageLayout>
      <Hero />
      <CompanySlider />
    </BasePageLayout>
  );
};

export default HomePage;
