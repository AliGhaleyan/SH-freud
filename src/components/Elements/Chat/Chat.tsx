import { ChatProps } from "@/components/Elements/Chat/types";
import { LogoMark } from "@/components/Elements";
import classNames from "classnames";
import { CHAT_SIZE_CLASS, CHAT_THEME_CLASS, CHAT_TYPE_CLASS } from "./consts";
import ReceiveBottomIcon from "@/components/Elements/Chat/components/ReceiveBottomIcon";
import SenderBottomIcon from "@/components/Elements/Chat/components/SenderBottomIcon";

const Chat = (props: ChatProps) => {
  const size = props.size || "md";
  const bodyContent = <div className="chat-item-body">{props.children}</div>;

  return (
    <div
      className={classNames("chat-item-container", CHAT_TYPE_CLASS[props.type])}
    >
      <div
        className={classNames(
          `chat-item chat-item-${size}`,
          CHAT_SIZE_CLASS[size],
          CHAT_THEME_CLASS[props.theme]
        )}
      >
        {props.type == "send" ? bodyContent : null}
        <div className={`logo-mark logo-mark-${props.logoTheme}`}>
          <LogoMark />
        </div>
        {props.type == "receive" ? bodyContent : null}

        <div className="bottom-icon">
          {props.type == "receive" ? (
            <ReceiveBottomIcon />
          ) : (
            <SenderBottomIcon />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
