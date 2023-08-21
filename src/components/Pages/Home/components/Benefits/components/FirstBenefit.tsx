import BenefitContainer from "@/components/Pages/Home/components/Benefits/components/BenefitContainer";

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
          <div className="absolute right-1.5 top-0 h-16 w-16 rounded-full bg-mindful-gray-20" />
          <div className="absolute bottom-14 left-10 h-8 w-8 rounded-full bg-mindful-gray-20" />
          <div className="absolute -top-6 left-4 h-24 w-24 rounded-full bg-mindful-gray-20" />
        </>
      }
    />
  );
};

export default FirstBenefit;