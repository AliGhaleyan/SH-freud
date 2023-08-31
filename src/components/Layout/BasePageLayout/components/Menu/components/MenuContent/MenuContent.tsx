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
        "relative min-h-full flex-col justify-between",
        "mt-12",
        open ? "flex opacity-100" : "hidden opacity-0"
      )}
    >
      <Container className="my-auto flex justify-center md:justify-between">
        <MenuLinks />
        <MenuInformation />
      </Container>
      <MenuCTA />
    </div>
  );
};

export default MenuContent;
