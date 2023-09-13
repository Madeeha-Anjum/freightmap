import React, { useEffect } from "react";
import IconButton from "../ui/IconButton";
import classnames from "classnames";
import Icon from "../Icons/Icon";
// import { Link } from "react-router-dom";
// import Button from "../ui/Button";
import RouteType from "../../data/routes";
import { MapContext } from "../../providers/MapProvider";
import { useNavigate } from "react-router-dom";

const RouteSelectMenu = () => {
  const navigate = useNavigate();
  const { selectedRouteType, setSelectedRouteType, onStartDrawClick } =
    React.useContext(MapContext);

  const handleRouteSelection = (route: RouteType) => {
    setSelectedRouteType(route);
  };

  useEffect(() => {
    if (selectedRouteType != null) navigate("/draw-route");
    onStartDrawClick();
  }, [selectedRouteType, navigate, onStartDrawClick]);

  return (
    <>
      <div className="flex flex-col items-center h-full -mt-8 ">
        <section className="flex flex-col justify-center flex-grow space-y-12">
          <div className="text-xl"> Select a route to draw ?</div>
          <div className="flex justify-center space-x-9">
            <IconButton
              onClick={() => handleRouteSelection(RouteType.Ground)}
              title="Draw ground route"
              className={classnames(
                "text-red-800 border-red-800 hover:bg-red-800 bg-white/50",
                {
                  "!bg-red-800 !text-white  ":
                    selectedRouteType === RouteType.Ground,
                }
              )}
            >
              <Icon.Truck className="w-full"></Icon.Truck>
            </IconButton>
            <IconButton
              onClick={() => handleRouteSelection(RouteType.Sea)}
              title="Draw sea route"
              className={classnames(
                "text-green-800 border-green-800 hover:bg-green-800 bg-white/50",
                {
                  "!bg-green-800 !text-white":
                    selectedRouteType === RouteType.Sea,
                }
              )}
            >
              <Icon.Ship className="w-full"></Icon.Ship>
            </IconButton>
            <IconButton
              onClick={() => handleRouteSelection(RouteType.Air)}
              title="Draw air route"
              className={classnames(
                "text-blue-800 border-blue-800 hover:bg-blue-800 bg-white/50",
                {
                  "!bg-blue-800 !text-white":
                    selectedRouteType === RouteType.Air,
                }
              )}
            >
              <Icon.Plane className="w-full"></Icon.Plane>
            </IconButton>
          </div>
        </section>
        {/* <Link to="/draw-route">
          <Button
            className={classnames("invisible  !mb-24", {
              "!visible": selectedRouteType !== null,
            })}
            title="Start drawing"
            onClick={onStartDrawClick}
          >
            <span>Start drawing </span>
            <span className="inline-block align-center">
              <Icon.Pen className="w-5 h-5"></Icon.Pen>
            </span>
          </Button>
        </Link> */}
      </div>
    </>
  );
};

export { RouteSelectMenu };
