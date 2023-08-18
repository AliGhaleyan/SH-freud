import Image from "next/image";

const ImageContainer = () => {
  return (
    <div className="relative flex items-center justify-center md:w-[28rem] xl:w-[36rem]">
      <div className="relative z-50 rounded-4xl shadow-2xl md:h-[30rem] md:w-[14rem] xl:h-[38.25rem] xl:w-[17.75rem]">
        <Image
          src="/benefits/benefit-02.png"
          alt="First Benefit"
          layout="fill"
          className="rounded-4xl"
        />
      </div>
      <div className="absolute inset-0 m-auto aspect-square w-full rounded-full bg-empathy-orange-40" />
      <div className="absolute left-16 top-0 h-16 w-16 rounded-full bg-empathy-orange-20" />
      <div className="absolute bottom-3.5 left-20 h-8 w-8 rounded-full bg-empathy-orange-20" />
      <div className="absolute right-1.5 top-0 h-24 w-24 rounded-full bg-empathy-orange-20" />
    </div>
  );
};

export default ImageContainer;
