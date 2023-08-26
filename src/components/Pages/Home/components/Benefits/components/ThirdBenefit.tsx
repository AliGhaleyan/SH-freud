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
          <div className="absolute -top-6 left-0 h-16 w-16 rounded-full bg-serenity-green-20 md:-top-12 md:left-16 md:h-24 md:w-24" />
          <div className="absolute -bottom-6 left-7 h-10 w-10 rounded-full bg-serenity-green-20 md:bottom-auto md:left-auto md:right-6 md:top-7 md:h-16 md:w-16" />
          <div className="absolute right-6 top-4 h-6 w-6 rounded-full bg-serenity-green-20 md:bottom-14 md:left-10 md:right-auto md:top-auto md:h-8 md:w-8" />
        </>
      }
    />
  );
};

export default ThirdBenefit;
