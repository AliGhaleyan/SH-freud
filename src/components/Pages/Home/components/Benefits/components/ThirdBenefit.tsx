import BenefitContainer from "@/components/Pages/Home/components/Benefits/components/BenefitContainer";
import { ProgressBar } from "@/components/Elements";

const ThirdBenefit = () => {
  return (
    <BenefitContainer
      benefitIndex={3}
      title="Emotional Support Chatbot"
      description={
        <>
          Empower yourself with a range of self-care tools and resources.
          <br />
          <br />
          Access personalized self-help modules, educational materials, and
          interactive exercises to foster your emotional growth and well-being.
        </>
      }
      extraDescription={
        <div className="grid gap-3">
          <div className="text-heading-lg font-bold">
            99.987<span className="text-mindful-gray-60">%</span>
          </div>
          <ProgressBar percent={80} />
          <p className="text-label-md font-extrabold uppercase text-mindful-gray-100">
            mental health ai accuracy
          </p>
        </div>
      }
      image="/benefits/benefit-03.png"
      imageShapes={
        <>
          <div className="absolute inset-0 m-auto aspect-square w-full rounded-full bg-serenity-green-50" />
          <div className="absolute right-6 top-7 h-16 w-16 rounded-full bg-serenity-green-20" />
          <div className="absolute bottom-14 left-10 h-8 w-8 rounded-full bg-serenity-green-20" />
          <div className="absolute -top-12 left-16 h-24 w-24 rounded-full bg-serenity-green-20" />
        </>
      }
    />
  );
};

export default ThirdBenefit;
