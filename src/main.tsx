import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MenuProvider } from "./providers/MenuProvider.tsx";
import { MapProvider } from "./providers/MapProvider.tsx";
import { Wrapper } from "@googlemaps/react-wrapper";
import ENV from "./data/env";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <Wrapper apiKey={ENV.GOOGLE_MAPS_API_KEY}>
        <MapProvider>
          <App />
        </MapProvider>
      </Wrapper>
    </MenuProvider>
  </React.StrictMode>
);
