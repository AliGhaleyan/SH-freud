import { ButtonIcon, Logo, Psyche } from "@/components/Elements";
import { EmailIcon, TelephoneIcon } from "@/components/Icons";

const Menu = () => {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center justify-between rounded-full bg-mindful-gray-10 p-2">
        <div className="flex gap-2 text-mindful-gray-80">
          <ButtonIcon icon={<TelephoneIcon width={24} height={24} />} />
          <ButtonIcon icon={<EmailIcon width={24} height={24} />} />
        </div>
        <div className="w-[9.375rem]">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">Main Menu</p>
          <Psyche className="text-mindful-gray-60" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
