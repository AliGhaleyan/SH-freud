import Heading from "./components/Heading";
import ImageContainer from "./components/ImageContainer";
import { BenefitContainer } from "@/components/Pages/Home/components/Benefits";

const FirstBenefit = () => {
  return (
    <BenefitContainer
      leftSideChildren={<Heading />}
      rightSideChildren={<ImageContainer />}
    />
  );
};

export default FirstBenefit;
