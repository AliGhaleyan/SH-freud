import { ReactNode } from "react";

export type ButtonType = "fill" | "outline";

export type ButtonColor = "orange" | "green" | "gray" | "white";

export type ButtonProps = React.PropsWithChildren<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    type: ButtonType;
    color: ButtonColor;
    icon?: ReactNode;
    buttonIconClassName?: string;
  }
>;
