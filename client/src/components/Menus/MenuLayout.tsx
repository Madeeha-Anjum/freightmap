import React from "react";
import Icon from "../Icons/Icon";
import { MenuContext } from "../../providers/MenuProvider";

interface MenuLayoutInterface {
  children: React.ReactNode;
}

const MenuLayout: React.FC<MenuLayoutInterface> = ({ children }) => {
  const { isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);

  return (
    <>
      <div className="h-full overflow-auto border-b-2 backdrop-blur-2xl bg-black/10 border-b-white">
        <section className="absolute right-0 text-right sm:hidden">
          <button
            type="button"
            title="Close"
            className="w-16 h-16 p-2 text-3xl font-bold"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <Icon.CloseX className="w-full"></Icon.CloseX>
          </button>
        </section>
        <section className="h-full p-2 ">{children}</section>
      </div>
    </>
  );
};

export default MenuLayout;
