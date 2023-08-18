import Heading from "./components/Heading";
import ImageContainer from "./components/ImageContainer";
import { BenefitContainer } from "@/components/Pages/Home/components/Benefits";

const SecondBenefit = () => {
  return (
    <BenefitContainer
      leftSideChildren={<ImageContainer />}
      rightSideChildren={<Heading />}
    />
  );
};

export default SecondBenefit;
