import { PropsWithChildren } from "react";

export type ChatTheme = "gray" | "primary" | "white";

export type ChatLogoTheme = "yellow" | "green" | "orange";

export type ChatSize = "sm" | "md";

export type ChatProps = PropsWithChildren<{
  type: "send" | "receive";
  theme: ChatTheme;
  logoTheme: ChatLogoTheme;
  size?: ChatSize;
}>;
