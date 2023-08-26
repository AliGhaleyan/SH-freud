import { FullscreenIcon, QuestionRoundIcon } from "@/components/Icons";
import { ProgressBar } from "@/components/Elements";
import classNames from "classnames";

const MentalHealthLevelBox = () => {
  return (
    <div
      className={classNames(
        "absolute left-0 z-50 bg-white shadow md:-left-20",
        "grid gap-2 md:gap-4",
        "rounded-xl md:rounded-3xl",
        "max-w-[5.875rem] md:max-w-[11.75rem]",
        "p-2 md:p-4"
      )}
    >
      <div className="flex gap-4 text-[8px] font-semibold text-mindful-gray-100 md:text-md">
        Mental Health Level
        <span className="h-2.5 w-2.5 text-mindful-gray-60 md:h-5 md:w-5">
          <FullscreenIcon />
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-lg font-bold text-mindful-gray-80 md:text-heading-md">
        58.92%
        <span className="h-3 w-3 text-mindful-gray-20 md:h-6 md:w-6">
          <QuestionRoundIcon />
        </span>
      </div>
      <ProgressBar percent={65} theme="yellow" className="rounded-full" />
    </div>
  );
};

export default MentalHealthLevelBox;
