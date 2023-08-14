import Image from "next/image";
import { Tag } from "@/components/Elements";
import { LocationIcon, TelephoneIcon } from "@/components/Icons";

const IPhoneSpaceBlack = () => {
  return (
    <div className="relative flex h-[32rem] items-center justify-center overflow-hidden md:hidden lg:h-[42rem] xl:flex">
      {/*-translate-x-16 md:translate-x-0*/}
      <div className="absolute left-1/2 top-[65%] m-auto h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:h-[60rem] md:w-[60rem] md:pt-32">
        {/*h-[32rem] w-[31rem] lg:h-[42rem] lg:w-[46rem]*/}
        <div className="relative m-auto h-full w-full">
          <Image src="/hero/mobile-body-02.png" layout="fill" />
        </div>
      </div>
      <div className="absolute top-[3.25rem] md:top-10">
        <div className="relative mx-auto h-[34.5rem] w-[16.5rem] md:h-[56.5rem] md:w-[24.5rem]">
          <Image
            src="/hero/mobile-screen-02.png"
            layout="fill"
            className="rounded-[2rem] md:rounded-[3rem]"
          />
        </div>
      </div>
      <div className="absolute top-[18rem] z-50 flex gap-2 whitespace-nowrap pl-24 text-mindful-gray-80 md:top-[27rem] md:pl-40">
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
