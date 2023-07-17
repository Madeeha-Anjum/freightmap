import axios from "axios";
import RouteType from "./data/routes";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

export interface Track {
  routeType: RouteType;
  paths: Array<{
    lat: number;
    long: number;
  }>;
}

class Api {
  static getAllTracks = async (): Promise<Track[]> => {
    return await axiosInstance
      .get("/tracks")
      .then((res) => res.data)
      .then(
        (
          data: Array<{
            route_type: RouteType;
            paths: Array<{
              lat: number;
              long: number;
            }>;
          }>
        ) => {
          return data.map((track) => ({
            routeType: track.route_type,
            paths: track.paths,
          }));
        }
      );
  };

  static createTrack = async (track: Track) => {
    return await axiosInstance.post("/tracks", {
      route_type: track.routeType,
      paths: track.paths,
    });
  };
}

export default Api;
