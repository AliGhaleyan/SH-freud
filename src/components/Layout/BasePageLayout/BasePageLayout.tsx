import { Menu } from "./components/Menu";

const BasePageLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};

export default BasePageLayout;
