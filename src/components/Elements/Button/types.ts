export type ButtonType = "fill" | "outline";

export type ButtonColor = "orange" | "green" | "gray";

export type ButtonProps = React.PropsWithChildren<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    type: ButtonType;
    color: ButtonColor;
    icon?: React.ReactNode;
  }
>;
