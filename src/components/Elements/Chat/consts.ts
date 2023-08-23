import { ChatProps } from "@/components/Elements/Chat/types";

export const CHAT_TYPE_CLASS: Record<ChatProps["type"], string> = {
  receive: "chat-item-container-receive",
  send: "chat-item-container-send",
};

export const CHAT_THEME_CLASS: Record<ChatProps["theme"], string> = {
  gray: "chat-item-gray",
  white: "chat-item-white",
  primary: "chat-item-primary",
};

export const CHAT_SIZE_CLASS: Record<ChatProps["size"], string> = {
  sm: "chat-item-sm",
  md: "chat-item-md",
};
