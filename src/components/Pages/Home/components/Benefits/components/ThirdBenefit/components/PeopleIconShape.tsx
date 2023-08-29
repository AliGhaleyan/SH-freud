import classNames from "classnames";
import { GroupIcon } from "@/components/Icons";

const PeopleIconShape = () => {
  return (
    <div
      className={classNames(
        "absolute z-50 bg-white text-serenity-green-50 md:h-16 md:w-16",
        "rounded-full",
        "hidden items-center justify-center lg:flex",
        "left-[6.875rem] top-[9.375rem]"
      )}
    >
      <span className="md:h-8 md:w-8">
        <GroupIcon />
      </span>
    </div>
  );
};

export default PeopleIconShape;
