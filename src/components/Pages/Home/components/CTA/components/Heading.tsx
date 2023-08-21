import { Button } from "@/components/Elements";
import { ArrowRightIcon } from "@/components/Icons";

const Heading = () => {
  return (
    <div className="mx-auto grid max-w-[42.75rem] gap-y-8 px-4 text-center text-white md:px-0">
      <h4 className="text-heading-md font-bold md:text-heading-2xl">
        Start Your Mental Health Journey!
      </h4>
      <p className="text-paragraph-lg font-medium md:text-paragraph-xl">
        Get started on your mental health journey today! Download the Freud.ai
        app and experience the benefits of our innovative solutions:
      </p>
      <div className="flex flex-col justify-center gap-2 md:flex-row">
        <Button
          type="fill"
          color="white"
          icon={<ArrowRightIcon width={24} height={24} />}
          buttonIconClassName="!bg-serenity-green-50 text-white"
        >
          Apple Store
        </Button>
        <Button
          type="fill"
          color="white"
          icon={<ArrowRightIcon width={24} height={24} />}
          buttonIconClassName="!bg-zen-yellow-40 text-white"
        >
          Google Play
        </Button>
      </div>
    </div>
  );
};

export default Heading;
