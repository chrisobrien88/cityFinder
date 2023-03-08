import { useMemo, useState, useEffect } from 'react'
import {useLoadScript, GoogleMap, Marker
} from '@react-google-maps/api'
import { getDistance } from 'geolib';
import data from '../data/citiesData.json';

 
interface IMarkerType {
    lat: number,
    lng: number
  }

interface ICity {
    name: string,
    position: IMarkerType
}

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCtblkRv8R718y6JHo4ZmOp2TwLoIrdzIc",
    })

    const [findCity, setFindCity] = useState<ICity>({name: "", position: {lat: 0.0000, lng: 0.0000}});
    const [score, setScore] = useState<number>(1500);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [markersVisible, setMarkersVisible] = useState<boolean>(true);
    const [marker, setMarker] = useState<IMarkerType>({ lat: 0.0000, lng: 0.0000});
    const [distance, setDistance] = useState<number>(0);
    const [cityCount, setCityCount] = useState<number>(0);

    
    const centerMarker = useMemo(() => ({ lat: 54.5260, lng: 15.2551 }), []);

    const findNewCity = () => {
        const citiesLength = data.cities.length;
        const randomCityIndex = Math.floor(Math.random() * citiesLength);
        const cityJSON = data.cities[randomCityIndex];
        const city = JSON.parse(JSON.stringify(cityJSON));
        setFindCity(city);
    }

    useEffect(() => {
        findNewCity();        
    }, []);

    useEffect(() => {
        setScore(score => score - distance)
        if(distance > score) {
            return setGameOver(true);
        }
        // if(score <= 0) {setGameOver(true)}
    }, [distance]);

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (event.latLng?.lat() === undefined || event.latLng?.lng() === undefined) return;

        const newMarker: IMarkerType = {
            lat: event.latLng.lat(), 
            lng: event.latLng.lng()
        };
        setMarker(newMarker);
        setDistance(Math.round(getDistance(newMarker, findCity.position)/1000));
        if(score < 0) {
            return 
        }
        setCityCount(cityCount => cityCount + 1);
        findNewCity(); 
    };


    // map style options (needed to remove the labels)
      const mapOptions = {
        styles: [
          {
            elementType: 'labels',
            stylers: [
              { visibility: 'off' }
            ]
          },
          {
            featureType: 'poi',
            stylers: [
                { visibility: 'off' }
            ]
          },
          {
            featureType: 'road',
            stylers: [
                { visibility: 'off' }
            ]
          },
          {
            featureType: 'water',
            stylers: [
                { visibility: 'on' }
            ]
          },
          {
            featureType: 'landscape',
            stylers: [
                { visibility: 'off' }
            ]
          },
        ]
      };
      
  return (
    <>
    {isLoaded ? (
        <>
        <h1>Find {findCity.name}</h1>
        <p>Distance: {distance}km</p>
        <p>Score: {score}</p>
        {gameOver && <h1>Nice one, you scored: {cityCount} cities</h1>}
        {!gameOver && 
        <>
        <p>Cities: {cityCount}</p>
            <GoogleMap
                mapContainerStyle={{width: '90vw', height: '90vh'}}
                center={centerMarker}
                zoom={5}
                onClick = {handleMapClick}
                options= {mapOptions}
            >
                <Marker visible={markersVisible} position={{ lat:marker.lat, lng:marker.lng }} />
                <Marker visible={markersVisible} position={{ lat: findCity.position.lat, lng:findCity.position.lng }} icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}/>
            </GoogleMap>



        </>
        }
        </>
        )
        : <div>Loading map</div>
    }
    </>
  )
}

export default Map