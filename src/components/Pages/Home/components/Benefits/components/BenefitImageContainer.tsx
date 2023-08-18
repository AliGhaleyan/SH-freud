import { ReactNode } from "react";
import Image from "next/image";
import { BenefitImageContainerProps } from "@/components/Pages/Home/components/Benefits/types";

const BenefitImageContainer = (props: BenefitImageContainerProps) => {
  return (
    <div className="relative flex w-[21rem] items-center justify-center md:w-[28rem] xl:w-[36rem]">
      <div className="relative z-50 h-[23.875rem] w-[11rem] rounded-4xl shadow-2xl md:h-[30rem] md:w-[14rem] xl:h-[38.25rem] xl:w-[17.75rem]">
        <Image
          src={props.image}
          alt="Benefit Image"
          layout="fill"
          className="rounded-4xl"
        />
      </div>
      {props.shapes}
    </div>
  );
};

export default BenefitImageContainer;
