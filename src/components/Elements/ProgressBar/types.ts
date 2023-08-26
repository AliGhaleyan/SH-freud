export type ProgressBarTheme = "gray" | "yellow";

export type ProgressBarProps = {
  percent: number;
  theme?: ProgressBarTheme;
  className?: string;
};
