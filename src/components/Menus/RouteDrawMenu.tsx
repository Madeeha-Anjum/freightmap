import React, { useEffect } from "react";
import { MapContext } from "../../providers/MapProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";

import Button from "../ui/Button";
import Icon from "../Icons/Icon";

const RouteDrawMenu = () => {
  const navigate = useNavigate();

  const { onEndDrawClick, onResetDrawClick, selectedRouteType } =
    React.useContext(MapContext);

  useEffect(() => {
    if (selectedRouteType === null) navigate("/select-route");
  }, [selectedRouteType, navigate]);

  // useEffect(() => {
  //   if (mapInstance.current !== null) {
  //     console.log("Here is the mapInstance: ", mapInstance.current);
  //     const poly = createPoly();

  //     mapInstance.current.addListener(
  //       "click",
  //       (event: google.maps.MapMouseEvent) => {
  //         const map = mapInstance.current;
  //         const path = poly.getPath();
  //         path.push(event.latLng as google.maps.LatLng);
  //         const marker = createMarker(event.latLng as google.maps.LatLng);
  //         poly.setMap(map);
  //         marker.setMap(map);
  //       }
  //     );
  //   }
  // }, [mapInstance]);

  // const createPoly = () => {
  //   return new google.maps.Polyline({
  //     strokeColor: "#000000",
  //     strokeOpacity: 1.0,
  //     strokeWeight: 3,
  //   });
  // };

  // const createMarker = (latLng: google.maps.LatLng) => {
  //   return new google.maps.Marker({
  //     position: latLng,
  //     title: "#" + 1,
  //   });
  // };

  const handleOnSaveClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onEndDrawClick();
    navigate("/select-route");
    // console.log("save", e);
    // console.log("Here is the route: ", route);
    // console.log("Here is the mapInstance: ", mapInstance.current);
    // console.log("Here is the mapInstance: ", mapInstance.current?.getCenter());
    // console.log("Here is the mapInstance: ", mapInstance.current?.getZoom());
    // console.log("Here is the mapInstance: ", mapInstance.current?.getBounds());
    // console.log(
    //   "Here is the mapInstance: ",
    //   mapInstance.current?.getProjection()
    // );
    // console.log(
    //   "Here is the mapInstance: ",
    //   mapInstance.current?.getMapTypeId()
    // );
    // console.log("Here is the mapInstance: ", mapInstance.current?.getHeading());
    // console.log("Here is the mapInstance: ", mapInstance.current?.getTilt());
    // console.log("Here is the mapInstance: ", mapInstance.current?.getDiv());
  };

  return (
    <div>
      <Link to="/select-route">
        <Icon.Home className="w-8 text-white"></Icon.Home>
      </Link>
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
          navigate("/select-route");
        }}
      >
        Cancel
      </Button>
    </div>
  );
};

export { RouteDrawMenu };
