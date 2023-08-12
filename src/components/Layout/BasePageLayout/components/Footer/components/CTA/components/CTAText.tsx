import TextMarker from "./TextMarker";

const CTAText = () => {
  return (
    <div className="text-heading-md font-bold text-mindful-gray-80 md:text-heading-xl">
      Get Your Mind{" "}
      <span className="relative z-50 text-mindful-gray-60">
        Healthier. <TextMarker />
      </span>
    </div>
  );
};

export default CTAText;
