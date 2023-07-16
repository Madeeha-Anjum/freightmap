import React from "react";
import { MenuContext } from "../../providers/MenuProvider";
import SidePanel from "./SidePanel";
import classnames from "classnames";
import { MenuLayout } from "../Menus/MenuLayout";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const { isMenuOpen } = React.useContext(MenuContext);
  return (
    <div
      className={classnames(
        "absolute right-0 z-10 w-full  sm:max-w-lg sm:top-24 xl:max-w-xl sm:h-[35em] h-full top-0 transition duration-500 ease-in-out",
        { "translate-x-full": !isMenuOpen }
      )}
    >
      <SidePanel />
      <MenuLayout>
        {/* setup browser navigation here  */}
        <Outlet /> {/* Renders the component based on the current route */}
      </MenuLayout>
    </div>
  );
};

export default DashboardLayout;
