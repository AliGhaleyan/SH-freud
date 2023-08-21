import { Container } from "@/components/Fragments";
import Heading from "./components/Heading";
import ImageContainer from "./components/ImageContainer";

const CTA = () => {
  return (
    <Container
      parentClassName="pt-4 pb-0"
      className="grid gap-y-12 overflow-hidden rounded-6xl bg-empathy-orange-40 py-[5.125rem] md:gap-y-14 md:px-[5.25rem] md:pb-0 md:pt-32"
    >
      <Heading />
      <ImageContainer />
    </Container>
  );
};

export default CTA;
