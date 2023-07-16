import { useEffect, useRef } from "react";
import { MapContext } from "../../providers/MapProvider";
import React from "react";
const mapConfig = {
  center: { lat: 55.1304, lng: -99.3468 }, // Center coordinates of Canada
  zoom: 5,
};

const MapLoader: React.FC = () => {
  const refElement = useRef<HTMLDivElement>(null);
  const { mapInstance, onMapClick } = React.useContext(MapContext);

  useEffect(() => {
    if (!refElement.current) return;
    console.log("Here the map is loaded");
    const map = new window.google.maps.Map(refElement.current, {});

    if (!map) {
      throw new Error("Map could not be initialized");
    }

    map.setCenter(mapConfig.center);
    map.setZoom(mapConfig.zoom);
    // set map instance
    mapInstance.current = map;
  }, [mapInstance]);

  useEffect(() => {
    if (!mapInstance.current) return;
    // add event listener
    mapInstance.current.addListener("click", onMapClick);
  }, [mapInstance, onMapClick]);

  return <div ref={refElement} className="w-full h-full"></div>;
};

export { MapLoader };
