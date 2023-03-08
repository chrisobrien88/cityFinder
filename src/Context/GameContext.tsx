import { createContext, useContext, useState } from 'react';
import { ICity, IMarkerType } from '../types/GameTypes';

    export const GameContext = createContext({
        findCity: { name: '', position: { lat: 0.0000, lng: 0.0000 } },
        setFindCity: (city: ICity) => {},
        score: 1500,
        setScore: (score: number) => {},
        gameOver: false,
        setGameOver: (gameOver: boolean) => {},
        markersVisible: true,
        setMarkersVisible: (markersVisible: boolean) => {},
        marker: { lat: 0.0000, lng: 0.0000 },
        setMarker: (marker: IMarkerType) => {},
        distance: 0,
        setDistance: (distance: number) => {},
        cityCount: 0,
        setCityCount: (cityCount: number) => {},
    });

    export const useGameState = () => {
        return useContext(GameContext);
    };

    export const GameStateProvider = ({ children }: any) => {
        const [findCity, setFindCity] = useState<ICity>({ name: '', position: { lat: 0.0000, lng: 0.0000 } });
        const [score, setScore] = useState<number>(1500);
        const [gameOver, setGameOver] = useState<boolean>(false);
        const [markersVisible, setMarkersVisible] = useState<boolean>(true);
        const [marker, setMarker] = useState<IMarkerType>({ lat: 0.0000, lng: 0.0000 });
        const [distance, setDistance] = useState<number>(0);
        const [cityCount, setCityCount] = useState<number>(0);

      
        return (
          <GameContext.Provider value={{
            findCity, 
            setFindCity, 
            score, 
            setScore, 
            gameOver, 
            setGameOver, 
            markersVisible, 
            setMarkersVisible, 
            marker, 
            setMarker, 
            distance, 
            setDistance, 
            cityCount, 
            setCityCount }}>
              {children}
          </GameContext.Provider>
        );
      };
      

  
    