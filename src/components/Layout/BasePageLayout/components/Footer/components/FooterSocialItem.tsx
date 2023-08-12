import { ButtonIcon } from "@/components/Elements";

type Props = {
  icon: React.ReactNode;
};

const FooterSocialItem = (props: Props) => {
  return (
    <ButtonIcon
      icon={props.icon}
      className="border border-mindful-gray-60 !bg-transparent hover:!bg-empathy-orange-40"
    />
  );
};

export default FooterSocialItem;
