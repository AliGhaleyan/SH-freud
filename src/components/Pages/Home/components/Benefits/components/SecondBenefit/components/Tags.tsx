import { Tag } from "@/components/Elements";
import { LocationIcon, TelephoneIcon } from "@/components/Icons";
import classNames from "classnames";

const Tags = () => {
  return (
    <div
      className={classNames(
        "absolute z-[1050] flex gap-2 whitespace-nowrap text-mindful-gray-80",
        "top-[10.5rem] md:top-[13.125rem] xl:top-[16.75rem]",
        "pl-14 md:pl-24 lg:pl-40 xl:pl-32"
      )}
    >
      <Tag className="my-auto bg-white" icon={<TelephoneIcon />} size="sm">
        Doctor Khan Phone
      </Tag>
      <Tag className="my-auto bg-white" icon={<LocationIcon />} size="sm">
        Physical Address
      </Tag>
    </div>
  );
};

export default Tags;
