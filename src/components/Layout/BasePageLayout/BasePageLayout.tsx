import Menu from "./components/Menu";
import { Footer } from "./components/Footer";

const BasePageLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Menu />
      {props.children}
      <Footer />
    </>
  );
};

export default BasePageLayout;
