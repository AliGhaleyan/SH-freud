import { Label, Psyche } from "@/components/Elements";

const Heading = () => {
  return (
    <div className="my-auto grid max-w-[28.625rem] gap-y-8 text-mindful-gray-80">
      <div className="flex">
        <Label className="bg-mindful-gray-20 text-mindful-gray-60">
          <Psyche width={8} height={8} />
          Benefit #1
        </Label>
      </div>
      <div className="grid gap-y-6">
        <h4 className="text-heading-lg font-bold">AI-Powered Assessment</h4>
        <p className="text-paragraph-xl font-medium text-mindful-gray-100">
          Gain valuable insights into your mental well-being through our
          advanced AI-powered assessments.
          <br />
          <br />
          Our intelligent algorithms analyze your responses to provide
          personalized assessments and recommendations for improvement.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="grid gap-y-2">
          <div className="text-heading-lg font-bold">
            99.5<span className="text-mindful-gray-60">%</span>
          </div>
          <p className="text-label-md font-extrabold uppercase text-mindful-gray-100">
            connect rate
          </p>
        </div>
        <div className="grid gap-y-2">
          <div className="text-heading-lg font-bold">
            25K<span className="text-mindful-gray-60">*</span>
          </div>
          <p className="text-label-md font-extrabold uppercase text-mindful-gray-100">
            ai healthcare models
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
