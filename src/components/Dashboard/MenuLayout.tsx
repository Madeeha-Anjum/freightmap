import React from "react";
import { MenuContext } from "../../providers/MenuProvider";
import SidePanel from "./SidePanel";
import classnames from "classnames";

type InterfaceMenuLayout = {
  children: React.ReactNode;
};

const MenuLayout: React.FC<InterfaceMenuLayout> = ({ children }) => {
  const { isMenuOpen } = React.useContext(MenuContext);
  return (
    <div
      className={classnames(
        "absolute right-0 z-10 w-full  sm:max-w-lg sm:top-24 xl:max-w-xl sm:h-[35em] h-full top-0 transition duration-500 ease-in-out",
        { "translate-x-full": !isMenuOpen }
      )}
    >
      <SidePanel />
      {children}
    </div>
  );
};

export default MenuLayout;
