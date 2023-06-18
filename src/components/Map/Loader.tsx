import { useEffect, useRef } from "react";

type FreightMapProps = {
  onMapLoad: (map: google.maps.Map) => void;
};
const FreightMap: React.FC<FreightMapProps> = ({ onMapLoad }) => {
  const refElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refElement.current) return;
    const map = new window.google.maps.Map(refElement.current, {});
    if (map) {
      onMapLoad(map);
    }
  });

  return <div ref={refElement} id="map" className="w-full h-full"></div>;
};

export default FreightMap;
