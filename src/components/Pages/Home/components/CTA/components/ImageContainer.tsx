import classNames from "classnames";

const ImageContainer = () => {
  return (
    <div
      className={classNames(
        "ml-4 h-[27.688rem] bg-cover shadow-2xl md:ml-0 md:h-[20rem]  lg:h-[30rem] xl:h-[42.75rem]",
        "rounded-bl-4xl rounded-tl-4xl md:rounded-t-4xl md:rounded-bl-none lg:rounded-t-6xl",
        "border-8 border-r-0 border-mindful-gray-80 md:border-b-0 md:border-r-8"
      )}
      style={{ backgroundImage: "url('/cta/dashboard.png')" }}
    />
  );
};

export default ImageContainer;
