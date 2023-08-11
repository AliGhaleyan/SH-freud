import FooterLinkItem from "./FooterLinkItem";

const FooterLinks = () => {
  return (
    <div className="mx-auto flex flex-wrap items-end justify-center gap-16">
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
