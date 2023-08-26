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
          <div className="absolute left-16 top-0 h-16 w-16 rounded-full bg-empathy-orange-20" />
          <div className="absolute bottom-3.5 left-20 h-8 w-8 rounded-full bg-empathy-orange-20" />
          <div className="absolute right-1.5 top-0 h-24 w-24 rounded-full bg-empathy-orange-20" />
          <Tags />
          <MentalHealthLevelBox />
        </>
      }
    />
  );
};

export default SecondBenefit;
