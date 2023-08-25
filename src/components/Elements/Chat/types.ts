import { PropsWithChildren } from "react";

type ChatLogoTheme = "yellow" | "green" | "orange";

export type ChatTheme = "gray" | "primary" | "white";

export type ChatSize = "sm" | "md";

export type ChatType = "send" | "receive";

export type ChatProps = PropsWithChildren<{
  type: ChatType;
  theme: ChatTheme;
  logoTheme: ChatLogoTheme;
  size?: ChatSize;
}>;
