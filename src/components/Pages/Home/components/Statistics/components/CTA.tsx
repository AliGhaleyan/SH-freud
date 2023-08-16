import { ArrowRightIcon, QuestionRoundIcon } from "@/components/Icons";
import { ButtonIcon } from "@/components/Elements";

const CTA = () => {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
      <div className="flex items-center gap-2 rounded-4xl bg-serenity-green-20 p-6 text-serenity-green-80">
        <QuestionRoundIcon width={24} height={24} />
        <div className="text-label-sm font-extrabold uppercase">
          Where do we get the numbers?
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 md:justify-end">
        <div className="font-bold text-mindful-gray-80">See All Statistics</div>
        <ButtonIcon
          icon={<ArrowRightIcon width={24} height={24} />}
          className="!bg-mindful-gray-80 text-white"
        />
      </div>
    </div>
  );
};

export default CTA;
