import { useEffect, useState } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { getDistance } from "geolib";
import { IMarkerType } from "../types/GameTypes";

import { newCity } from "../tools/findNewCity";

import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

const windowHeight = window.innerHeight;
const apiKey = process.env.REACT_GOOGLE_MAPS_API_KEY || "YOUR_DEFAULT_API_KEY";
const Map = () => {
  const { isLoaded } = useLoadScript({
    // I have not used process.env to aovid slowing down setup for people testing the app
    googleMapsApiKey: "AIzaSyCtblkRv8R718y6JHo4ZmOp2TwLoIrdzIc",
  });

  const {
    findCity,
    setFindCity,
    markersVisible,
    setMarkersVisible,
    marker,
    setMarker,
    setDistance,
    mapCenter,
    setMapCenter,
    mapZoom,
    setMapZoom,
    labelsVisibility,
    setLabelsVisibility,
  } = useContext<any>(GameContext);

  useEffect(() => {
    setFindCity(newCity());
  }, []);

  const handleMapClick = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng?.lat() === undefined || event.latLng?.lng() === undefined)
      return;

    const newMarker: IMarkerType = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarker(newMarker);
    setMarkersVisible(true);
    const newLat = (findCity.position.lat + newMarker.lat) / 2;
    const newLng = (findCity.position.lng + newMarker.lng) / 2;
    setMapCenter({ lat: newLat, lng: newLng });
    const newDistance = Math.round(
      getDistance(newMarker, findCity.position) / 1000
    );
    setDistance(newDistance);
    setLabelsVisibility("on");

    switch (true) {
      case newDistance <= 50:
        setMapZoom(10);
        break;
      case newDistance <= 100:
        setMapZoom(8);
        break;
      case newDistance < 200:
        setMapZoom(7);
        break;
      default:
        setMapZoom(5);
        break;
    }
  };

  // map style options (needed to remove the labels)
  const mapOptions = {
    styles: [
      {
        elementType: "labels",
        stylers: [{ visibility: `${labelsVisibility}` }],
      },
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "landscape",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          // using % to make the map responsive does not work. Use useEffect to set the height and width
          mapContainerStyle={{ height: windowHeight * 0.9, width: "100vw" }}
          center={mapCenter}
          zoom={mapZoom}
          onClick={handleMapClick}
          options={mapOptions}
        >
          <Marker
            visible={markersVisible}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
          <Marker
            visible={markersVisible}
            position={{
              lat: findCity.position.lat,
              lng: findCity.position.lng,
            }}
            icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          />
        </GoogleMap>
      ) : (
        <div>Loading map</div>
      )}
    </>
  );
};

export default Map;
