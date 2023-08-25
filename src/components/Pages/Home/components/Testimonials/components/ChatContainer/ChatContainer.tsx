import UserInfo from "./components/UserInfo";
import { Chat } from "@/components/Elements";

const ChatContainer = () => {
  return (
    <div className="xl:order-0 order-1 flex w-full flex-col rounded-4xl bg-white p-4 md:rounded-5xl xl:max-w-[34.375rem]">
      <UserInfo />
      <div className="mb-4 mt-8 text-center text-sm font-semibold text-mindful-gray-100 md:my-6">
        502 Total Conversations —{" "}
        <span className="text-mindful-gray-80">See All</span>
      </div>
      <div className="grid gap-y-2">
        <Chat type="send" theme="primary" logoTheme="green">
          Hey Doc, Why is my life so meaningless? I don’t think I want to be
          alive anymore in this world. I wanna die and stop existing.
        </Chat>
        <Chat type="receive" theme="gray" logoTheme="orange">
          I understand that you may be feeling down and questioning the value of
          your life.
          <br />
          <br />
          👆 Remember, everyone goes through challenging times, and it's
          important to be kind to yourself!! 💪💪
          <br />
          <br />
          Let's explore ways to rediscover purpose, find meaning, and cultivate
          self-worth.
        </Chat>
        <Chat type="send" theme="primary" logoTheme="green">
          Thanks a lot doc, You’re truly the best mental heatlh AI out there.
        </Chat>
      </div>
    </div>
  );
};

export default ChatContainer;
