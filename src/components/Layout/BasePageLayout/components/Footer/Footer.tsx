import { ButtonIcon, Logo, TextInput } from "@/components/Elements";
import { ArrowRightIcon, EmailIcon } from "@/components/Icons";

const Footer = () => {
  return (
    <div className="grid gap-y-24 rounded-t-[3.5rem] bg-mindful-gray-80 px-4 pb-4 pt-[9.25rem] text-white">
      <Logo size="lg" direction="vertical" />
      <div className="mx-auto max-w-[22rem]">
        <TextInput
          placeholder="Subscribe to our Newsletter!"
          icon={<EmailIcon width={24} height={24} />}
          buttonIcon={
            <ButtonIcon
              icon={<ArrowRightIcon width={24} height={24} />}
              className="!bg-mindful-gray-60"
            />
          }
        />
      </div>
    </div>
  );
};

export default Footer;
