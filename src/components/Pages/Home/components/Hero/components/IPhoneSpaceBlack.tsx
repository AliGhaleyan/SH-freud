import Image from "next/image";
import { Tag } from "@/components/Elements";
import { LocationIcon, TelephoneIcon } from "@/components/Icons";
import classNames from "classnames";

const IPhoneSpaceBlack = () => {
  return (
    <div className="relative h-[27.5rem] overflow-hidden md:hidden xl:block xl:h-[50rem]">
      <div className="absolute left-0 right-0 top-0 mx-auto flex h-full w-full justify-center">
        <div
          className={classNames(
            "relative flex items-center justify-center overflow-hidden md:hidden xl:flex",
            "h-[38.25rem] w-[19rem] xl:h-[64.25rem] xl:w-[32rem]"
          )}
        >
          <Image
            src="/hero/iphone-14-pro-max-frame.png"
            layout="fill"
            className="z-10"
          />
          <div className="absolute z-0">
            <div className="relative h-[36.5rem] w-[17rem] xl:h-[61.5rem] xl:w-[28.5rem]">
              <Image
                src="/hero/chat-screen-03.png"
                layout="fill"
                className="rounded-5xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[16.875rem] z-[1050] flex gap-2 whitespace-nowrap pl-28 text-mindful-gray-80 md:top-[28rem] md:pl-40">
        <Tag className="my-auto bg-white" icon={<TelephoneIcon />}>
          Doctor Khan Phone
        </Tag>
        <Tag className="my-auto bg-white" icon={<LocationIcon />}>
          Physical Address
        </Tag>
      </div>
    </div>
  );
};

export default IPhoneSpaceBlack;
