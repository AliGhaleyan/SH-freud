import { Button } from "@/components/Elements";
import { ArrowRightIcon } from "@/components/Icons";

const CTAButtons = () => {
  return (
    <div className="flex flex-wrap justify-end gap-2">
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
  );
};

export default CTAButtons;
