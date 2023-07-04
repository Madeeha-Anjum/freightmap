import classnames from "classnames";
import React, { createContext, useState } from "react";

type InterfaceMenuContext = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<InterfaceMenuContext>(
  {} as InterfaceMenuContext
);

type InterfaceMenuProvider = {
  children: React.ReactNode;
};

const MenuProvider: React.FC<InterfaceMenuProvider> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
