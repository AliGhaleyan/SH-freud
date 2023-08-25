import { PropsWithChildren } from "react";

const TextSliderItem = (props: PropsWithChildren) => {
  return (
    <div className="text-heading-lg font-bold text-mindful-gray-80">
      “{props.children}”
    </div>
  );
};

export default TextSliderItem;
