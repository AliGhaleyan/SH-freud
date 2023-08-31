import { MenuContactInfoItem } from "../types";
import { EmailIcon, LocationIcon, TelephoneIcon } from "@/components/Icons";

const ITEMS: MenuContactInfoItem[] = [
  { icon: <LocationIcon />, title: "456 Oak Avenue Springfield, IL 62704" },
  { icon: <TelephoneIcon />, title: "+(555) 123-4567\n+(123) 456-789-000" },
  { icon: <EmailIcon />, title: "inquiries@freud.ai\nwork@freud.ai" },
];

const MenuContactInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12">
      {ITEMS.map((contactInfo, key) => (
        <div key={key} className="grid gap-y-2">
          <span className="h-10 w-10 rounded-full bg-mindful-gray-70 p-2">
            {contactInfo.icon}
          </span>
          <p className="text-paragraph-xl font-medium">{contactInfo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuContactInfo;
