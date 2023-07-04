import classnames from "classnames";
import React from "react";
import { MenuContext } from "../../providers/MenuProvider";
import { Icon } from "../Icons/Icon";

const SidePanel: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);

  return (
    <>
      <div className="absolute w-16 h-full text-gray-700 bg-slate-50 backdrop-brightness-200 backdrop-blur-2xl rounded-l-3xl -left-16">
        <button
          title="Open Menu"
          className={classnames(
            "p-2 text-center transition duration-1000 transform h-16",
            {
              "rotate-180": isMenuOpen,
            }
          )}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <Icon.LeftArrow className="w-full"></Icon.LeftArrow>
        </button>
      </div>
    </>
  );
};

export default SidePanel;
