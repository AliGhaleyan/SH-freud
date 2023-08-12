import { ButtonIcon, TextInput } from "@/components/Elements";
import { ArrowRightIcon, EmailIcon } from "@/components/Icons";

const NewsletterInput = () => {
  return (
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
  );
};

export default NewsletterInput;
