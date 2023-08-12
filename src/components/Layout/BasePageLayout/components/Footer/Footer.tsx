import { Logo } from "@/components/Elements";
import FooterLinks from "./components/FooterLinks";
import FooterSocials from "./components/FooterSocials";
import FooterLegalSection from "./components/FooterLegalSection";
import NewsletterInput from "./components/NewsletterInput";
import { CTA } from "./components/CTA";

const Footer = () => {
  return (
    <div className="rounded-t-[3.5rem] bg-mindful-gray-80 px-4 pb-4 pt-[4.625rem] text-white md:pt-[9.25rem]">
      <div className="grid gap-y-16 md:gap-y-24">
        <div className="order-1">
          <Logo size="lg" direction="vertical" />
        </div>
        <NewsletterInput />
        <FooterLinks />
        <FooterSocials />
        <FooterLegalSection />
      </div>
      <CTA />
    </div>
  );
};

export default Footer;
