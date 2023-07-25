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
    onCancelDrawClick,
  } = React.useContext(MapContext);

  useEffect(() => {
    if (selectedRouteType === null) navigate("/");
  }, [selectedRouteType, navigate, setIsMenuOpen]);

  return (
    <div className="flex flex-col items-center h-full ">
      <section className="flex flex-col items-center justify-center flex-grow space-y-12">
        <div>Start drawing!</div>
        <Button
          onClick={() => {
            onEndDrawClick();
          }}
        >
          Save
        </Button>
        <Button onClick={() => onResetDrawClick()}>Restart</Button>
        <Button
          onClick={() => {
            onCancelDrawClick();
          }}
        >
          Cancel
        </Button>
      </section>
    </div>
  );
};

export { RouteDrawMenu };
