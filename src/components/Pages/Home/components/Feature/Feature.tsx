import { Container } from "@/components/Fragments";
import Heading from "./components/Heading";
import CardList from "./components/CardList";

const Feature = () => {
  return (
    <Container className="grid gap-y-12 rounded-6xl bg-serenity-green-50 px-4 py-20 md:px-16 md:py-24 xl:px-30 xl:py-[6.625rem]">
      <Heading />
      <CardList />
    </Container>
  );
};

export default Feature;
