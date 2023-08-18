import { Container } from "@/components/Fragments";
import FirstBenefit from "./components/FirstBenefit";
import SecondBenefit from "./components/SecondBenefit";
import ThirdBenefit from "./components/ThirdBenefit";

const Benefits = () => {
  return (
    <Container className="grid gap-y-16 py-24 md:gap-y-28 md:px-16 lg:gap-y-52 xl:px-30">
      <FirstBenefit />
      <SecondBenefit />
      <ThirdBenefit />
    </Container>
  );
};

export default Benefits;
