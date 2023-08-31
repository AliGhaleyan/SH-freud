import classNames from "classnames";
import { Psyche } from "@/components/Elements";

type Props = {
  label: string;
  isActive?: boolean;
};

const MenuLinkItem = (props: Props) => {
  return (
    <a
      className={classNames(
        "flex items-center justify-center gap-6 hover:text-white md:justify-start md:text-heading-lg",
        "rounded-full px-6 py-3 text-white md:px-8 md:py-4",
        "text-heading-md font-bold md:text-heading-sm",
        { "bg-mindful-gray-80": props.isActive }
      )}
      href="#"
    >
      {props.isActive && (
        <Psyche
          width={12}
          height={12}
          className="mx-auto text-serenity-green-50"
        />
      )}
      {props.label}
    </a>
  );
};

export default MenuLinkItem;
