import Image from "next/image";
import { Tag } from "@/components/Elements";
import { LocationIcon, TelephoneIcon } from "@/components/Icons";

const IPhoneSpaceBlack = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative h-[42rem] w-[59.75rem]">
        <Image src="/hero/mobile-body.png" layout="fill" />
        <div className="relative h-full w-full">
          <Image src="/hero/mobile-screen.png" layout="fill" />
        </div>
      </div>
      <div className="absolute top-[25rem] flex gap-2 pl-[18rem]">
        <Tag
          className="my-auto bg-white"
          icon={<TelephoneIcon width={24} height={24} />}
        >
          Doctor Khan Phone
        </Tag>
        <Tag
          className="my-auto bg-white"
          icon={<LocationIcon width={24} height={24} />}
        >
          Physical Address
        </Tag>
      </div>
    </div>
  );
};

export default IPhoneSpaceBlack;
