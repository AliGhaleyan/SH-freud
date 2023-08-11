export type LogoSize = "md" | "lg";

export type LogoDirection = "vertical" | "horizontal";

export type LogoProps = {
  size?: LogoSize;
  direction?: LogoDirection;
  hideTitle?: boolean;
};

export type LogoMarkProps = { size: LogoSize };
