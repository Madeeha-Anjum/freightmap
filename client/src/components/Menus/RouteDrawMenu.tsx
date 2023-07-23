import React, { useEffect } from "react";
import { MapContext } from "../../providers/MapProvider";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
// import Icon from "../Icons/Icon";
import { MenuContext } from "../../providers/MenuProvider";

const RouteDrawMenu = () => {
  const navigate = useNavigate();
  const { setIsMenuOpen } = React.useContext(MenuContext);

  const {
    onEndDrawClick,
    onResetDrawClick,
    selectedRouteType,
    setSelectedRouteType,
  } = React.useContext(MapContext);

  useEffect(() => {
    if (selectedRouteType === null) navigate("/");
    setIsMenuOpen(false);
  }, [selectedRouteType, navigate]);

  const handleOnSaveClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onEndDrawClick();
    console.log("Here is the route: ", e);
    setSelectedRouteType(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center h-full ">
      <section className="flex flex-col items-center justify-center flex-grow space-y-12">
        <Button
          onClick={(e) => {
            handleOnSaveClick(e);
          }}
        >
          Save
        </Button>
        <Button onClick={() => onResetDrawClick()}>Restart</Button>
        <Button
          onClick={() => {
            onResetDrawClick();
            setSelectedRouteType(null);
            navigate("/");
          }}
        >
          Cancel
        </Button>
      </section>
    </div>
  );
};

export { RouteDrawMenu };
