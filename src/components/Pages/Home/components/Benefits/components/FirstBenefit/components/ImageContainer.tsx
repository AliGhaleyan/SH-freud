import Image from "next/image";

const ImageContainer = () => {
  return (
    <div className="relative flex items-center justify-center md:w-[28rem] xl:w-[36rem]">
      <div className="relative z-50 rounded-4xl shadow-2xl md:h-[30rem] md:w-[14rem] xl:h-[38.25rem] xl:w-[17.75rem]">
        <Image
          src="/benefits/benefit-01.png"
          alt="First Benefit"
          layout="fill"
          className="rounded-4xl"
        />
      </div>
      <div className="absolute inset-0 m-auto aspect-square w-full rounded-full bg-mindful-gray-80" />
      <div className="absolute right-1.5 top-0 h-16 w-16 rounded-full bg-mindful-gray-20" />
      <div className="absolute bottom-14 left-10 h-8 w-8 rounded-full bg-mindful-gray-20" />
      <div className="absolute -top-6 left-4 h-24 w-24 rounded-full bg-mindful-gray-20" />
    </div>
  );
};

export default ImageContainer;
