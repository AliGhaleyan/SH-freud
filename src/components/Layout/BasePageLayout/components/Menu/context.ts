import { createContext, useContext } from "react";
import { MenuContextProps } from "./types";

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw Error("useMenuContext should call in Provider");
  }

  return context;
};
