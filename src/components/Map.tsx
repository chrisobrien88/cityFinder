import { useEffect } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { getDistance } from "geolib";
import { IMarkerType } from "../types/GameTypes";

import { newCity } from "../tools/findNewCity";

import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

const windowHeight = window.innerHeight;

const Map = () => {
  const { isLoaded } = useLoadScript({
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
  } = useContext<any>(GameContext);

  const centerMarker = { lat: 54.526, lng: 15.2551 }

  useEffect(() => {
    setFindCity(newCity())
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
    setDistance(Math.round(getDistance(newMarker, findCity.position) / 1000));
    
    
  };

  // map style options (needed to remove the labels)
  const mapOptions = {
    styles: [
      {
        elementType: "labels",
        stylers: [{ visibility: "off" }],
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
                mapContainerStyle={{ height: windowHeight*0.9, width: "100vw"
                    
                }}
                center={centerMarker}
                zoom={5}
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
                  icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
                />
              </GoogleMap>
            
          
     
      ): (
        <div>Loading map</div>
      )}
    </>
  );
};

export default Map;
