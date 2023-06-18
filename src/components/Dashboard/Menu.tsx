import React from "react";
import { MenuContext } from "../../providers/MenuProvider";
import Icon from "../icons/Icon";

type MenuInterface = {
  children: React.ReactNode;
};

const Menu: React.FC<MenuInterface> = ({ children }) => {
  const { isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);

  return (
    <>
      <div className="h-full overflow-auto">
        <section className="text-right sm:hidden">
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
        <section className="p-2">
          {/* menu items */}
          {children}
        </section>
      </div>
    </>
  );
};

export default Menu;
