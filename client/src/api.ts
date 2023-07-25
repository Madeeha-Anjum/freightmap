import axios from "axios";
import RouteType from "./data/routes";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

export interface Track {
  routeType: RouteType;
  description: string;
  paths: Array<{
    lat: number;
    long: number;
  }>;
}

class Api {
  static getAllTracks = async (): Promise<Track[]> => {
    return [
      {
        routeType: RouteType.Ground,
        description: "This is a test route from Edmonton to Calgary via ground",
        paths: [
          { lat: 53.529828680725146, long: -113.5314145622586 },
          { lat: 51.03030685527527, long: -114.1027036247586 },
        ],
      },
      {
        routeType: RouteType.Sea,
        description: "This is a test route from Labrador to Mary River via sea",
        paths: [
          { lat: 54.78145654868147, long: -58.920420079533045 },
          { lat: 65.2978959192316, long: -80.45362320453305 },
          { lat: 71.02040595599011, long: -80.45362320453305 },
        ],
      },
      {
        routeType: RouteType.Air,
        description: "This is a test route from Edmonton to Toronto via air",
        paths: [
          { lat: 53.306262292435996, long: -113.58283996582031 },
          { lat: 43.62568735648761, long: -79.39883836616085 },
        ],
      },
    ];

    // return await axiosInstance
    //   .get("/tracks")
    //   .then((res) => res.data)
    //   .then(
    //     (
    //       data: Array<{
    //         route_type: RouteType;
    //         paths: Array<{
    //           lat: number;
    //           long: number;
    //         }>;
    //       }>
    //     ) => {
    //       return data.map((track) => ({
    //         routeType: track.route_type,
    //         paths: track.paths,
    //       }));
    //     }
    //   );
  };

  static createTrack = async (track: Track) => {
    return await axiosInstance.post("/tracks", {
      route_type: track.routeType,
      paths: track.paths,
    });
  };
}

export default Api;
