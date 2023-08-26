import classNames from "classnames";
import { ProgressBarProps } from "./types";
import { PROGRESS_BAR_THEME_CLASS } from "./consts";

const ProgressBar = (props: ProgressBarProps) => {
  const theme = props.theme || "gray";

  return (
    <div
      className={classNames(
        "progress-bar",
        PROGRESS_BAR_THEME_CLASS[theme],
        props.className
      )}
    >
      <div style={{ width: `${props.percent}%` }} className="h-full" />
    </div>
  );
};

export default ProgressBar;
