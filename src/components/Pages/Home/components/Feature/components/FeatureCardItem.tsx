import { FeatureCardProps } from "@/components/Pages/Home/components/Feature/types";
import { ButtonIcon } from "@/components/Elements";
import { ArrowRightIcon } from "@/components/Icons";

const FeatureCardItem = (props: FeatureCardProps) => {
  return (
    <div className="rounded-5xl bg-white p-6">
      <div className="flex h-full flex-col gap-6">
        {props.icon}
        <div className="grid gap-2">
          <h6 className="text-heading-xs font-bold text-mindful-gray-80">
            {props.title}
          </h6>
          <p className="text-paragraph-lg text-mindful-gray-100">
            {props.description}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between text-mindful-gray-80">
          <span className="text-label-md font-extrabold uppercase">
            Learn More
          </span>
          <ButtonIcon
            icon={<ArrowRightIcon width={24} height={24} />}
            size="sm"
            className="bg-zen-yellow-40"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCardItem;
