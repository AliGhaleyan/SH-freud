import { Container } from "@/components/Fragments";
import Heading from "./components/Heading";
import PostsList from "./components/PostsList";
import { Button } from "@/components/Elements";
import { ArrowRightIcon } from "@/components/Icons";

const LatestNews = () => {
  return (
    <Container
      parentClassName="py-24 max-w-[58.25rem] mx-auto"
      className="grid gap-y-12"
    >
      <Heading />
      <PostsList />
      <div className="flex justify-center">
        <Button
          type="fill"
          color="green"
          icon={<ArrowRightIcon width={24} height={24} />}
        >
          See All News
        </Button>
      </div>
    </Container>
  );
};

export default LatestNews;
