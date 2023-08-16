import { Container } from "@/components/Fragments";
import { Label, Psyche } from "@/components/Elements";
import StatisticsCard from "./components/StatisticsCard";
import CTA from "./components/CTA";

const Statistics = () => {
  return (
    <Container className="grid gap-y-8 rounded-6xl bg-mindful-gray-10 px-4 py-10 md:gap-y-16 md:px-16 md:py-24 xl:px-30 xl:py-36">
      <div className="flex flex-col items-center justify-center gap-y-6 text-center">
        <Label className="bg-mindful-gray-20 text-mindful-gray-60">
          <Psyche width={8} height={8} />
          our singular purpose
        </Label>
        <div className="text-heading-md font-bold text-mindful-gray-80 md:text-heading-xl">
          We design empathetic{" "}
          <span className="text-mindful-gray-60">AI Wellness</span> chatbot
          platform for everyone.
        </div>
      </div>
      <div className="grid gap-2 md:gap-4 lg:grid-cols-2">
        <StatisticsCard
          title="100,000"
          subtitle="Lives Impacted"
          orangeLabel="+"
        />
        <StatisticsCard title="78" subtitle="AI Models" orangeLabel="K" />
        <StatisticsCard
          title="99.5"
          subtitle="User Satisfaction"
          orangeLabel="%"
        />
        <StatisticsCard
          title="550M"
          subtitle="Data LLMs Trained"
          orangeLabel="+"
        />
      </div>
      <CTA />
    </Container>
  );
};

export default Statistics;
