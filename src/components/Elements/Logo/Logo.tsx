import LogoTitle from "./components/LogoTitle";
import { LogoProps } from "./types";
import classNames from "classnames";
import { LOGO_MARKER_SIZE } from "./consts";
import { LogoMark } from "@/components/Elements";

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
      <LogoMark
        width={LOGO_MARKER_SIZE[props.size]}
        height={LOGO_MARKER_SIZE[props.size]}
      />
      {!props.hideTitle && <LogoTitle size={size} />}
    </div>
  );
};

export default Logo;
