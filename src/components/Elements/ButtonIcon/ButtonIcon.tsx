import { ButtonIconProps } from "./types";
import classNames from "classnames";
import { BUTTON_ICON_SIZE_CLASS } from "./consts";

const ButtonIcon = (props: ButtonIconProps) => {
  const size = props.size || "md";

  return (
    <div
      className={classNames(
        "btn-icon flex cursor-pointer items-center justify-center rounded-full bg-white",
        BUTTON_ICON_SIZE_CLASS[size],
        props.className
      )}
      onClick={props.onClick}
    >
      {props.icon}
    </div>
  );
};

export default ButtonIcon;
