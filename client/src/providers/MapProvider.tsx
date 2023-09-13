import React, { createContext, useEffect, useRef } from "react";
import RouteType from "../data/routes";
import Api, { Track } from "../api";

type InterfaceMapContext = {
  mapInstance: React.MutableRefObject<google.maps.Map | null>;
  onMapClick: (e: google.maps.MapMouseEvent) => void;
  onStartDrawClick: () => void;
  onEndDrawClick: () => void;
  onResetDrawClick: () => void;
  onCancelDrawClick: () => void;
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

const iconBase = window.location.origin + "/assets/icons/";
const icons: Record<string, { icon: string }> = {
  Sea: {
    icon: iconBase + "sea.svg",
  },
  Air: {
    icon: iconBase + "air.svg",
  },
  Ground: {
    icon: iconBase + "ground.svg",
  },
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

  const getSelectedIcon = (routeType: RouteType) => {
    switch (routeType) {
      case RouteType.Air:
        return icons.Air.icon;
      case RouteType.Sea:
        return icons.Sea.icon;
      case RouteType.Ground:
        return icons.Ground.icon;
    }
  };

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
        strokeWeight: 5,
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
          icon: getSelectedIcon(track.routeType),
        });

        newMarker.setMap(mapInstance.current);

        newMarker.addListener("click", () => {
          new google.maps.InfoWindow({
            content: track.description,
          }).open(mapInstance.current, newMarker);
        });
      });
    });
  }, [allTracks]);

  const createPoly = () => {
    if (selectedRouteType == null) return;

    const poly = new google.maps.Polyline({
      strokeColor: routeTypeColor[selectedRouteType || RouteType.Air],
      strokeOpacity: 1.0,
      strokeWeight: 5,
    });

    trackRef.current.polyline = poly;

    poly.setMap(mapInstance.current);
  };

  const createMarker = (latLng: google.maps.LatLng) => {
    if (selectedRouteType == null) return;
    console.log("Here is the icon", getSelectedIcon(selectedRouteType));
    console.log("Here why this get called 2 tiems ");
    const newMarker = new google.maps.Marker({
      position: latLng,
      title: "#" + 1,
      icon: getSelectedIcon(selectedRouteType),
    });
    trackRef.current.markers.push(newMarker);

    newMarker.setMap(mapInstance.current);

    newMarker.addListener("click", () => {
      new google.maps.InfoWindow({
        content: "Description from X to Z via Y",
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

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    console.log("Here clicked");
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
    setSelectedRouteType(null);

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

    createPoly();
  };

  const onCancelDrawClick = () => {
    trackRef.current.polyline?.setMap(null);

    // clear all markers
    trackRef.current.markers.forEach((marker) => {
      marker.setMap(null);
    });

    // reset track
    trackRef.current.polyline = null;
    trackRef.current.markers = [];

    setSelectedRouteType(null);
  };

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        onMapClick,
        onStartDrawClick,
        onEndDrawClick,
        onResetDrawClick,
        onCancelDrawClick,
        selectedRouteType,
        setSelectedRouteType,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
