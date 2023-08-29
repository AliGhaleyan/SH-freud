import classNames from "classnames";
import { Chat } from "@/components/Elements";

const BenefitChat = () => {
  return (
    <div className="absolute right-[5.625rem] top-[17rem] z-50 hidden lg:block">
      <Chat type="send" theme="white" logoTheme="orange" size="sm">
        You’re making temendous progress, Amanda. Keep it up! You can do it!
      </Chat>
    </div>
  );
};

export default BenefitChat;
