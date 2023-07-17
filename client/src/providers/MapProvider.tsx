import React, { createContext, useEffect, useRef } from "react";
import RouteType from "../data/routes";
import Api, { Track } from "../api";

type InterfaceMapContext = {
  mapInstance: React.MutableRefObject<google.maps.Map | null>;
  onMapClick: (e: google.maps.MapMouseEvent) => void;
  onStartDrawClick: () => void;
  onEndDrawClick: () => void;
  onResetDrawClick: () => void;
  selectedRouteType: RouteType | null;
  setSelectedRouteType: React.Dispatch<React.SetStateAction<RouteType | null>>;
};

const MapContext = createContext<InterfaceMapContext>(
  {} as InterfaceMapContext
);

type InterfaceMapProvider = {
  children: React.ReactNode;
};

const routeTypeColor = {
  [RouteType.Ground]: "#FF0000",
  [RouteType.Air]: "#0000FF",
  [RouteType.Sea]: "#00FF00",
};

const MapProvider: React.FC<InterfaceMapProvider> = ({ children }) => {
  const mapInstance = useRef<google.maps.Map | null>(null);
  const [selectedRouteType, setSelectedRouteType] =
    React.useState<RouteType | null>(null);

  const [allTracks, setAllTracks] = React.useState<Track[]>([]);

  const trackRef = useRef<{
    markers: google.maps.Marker[];
    polyline: google.maps.Polyline | null;
  }>({
    markers: [],
    polyline: null,
  });

  useEffect(() => {
    // load map from database and draw it
    Api.getAllTracks().then((tracks) => {
      if (tracks) {
        setAllTracks(tracks);
      }
    });
  }, []);

  useEffect(() => {
    // parse all tracks
    // built out all the polylines and markers
    // draw them on the map

    if (!allTracks) {
      return;
    }

    allTracks.forEach((track) => {
      const poly = new google.maps.Polyline({
        strokeColor: routeTypeColor[track.routeType],
        strokeOpacity: 1.0,
        strokeWeight: 15,
      });

      const path = poly.getPath();

      track.paths.forEach((point) => {
        path.push(new google.maps.LatLng(point.lat, point.long));
      });

      poly.setMap(mapInstance.current);

      // add markers
      track.paths.forEach((point) => {
        const newMarker = new google.maps.Marker({
          position: new google.maps.LatLng(point.lat, point.long),
          title: "#" + 1,
        });

        newMarker.setMap(mapInstance.current);

        newMarker.addListener("click", () => {
          new google.maps.InfoWindow({
            content: "Hello World!",
          }).open(mapInstance.current, newMarker);
        });
      });
    });
  }, [allTracks]);

  // const polyRef = useRef<google.maps.Polyline | null>(null);

  const createPoly = () => {
    const poly = new google.maps.Polyline({
      strokeColor: routeTypeColor[selectedRouteType || RouteType.Air],
      strokeOpacity: 1.0,
      strokeWeight: 15,
    });

    trackRef.current.polyline = poly;

    poly.setMap(mapInstance.current);
  };

  const createMarker = (latLng: google.maps.LatLng) => {
    const newMarker = new google.maps.Marker({
      position: latLng,
      title: "#" + 1,
    });

    trackRef.current.markers.push(newMarker);

    newMarker.setMap(mapInstance.current);

    newMarker.addListener("click", () => {
      new google.maps.InfoWindow({
        content: "Hello World!",
      }).open(mapInstance.current, newMarker);
    });
  };

  const appendPoly = (event: google.maps.MapMouseEvent) => {
    if (!trackRef.current.polyline) {
      throw new Error("polyline is null");
    }

    const path = trackRef.current.polyline.getPath();
    path?.push(event.latLng as google.maps.LatLng);
  };

  // const drawPolys = (pollys: google.maps.LatLng[]) => {
  //   createPoly();
  //   const path = polyRef.current?.getPath();
  //   pollys.forEach((polly) => {
  //     path?.push(polly);
  //   });
  //   pollys.forEach((polly) => {
  //     createMarker(polly);
  //   });

  //   polyRef.current?.setMap(mapInstance.current);

  //   // clear the polyRef so that we can start a new path
  //   polyRef.current = null;
  // };

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    if (trackRef.current.polyline == null) return;

    createMarker(event.latLng as google.maps.LatLng);
    appendPoly(event);
  };

  const onStartDrawClick = () => {
    createPoly();
  };

  const onEndDrawClick = () => {
    trackRef.current.polyline = null;
    trackRef.current.markers = [];

    // save current track to database
  };

  const onResetDrawClick = () => {
    trackRef.current.polyline?.setMap(null);

    // clear all markers
    trackRef.current.markers.forEach((marker) => {
      marker.setMap(null);
    });

    // reset track
    trackRef.current.polyline = null;
    trackRef.current.markers = [];
  };

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        onMapClick,
        onStartDrawClick,
        onEndDrawClick,
        onResetDrawClick,
        selectedRouteType,
        setSelectedRouteType,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
