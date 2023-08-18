import { Label, Psyche } from "@/components/Elements";
import { BenefitHeadingProps } from "@/components/Pages/Home/components/Benefits/types";

const BenefitHeading = (props: BenefitHeadingProps) => {
  return (
    <div className="my-auto grid gap-y-8 text-mindful-gray-80 lg:max-w-[28.625rem]">
      <div className="flex">
        <Label className="bg-mindful-gray-20 text-mindful-gray-60">
          <Psyche width={8} height={8} />
          Benefit #{props.benefitIndex}
        </Label>
      </div>
      <div className="grid gap-y-6">
        <h4 className="text-heading-lg font-bold">{props.title}</h4>
        <p className="text-paragraph-xl font-medium text-mindful-gray-100">
          {props.description}
        </p>
      </div>
      {props.extraDescription}
    </div>
  );
};

export default BenefitHeading;
