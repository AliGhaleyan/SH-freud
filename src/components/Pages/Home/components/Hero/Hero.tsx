import Heading from "./components/Heading";
import IPhoneSpaceBlack from "./components/IPhoneSpaceBlack";

const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-right-top bg-no-repeat pt-40"
        style={{ backgroundImage: "url(/hero/background-3d.png)" }}
      >
        <div className="container mx-auto grid grid-cols-2 gap-x-16">
          <Heading />
          <IPhoneSpaceBlack />
        </div>
        <div className="absolute bottom-0 z-50 h-[6.188rem] w-full bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
