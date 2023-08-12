import CTAText from "./components/CTAText";
import CTAButtons from "./components/CTAButtons";

const CTA = () => {
  return (
    <div className="container mx-auto mt-20 grid justify-between gap-y-8 rounded-[2.5rem] bg-white p-4 text-center md:flex md:text-left">
      <CTAText />
      <CTAButtons />
    </div>
  );
};

export default CTA;
