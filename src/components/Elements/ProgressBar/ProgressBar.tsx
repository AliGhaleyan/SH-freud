import classNames from "classnames";

type Props = {
  percent: number;
  theme?: "gray" | "yellow";
  className?: string;
};

const THEME_CLASS: Record<Props["theme"], string> = {
  gray: "progress-bar-gray",
  yellow: "progress-bar-yellow",
};

const ProgressBar = (props: Props) => {
  const theme = props.theme || "gray";

  return (
    <div
      className={classNames(
        "progress-bar",
        THEME_CLASS[theme],
        props.className
      )}
    >
      <div style={{ width: `${props.percent}%` }} className="h-full" />
    </div>
  );
};

export default ProgressBar;
