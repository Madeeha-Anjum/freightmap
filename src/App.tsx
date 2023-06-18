import { Wrapper } from "@googlemaps/react-wrapper";
import ENV from "./data/env";
import FreightMap from "./components/Map/Loader";
import { useRef } from "react";
import SidePanel from "./components/Dashboard/SidePanel";
import Menu from "./components/Dashboard/Menu";
import { MenuProvider } from "./providers/MenuProvider";

const mapConfig = {
  center: { lat: 55.1304, lng: -99.3468 }, // Center coordinates of Canada
  zoom: 5,
};
function App() {
  const mapInstance = useRef<google.maps.Map | null>(null);

  const onMapLoad = (map: google.maps.Map) => {
    map.setCenter(mapConfig.center);
    map.setZoom(mapConfig.zoom);
    // set map to the map instance
    mapInstance.current = map;
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="w-screen h-screen">
          <MenuProvider>
            <SidePanel />
            <Menu>
              <div>Map menu</div>
            </Menu>
          </MenuProvider>
          <Wrapper apiKey={ENV.GOOGLE_MAPS_API_KEY}>
            <FreightMap onMapLoad={onMapLoad} />
          </Wrapper>
        </div>
      </div>
    </>
  );
}

export default App;
