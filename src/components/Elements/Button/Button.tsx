import { ButtonProps } from "./types";
import classNames from "classnames";
import { ButtonIcon } from "@/components/Elements";

const Button = ({ className, children, icon, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "btn",
        `btn-${props.type}`,
        `btn-${props.color}`,
        icon ? "py-2 pl-4 pr-2" : "px-10 py-4",
        className
      )}
      {...(props as object)}
    >
      {icon ? (
        <div className="flex w-full items-center">
          {children}
          <div className="ml-auto">
            <ButtonIcon size="sm" icon={icon} className="ml-10" />
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
