import FooterLinkItem from "./FooterLinkItem";

const FooterLinks = () => {
  return (
    <div className="order-2 mx-auto grid flex-wrap items-end justify-center gap-16 text-center md:order-3 md:flex">
      <FooterLinkItem label="Homepage" isActive />
      <FooterLinkItem label="Platform" />
      <FooterLinkItem label="Assessment" />
      <FooterLinkItem label="About Us" />
      <FooterLinkItem label="Contact Us" />
      <FooterLinkItem label="Blog" />
    </div>
  );
};

export default FooterLinks;
