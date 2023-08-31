import { Button } from "@/components/Elements";
import { ArrowRightIcon } from "@/components/Icons";
import { Container } from "@/components/Fragments";

const MenuCTA = () => {
  return (
    <Container className="mt-auto flex justify-end">
      <div className="mt-12 flex w-full flex-col gap-x-3 gap-y-3 rounded-[2.5rem] bg-white p-2 md:w-auto md:flex-row md:rounded-full">
        <Button
          type="fill"
          color="orange"
          icon={<ArrowRightIcon width={24} height={24} />}
          className="w-full md:w-auto"
        >
          Apple Store
        </Button>
        <Button
          type="fill"
          color="green"
          icon={<ArrowRightIcon width={24} height={24} />}
          className="w-full md:w-auto"
        >
          Google Store
        </Button>
      </div>
    </Container>
  );
};

export default MenuCTA;
