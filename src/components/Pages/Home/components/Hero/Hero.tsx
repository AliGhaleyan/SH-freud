import Heading from "./components/Heading";

const Hero = () => {
  return (
    <div
      className="bg-right bg-no-repeat py-40"
      style={{ backgroundImage: "url(/hero/background-3d.png)" }}
    >
      <div className="container mx-auto grid grid-cols-2 gap-x-16">
        <Heading />
      </div>
    </div>
  );
};

export default Hero;
