import { MapLoader } from "./components/Map/MapLoader";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteSelectMenu } from "./components/Menus/RouteSelectMenu";
import { RouteDrawMenu } from "./components/Menus/RouteDrawMenu";
import RouteLegend from "./components/Menus/RouteLegend";
import Login from "./components/Auth/Login";
import Api from "./api";
import RouteType from "./data/routes";

function App() {
  const callApi = async () => {
    Api.getAllTracks().then((res) => {
      console.log(res);
    });
  };
  const callApiPost = async () => {
    Api.createTrack({
      routeType: RouteType.Air,
      paths: [
        { lat: 1, long: 2 },
        { lat: 3, long: 4 },
      ],
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <button onClick={callApi}>Click me Good</button>
      <button onClick={callApiPost}>Click me harder</button>
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
