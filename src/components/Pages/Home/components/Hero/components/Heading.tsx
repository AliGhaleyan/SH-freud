import { Button, Label, Psyche } from "@/components/Elements";
import AIChatbotMarker from "@/components/Pages/Home/components/Hero/components/AIChatbotMarker";
import { ArrowRightIcon } from "@/components/Icons";

const Heading = () => {
  return (
    <div>
      <div className="grid gap-y-12">
        <div className="flex">
          <Label className="bg-mindful-gray-20 text-mindful-gray-60">
            <Psyche width={8} height={8} />
            free your mind
          </Label>
        </div>

        <div className="grid gap-y-6">
          <h2 className="text-[4.5rem] font-bold leading-[160%] tracking-[-0.2px]">
            Empathetic Mental Health
            <span className="relative text-empathy-orange-40">
              {" "}
              AI Chatbot
              <AIChatbotMarker />
            </span>
          </h2>
          <p className="text-paragraph-xl font-medium">
            Step into a world of cutting-edge technology and compassionate care,
            tailored to your unique needs.
          </p>
        </div>

        <div className="flex gap-2">
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
