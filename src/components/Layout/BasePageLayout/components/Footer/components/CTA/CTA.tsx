import CTAText from "./components/CTAText";
import CTAButtons from "./components/CTAButtons";

const CTA = () => {
  return (
    <div className="container mt-20 flex justify-between rounded-[2.5rem] bg-white p-4">
      <CTAText />
      <CTAButtons />
    </div>
  );
};

export default CTA;
