import React, { useEffect } from "react";
import { MenuContext } from "../../providers/MenuProvider";
import { Icon } from "../Icons/Icon";
import { IconButton } from "../ui/IconButton";
import classnames from "classnames";

type MenuInterface = {
  children: React.ReactNode;
};
enum Route {
  Truck = "Truck",
  Air = "Air",
  Ship = "Ship",
}

const Menu: React.FC<MenuInterface> = ({ children }) => {
  const { isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);
  const [selectedRoute, setSelectedRoute] = React.useState<Route | null>(null);

  useEffect(() => {
    console.log(selectedRoute);
  }, [selectedRoute]);

  const handleRouteSelection = (route: Route) => {
    setSelectedRoute(route);
  };

  const handleStartDrawing = () => {
    if (selectedRoute === null) return;
    setIsMenuOpen(false);
    // do new map stuff here
  };

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
        <section className="h-full p-2 ">
          <div className="flex flex-col items-center h-full ">
            <section className="flex flex-col justify-center flex-grow space-y-12">
              <div className="text-xl ">What route do you want to draw ?</div>
              <div className="flex justify-center space-x-9">
                <IconButton
                  onClick={() => handleRouteSelection(Route.Truck)}
                  title="Draw truck route"
                  className={classnames(
                    "text-red-800 border-red-800 hover:bg-red-800 hover:text-white",
                    {
                      "bg-red-800 !text-white": selectedRoute === Route.Truck,
                    }
                  )}
                >
                  <Icon.Truck className="w-full"></Icon.Truck>
                </IconButton>
                <IconButton
                  onClick={() => handleRouteSelection(Route.Ship)}
                  title="Draw ship route"
                  className={classnames(
                    "text-green-800 border-green-800 hover:bg-green-800 hover:text-white",
                    {
                      "bg-green-800 !text-white": selectedRoute === Route.Ship,
                    }
                  )}
                >
                  <Icon.Ship className="w-full"></Icon.Ship>
                </IconButton>
                <IconButton
                  onClick={() => handleRouteSelection(Route.Air)}
                  title="Draw plane route"
                  className={classnames(
                    "text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white",
                    {
                      "bg-blue-800 !text-white": selectedRoute === Route.Air,
                    }
                  )}
                >
                  <Icon.Plane className="w-full"></Icon.Plane>
                </IconButton>
              </div>
            </section>
            {
              <IconButton
                onClick={() => handleStartDrawing()}
                className={classnames(
                  "self-center w-48 mb-24 font-semibold bg-green-400 border-b-white border-1 h-min hover:bg-opacity-50 rounded-2xl invisible space-x-2",
                  {
                    "!visible": selectedRoute !== null,
                  }
                )}
              >
                <span>Start drawing </span>
                <span className="inline-block align-center ">
                  <Icon.Pen className="w-5 h-5"></Icon.Pen>
                </span>
              </IconButton>
            }
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
