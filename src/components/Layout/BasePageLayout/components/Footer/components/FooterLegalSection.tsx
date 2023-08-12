import { Psyche } from "@/components/Elements";

const FooterLegalSection = () => {
  return (
    <div className="order-5 mx-auto flex flex-wrap items-center justify-center gap-4 font-extrabold uppercase">
      <p>Copyright 2023, All Rights Reserved</p>
      <Psyche className="text-mindful-gray-60" width={4} height={4} />
      <p>Terms & Conditions</p>
      <Psyche className="text-mindful-gray-60" width={4} height={4} />
      <p>Privacy Policy</p>
    </div>
  );
};

export default FooterLegalSection;
