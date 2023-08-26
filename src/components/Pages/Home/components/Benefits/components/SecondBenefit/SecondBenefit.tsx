import BenefitContainer from "@/components/Pages/Home/components/Benefits/components/BenefitContainer";
import { CheckRoundIcon } from "@/components/Icons";
import Tags from "./components/Tags";
import MentalHealthLevelBox from "./components/MentalHealthLevelBox";

const SecondBenefit = () => {
  return (
    <BenefitContainer
      imageFirst
      benefitIndex={2}
      title="Self-Care Tools and Resources"
      description={
        <>
          Access professional support anytime, anywhere with our virtual therapy
          sessions.
          <br />
          <br />
          Connect with licensed therapists through secure video calls and
          receive personalized counseling tailored to your specific needs.
        </>
      }
      extraDescription={
        <div className="grid grid-cols-1 gap-3">
          {[
            "Access personalized mental health tools",
            "Connect with licensed therapists",
            "Track your progress and gain insights",
          ].map((item, key) => (
            <div
              key={key}
              className="flex items-center gap-2 text-label-md font-extrabold"
            >
              <span className="text-mindful-gray-60">
                <CheckRoundIcon width={24} height={24} />
              </span>
              {item}
            </div>
          ))}
        </div>
      }
      image="/benefits/benefit-02.png"
      imageShapes={
        <>
          <div className="absolute inset-0 m-auto aspect-square w-full rounded-full bg-empathy-orange-40" />
          <div className="absolute -top-11 left-4 h-16 w-16 rounded-full bg-empathy-orange-20 md:left-auto md:right-1.5 md:top-0 md:h-24 md:w-24" />
          <div className="absolute bottom-1 right-2.5 h-10 w-10 rounded-full bg-empathy-orange-20 md:bottom-auto md:left-16 md:right-auto md:top-0 md:h-16 md:w-16" />
          <div className="absolute right-7 top-2.5 h-6 w-6 rounded-full bg-empathy-orange-20 md:bottom-3.5 md:left-20 md:right-auto md:top-auto md:h-8 md:w-8" />
          <Tags />
          <MentalHealthLevelBox />
        </>
      }
    />
  );
};

export default SecondBenefit;
