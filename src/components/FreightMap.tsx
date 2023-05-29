import { useEffect, useRef } from "react";

type FreightMapProps = {
  center: google.maps.LatLngLiteral;
  zoom: number;
};
const FreightMap: React.FC<FreightMapProps> = ({ center, zoom }) => {
  const refElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Access the current value of the ref
    if (!refElement.current) return;
    console.log("refElement.current", refElement.current);
    // Add the map to the referenced element
    new window.google.maps.Map(refElement.current, {
      center,
      zoom,
    });
  });
  return (
    <>
      <div>
        <div ref={refElement} id="map" className="w-full h-96"></div>
      </div>
    </>
  );
};

export default FreightMap;
