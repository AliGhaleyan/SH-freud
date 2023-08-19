import { Button, Label, Psyche } from "@/components/Elements";
import AIChatbotMarker from "@/components/Pages/Home/components/Hero/components/AIChatbotMarker";
import { ArrowRightIcon } from "@/components/Icons";

const Heading = () => {
  return (
    <div className="z-[60] px-4 md:pb-20 lg:px-0 xl:pb-0">
      <div className="grid gap-y-12">
        <div className="flex justify-center lg:justify-start">
          <Label className="bg-mindful-gray-20 text-mindful-gray-60">
            <Psyche width={8} height={8} />
            free your mind
          </Label>
        </div>

        <div className="grid gap-y-6 text-center lg:text-left">
          <h2 className="text-heading-lg font-bold leading-[160%] tracking-[-0.2px] lg:text-[3.75rem] xl:text-[4.5rem]">
            Empathetic Mental Health
            <div className="relative mx-auto w-fit justify-center text-empathy-orange-40 lg:mx-0 lg:justify-start">
              {" "}
              AI Chatbot
              <AIChatbotMarker />
            </div>
          </h2>
          <p className="text-paragraph-xl font-medium">
            Step into a world of cutting-edge technology and compassionate care,
            tailored to your unique needs.
          </p>
        </div>

        <div className="grid gap-2 lg:flex">
          <Button type="outline" color="gray">
            Try Demo
          </Button>
          <Button type="fill" color="green" icon={<ArrowRightIcon />}>
            Download The App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
