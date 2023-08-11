import LogoMark from "./components/LogoMark";
import LogoTitle from "./components/LogoTitle";
import { LogoProps } from "./types";
import classNames from "classnames";

const Logo = (props: LogoProps) => {
  const size = props.size || "md";
  const direction = props.direction || "horizontal";

  return (
    <div
      className={classNames(
        { "flex items-center gap-3": direction == "horizontal" },
        { "flex flex-col items-center gap-4": direction == "vertical" }
      )}
    >
      <LogoMark size={size} />
      {!props.hideTitle && <LogoTitle size={size} />}
    </div>
  );
};

export default Logo;
