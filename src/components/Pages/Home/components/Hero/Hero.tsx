import Heading from "./components/Heading";
import IPhoneSpaceBlack from "./components/IPhoneSpaceBlack";
import classNames from "classnames";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className={classNames(
          "bg-no-repeat pt-32 lg:px-20 lg:pt-40 xl:px-4",
          "xl:bg-[url('/hero/background-3d.png')] xl:bg-right-top",
          "md:bg-none",
          "bg-[url('/hero/background-3d-mobile.png')] bg-contain bg-bottom"
        )}
      >
        <div className="container grid gap-x-16 gap-y-14 xl:grid-cols-2">
          <Heading />
          <IPhoneSpaceBlack />
        </div>
      </div>
      <div className="absolute bottom-0 z-50 h-[6.188rem] w-full bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
