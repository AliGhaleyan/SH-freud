import { Container } from "@/components/Fragments";
import MenuLinks from "./components/MenuLinks";
import MenuInformation from "./components/MenuInformation";
import classNames from "classnames";
import MenuCTA from "./components/MenuCTA";
import { useMenuContext } from "@/components/Layout/BasePageLayout/components/Menu";

const MenuContent = () => {
  const { open } = useMenuContext();

  return (
    <div
      className={classNames(
        "z-[1024] mt-12",
        "transition-opacity duration-300 ease-in-out",
        open ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="relative z-[1070] flex min-h-full flex-col justify-between">
        <Container className="my-auto flex justify-center md:justify-between">
          <MenuLinks />
          <MenuInformation />
        </Container>
        <MenuCTA />
      </div>
    </div>
  );
};

export default MenuContent;
