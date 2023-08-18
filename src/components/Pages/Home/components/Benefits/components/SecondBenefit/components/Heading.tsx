import { Label, Psyche } from "@/components/Elements";
import { CheckRoundIcon } from "@/components/Icons";

const Heading = () => {
  return (
    <div className="my-auto grid max-w-[28.625rem] gap-y-8 text-mindful-gray-80">
      <div className="flex">
        <Label className="bg-mindful-gray-20 text-mindful-gray-60">
          <Psyche width={8} height={8} />
          Benefit #2
        </Label>
      </div>
      <div className="grid gap-y-6">
        <h4 className="text-heading-lg font-bold">
          Self-Care Tools and Resources
        </h4>
        <p className="text-paragraph-xl font-medium text-mindful-gray-100">
          Access professional support anytime, anywhere with our virtual therapy
          sessions.
          <br />
          <br />
          Connect with licensed therapists through secure video calls and
          receive personalized counseling tailored to your specific needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {[
          "Access personalized mental health tools",
          "Connect with licensed therapists",
          "Track your progress and gain insights",
        ].map((item, key) => (
          <div
            key={key}
            className="flex items-center gap-2 text-label-md font-extrabold"
          >
            <span className="text-mindful-gray-60">
              <CheckRoundIcon width={24} height={24} />
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heading;
