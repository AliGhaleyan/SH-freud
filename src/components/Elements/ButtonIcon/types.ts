import { HTMLAttributes, ReactNode } from "react";

export type ButtonIconSize = "sm" | "md";

export type ButtonIconProps = Pick<
  HTMLAttributes<HTMLDivElement>,
  "className" | "onClick"
> & {
  icon: ReactNode;
  size?: ButtonIconSize;
};
