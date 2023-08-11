import classNames from "classnames";
import { Psyche } from "@/components/Elements";

type Props = {
  label: string;
  isActive?: boolean;
};

const FooterLinkItem = (props: Props) => {
  return (
    <a
      className={classNames(
        "grid gap-2 text-heading-md font-semibold hover:text-white",
        props.isActive ? "text-white" : "text-mindful-gray-40"
      )}
      href="#"
    >
      {props.isActive && (
        <Psyche
          width={8}
          height={8}
          className="mx-auto text-serenity-green-50"
        />
      )}
      {props.label}
    </a>
  );
};

export default FooterLinkItem;
