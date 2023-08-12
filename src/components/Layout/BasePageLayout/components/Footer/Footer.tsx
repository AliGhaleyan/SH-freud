import { Logo } from "@/components/Elements";
import FooterLinks from "./components/FooterLinks";
import FooterSocials from "./components/FooterSocials";
import FooterLegalSection from "./components/FooterLegalSection";
import NewsletterInput from "./components/NewsletterInput";

const Footer = () => {
  return (
    <div className="grid gap-y-24 rounded-t-[3.5rem] bg-mindful-gray-80 px-4 pb-4 pt-[9.25rem] text-white">
      <Logo size="lg" direction="vertical" />
      <NewsletterInput />
      <FooterLinks />
      <FooterSocials />
      <FooterLegalSection />
    </div>
  );
};

export default Footer;
