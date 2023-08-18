import { Container } from "@/components/Fragments";
import { FirstBenefit } from "./components/FirstBenefit";
import { SecondBenefit } from "./components/SecondBenefit";

const Benefits = () => {
  return (
    <Container className="grid gap-y-52 px-4 py-24 md:px-16 xl:px-30">
      <FirstBenefit />
      <SecondBenefit />
    </Container>
  );
};

export default Benefits;
