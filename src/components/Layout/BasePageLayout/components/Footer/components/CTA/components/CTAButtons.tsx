import { Button } from "@/components/Elements";
import { ArrowRightIcon } from "@/components/Icons";

const CTAButtons = () => {
  return (
    <div className="flex gap-2">
      <Button
        type="fill"
        color="orange"
        icon={<ArrowRightIcon width={24} height={24} />}
      >
        Apple Store
      </Button>
      <Button
        type="fill"
        color="green"
        icon={<ArrowRightIcon width={24} height={24} />}
      >
        Google Store
      </Button>
    </div>
  );
};

export default CTAButtons;
