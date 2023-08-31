import { Psyche } from "@/components/Elements";
import MenuContactInfo from "./MenuContactInfo";

const MenuInformation = () => {
  return (
    <div className="hidden max-w-[28.625rem] gap-y-16 text-white md:grid">
      <div className="flex items-center gap-x-4 text-label-sm font-extrabold uppercase">
        Terms & conditions
        <span className="text-mindful-gray-60">
          <Psyche width={8} height={8} />
        </span>
        Privacy Policy
      </div>
      <h3 className="text-heading-md font-medium">
        Harnessing the power of AI technology to revolutionize mental health.
      </h3>
      <MenuContactInfo />
    </div>
  );
};

export default MenuInformation;
