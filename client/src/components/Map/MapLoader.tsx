import { useEffect, useRef } from "react";
import { MapContext } from "../../providers/MapProvider";
import React from "react";
const mapConfig = {
  // Center coordinates of Canada
  center: { lat: 51.45933642065146, lng: -101.45584239737815 },
  zoom: 4,
  maxZoom: 15,
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

    map.setOptions(mapConfig);
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
