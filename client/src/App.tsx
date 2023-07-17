import { MapLoader } from "./components/Map/MapLoader";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteSelectMenu } from "./components/Menus/RouteSelectMenu";
import { RouteDrawMenu } from "./components/Menus/RouteDrawMenu";
import RouteLegend from "./components/Menus/RouteLegend";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative overflow-hidden">
                <div className="w-screen h-screen">
                  <Login />
                  <DashboardLayout />
                  <MapLoader />
                </div>
              </div>
            }
          >
            <Route path="/" element={<RouteLegend></RouteLegend>} />
            <Route
              path="/select-route"
              element={<RouteSelectMenu></RouteSelectMenu>}
            />
            <Route path="/draw-route" element={<RouteDrawMenu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
