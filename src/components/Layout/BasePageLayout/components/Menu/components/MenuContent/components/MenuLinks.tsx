import MenuLinkItem from "./MenuLinkItem";

const MenuLinks = () => {
  return (
    <div className="grid gap-2 text-center md:gap-4">
      <MenuLinkItem label="Homepage" isActive />
      <MenuLinkItem label="Platform" />
      <MenuLinkItem label="Assessment" />
      <MenuLinkItem label="About Us" />
      <MenuLinkItem label="Contact Us" />
      <MenuLinkItem label="Blog" />
    </div>
  );
};

export default MenuLinks;
