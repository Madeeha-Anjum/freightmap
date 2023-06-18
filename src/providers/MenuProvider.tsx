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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <div
        className={classnames(
          "absolute right-0 z-10 w-full bg-white sm:max-w-lg sm:top-24 xl:max-w-xl sm:h-[35em] h-full top-0 transition duration-500 ease-in-out",
          { "translate-x-full": !isMenuOpen }
        )}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
