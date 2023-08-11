import { ButtonIconProps } from "./types";
import classNames from "classnames";
import { BUTTON_ICON_SIZE_CLASS } from "./consts";

const ButtonIcon = (props: ButtonIconProps) => {
  const size = props.size || "md";

  return (
    <button
      className={classNames(
        "flex items-center justify-center rounded-full bg-mindful-gray-white",
        BUTTON_ICON_SIZE_CLASS[size]
      )}
    >
      {props.icon}
    </button>
  );
};

export default ButtonIcon;
