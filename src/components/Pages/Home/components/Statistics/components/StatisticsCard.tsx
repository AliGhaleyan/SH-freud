import { ButtonIcon } from "@/components/Elements";
import { ArrowRightIcon } from "@/components/Icons";

type Props = {
  title: string;
  orangeLabel: string;
  subtitle: string;
};

const StatisticsCard = (props: Props) => {
  return (
    <div className="grid items-center gap-2 rounded-5xl bg-white p-4 md:flex md:gap-0 md:p-8">
      <div className="grid gap-1">
        <div className="text-heading-xl font-bold text-mindful-gray-80 md:text-display-sm">
          {props.title}
          <span className="text-empathy-orange-40">{props.orangeLabel}</span>
        </div>
        <div className="text-xl font-semibold text-mindful-gray-100 md:text-2xl">
          {props.subtitle}
        </div>
      </div>
      <div className="ml-auto">
        <ButtonIcon
          className="ml-4 !bg-mindful-gray-10 text-mindful-gray-60"
          icon={<ArrowRightIcon width={24} height={24} />}
          size="md"
        />
      </div>
    </div>
  );
};

export default StatisticsCard;
