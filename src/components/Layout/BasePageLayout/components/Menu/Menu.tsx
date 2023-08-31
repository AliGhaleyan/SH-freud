import MenuHeader from "./components/MenuHeader";
import MenuContent from "./components/MenuContent";
import { useEffect, useState } from "react";
import { MenuContext } from "./context";
import classNames from "classnames";

const Menu = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);

  return (
    <MenuContext.Provider value={{ open, toggleMenu }}>
      <div
        className={classNames(
          "fixed z-[1025] min-h-screen w-full",
          open
            ? "max-h-full overflow-y-scroll bg-mindful-gray-80 bg-[url('/hero/menu-bg-desktop.png')] bg-cover"
            : undefined
        )}
      >
        <div className="w-full px-4 pt-4">
          <MenuHeader />
        </div>
        <MenuContent />
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
