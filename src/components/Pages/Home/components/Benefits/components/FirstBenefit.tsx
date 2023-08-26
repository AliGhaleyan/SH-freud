import BenefitContainer from "@/components/Pages/Home/components/Benefits/components/BenefitContainer";
import { Chat } from "@/components/Elements";

const FirstBenefit = () => {
  return (
    <BenefitContainer
      benefitIndex={1}
      title="AI-Powered Assessment"
      image="/benefits/benefit-01.png"
      description={
        <>
          Gain valuable insights into your mental well-being through our
          advanced AI-powered assessments.
          <br />
          <br />
          Our intelligent algorithms analyze your responses to provide
          personalized assessments and recommendations for improvement.
        </>
      }
      extraDescription={
        <div className="grid grid-cols-2 gap-16">
          <div className="grid gap-y-2">
            <div className="text-heading-lg font-bold">
              99.5<span className="text-mindful-gray-60">%</span>
            </div>
            <p className="text-label-md font-extrabold uppercase text-mindful-gray-100">
              connect rate
            </p>
          </div>
          <div className="grid gap-y-2">
            <div className="text-heading-lg font-bold">
              25K<span className="text-mindful-gray-60">*</span>
            </div>
            <p className="text-label-md font-extrabold uppercase text-mindful-gray-100">
              ai healthcare models
            </p>
          </div>
        </div>
      }
      imageShapes={
        <>
          <div className="absolute inset-0 m-auto aspect-square w-full rounded-full bg-mindful-gray-80" />
          <div className="absolute -top-6 right-1 h-16 w-16 rounded-full bg-mindful-gray-20 md:-top-6 md:left-4 md:right-auto md:h-24 md:w-24" />
          <div className="absolute bottom-2.5 left-7 h-10 w-10 rounded-full bg-mindful-gray-20 md:bottom-auto md:left-auto md:right-1.5 md:top-0 md:h-16 md:w-16" />
          <div className="absolute left-5 top-7 h-6 w-6 rounded-full bg-mindful-gray-20 md:bottom-14 md:left-10 md:top-auto md:h-8 md:w-8" />
          <div className="absolute inset-0 z-50 m-auto flex h-auto w-[18.5rem] flex-col justify-center gap-2 md:w-[28rem] xl:gap-7">
            <Chat
              type="send"
              theme="white"
              logoTheme="green"
              size="sm"
              className="shadow-2xl"
            >
              Doc, I need help with my life. I don’t feel well everyday.
            </Chat>
            <Chat
              type="receive"
              theme="white"
              logoTheme="green"
              size="sm"
              className="shadow-2xl"
            >
              Don’t worry, Kim, I’m here to help you with your mental health
              👍👍
            </Chat>
          </div>
        </>
      }
    />
  );
};

export default FirstBenefit;
