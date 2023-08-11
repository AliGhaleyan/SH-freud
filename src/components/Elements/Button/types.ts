export type ButtonType = "fill" | "outline";

export type ButtonColor = "orange" | "green" | "gray";

export type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type: ButtonType;
    color: ButtonColor;
    icon?: React.ReactNode;
  }
>;
