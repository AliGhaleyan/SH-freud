import classNames from "classnames";
import { GearIcon, HeartIcon } from "@/components/Icons";

const CurrentMoodBox = () => {
  return (
    <div
      className={classNames(
        "absolute z-50 w-[5.625rem] max-w-[5.625rem] bg-white shadow md:w-48 md:max-w-[12rem]",
        "rounded-lg md:rounded-2xl",
        "p-1.5 md:p-3",
        "grid gap-y-3",
        "bottom-14 right-9 md:bottom-12 md:left-2 md:right-auto"
      )}
    >
      <div className="flex justify-between gap-x-4">
        <div className="text-[8px] font-semibold text-mindful-gray-100 md:text-md">
          Current Mood
        </div>
        <span className="h-2.5 w-2.5 text-mindful-gray-60 md:h-5 md:w-5">
          <GearIcon />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gentle-violet-30 text-white md:h-12 md:w-12">
          <span className="h-3 w-3 md:h-6 md:w-6">
            <HeartIcon />
          </span>
        </div>
        <span className="text-label-sm font-bold text-mindful-gray-80 md:text-heading-xs">
          Happy
        </span>
      </div>
    </div>
  );
};

export default CurrentMoodBox;
