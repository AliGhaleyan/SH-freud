import { Container } from "@/components/Fragments";
import { ChatContainer } from "./components/ChatContainer";
import { TextSlider } from "./components/TextSlider";

const Testimonials = () => {
  return (
    <Container className="grid justify-between gap-y-12 rounded-6xl bg-mindful-gray-20 px-4 py-14 xl:flex xl:gap-0 xl:py-4">
      <ChatContainer />
      <TextSlider />
    </Container>
  );
};

export default Testimonials;
