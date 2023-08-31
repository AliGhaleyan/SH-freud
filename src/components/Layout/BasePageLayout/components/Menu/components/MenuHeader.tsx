import { ButtonIcon, Logo, Psyche } from "@/components/Elements";
import { EmailIcon, TelephoneIcon } from "@/components/Icons";
import { useMenuContext } from "@/components/Layout/BasePageLayout/components/Menu";

const MenuHeader = () => {
  const { toggleMenu } = useMenuContext();

  return (
    <div className="container">
      <div className="flex items-center justify-between rounded-full bg-mindful-gray-10 p-3.5 md:p-2">
        <div className="hidden gap-2 text-mindful-gray-80 md:flex">
          <ButtonIcon icon={<TelephoneIcon width={24} height={24} />} />
          <ButtonIcon icon={<EmailIcon width={24} height={24} />} />
        </div>
        <div className="hidden text-empathy-orange-80 md:block">
          <Logo />
        </div>
        <div className="text-mindful-gray-60 md:hidden">
          <Logo hideTitle />
        </div>
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={toggleMenu}
        >
          <p className="text-lg font-semibold">Main Menu</p>
          <Psyche className="text-mindful-gray-60" />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
