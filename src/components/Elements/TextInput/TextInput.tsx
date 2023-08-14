import { TextInputProps } from "./types";
import classNames from "classnames";

const TextInput = ({
  className,
  icon,
  buttonIcon,
  ...props
}: TextInputProps) => {
  return (
    <div
      className={classNames(
        "relative flex items-center rounded-full bg-mindful-gray-70 px-4 text-white",
        { "pr-0": !!buttonIcon }
      )}
    >
      {icon}
      <input
        type="text"
        className={classNames(
          "w-full bg-transparent p-4 font-bold text-white outline-none placeholder:font-bold placeholder:text-white",
          className,
          { "pl-2": !!icon }
        )}
        {...props}
      />
      {buttonIcon && <div>{buttonIcon}</div>}
    </div>
  );
};

export default TextInput;
