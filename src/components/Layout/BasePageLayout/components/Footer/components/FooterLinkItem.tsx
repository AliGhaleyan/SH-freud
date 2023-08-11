import classNames from "classnames";
import { Psyche } from "@/components/Elements";

type Props = {
  label: string;
  isActive?: boolean;
};

const FooterLinkItem = (props: Props) => {
  return (
    <div
      className={classNames(
        "grid gap-2 text-heading-md font-semibold",
        props.isActive ? "text-white" : "text-mindful-gray-40"
      )}
    >
      {props.isActive && (
        <Psyche
          width={8}
          height={8}
          className="mx-auto text-serenity-green-50"
        />
      )}
      {props.label}
    </div>
  );
};

export default FooterLinkItem;
