import Menu from "./components/Menu";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/Footer/Footer"), {
  ssr: false,
});

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
