import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/Icons";
import FooterSocialItem from "./FooterSocialItem";

const FooterSocials = () => {
  return (
    <div className="order-4 mx-auto flex items-center justify-center gap-4">
      <FooterSocialItem icon={<InstagramIcon width={24} height={24} />} />
      <FooterSocialItem icon={<FacebookIcon width={24} height={24} />} />
      <FooterSocialItem icon={<YoutubeIcon width={24} height={24} />} />
      <FooterSocialItem icon={<LinkedinIcon width={24} height={24} />} />
    </div>
  );
};

export default FooterSocials;
