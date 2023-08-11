import { ButtonIconProps } from "./types";
import classNames from "classnames";
import { BUTTON_ICON_SIZE_CLASS } from "./consts";

const ButtonIcon = (props: ButtonIconProps) => {
  const size = props.size || "md";

  return (
    <button
      className={classNames(
        "btn-icon flex items-center justify-center rounded-full bg-white",
        BUTTON_ICON_SIZE_CLASS[size]
      )}
    >
      {props.icon}
    </button>
  );
};

export default ButtonIcon;
