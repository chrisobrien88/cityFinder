import { createContext, useContext, useState } from 'react';
import { ICity, IMarkerType } from '../types/GameTypes';

    export const GameContext = createContext({
        findCity: { name: '', position: { lat: 0.0000, lng: 0.0000 } },
        setFindCity: (city: ICity) => {},
        score: 1500,
        setScore: (score: number) => {},
        gameOver: false,
        setGameOver: (gameOver: boolean) => {},
        markersVisible: false,
        setMarkersVisible: (markersVisible: boolean) => {},
        marker: { lat: 0.0000, lng: 0.0000 },
        setMarker: (marker: IMarkerType) => {},
        distance: 0,
        setDistance: (distance: number) => {},
        cityCount: 0,
        setCityCount: (cityCount: number) => {},
        welcomeDialogOpen: false,
        setWelcomeDialogOpen: (welcomeDialogOpen: boolean) => {},
        scoreUpdateDialogOpen: false,
        setScoreUpdateDialogOpen: (scoreUpdateDialogOpen: boolean) => {},
        gameOverDialogOpen: false,
        setGameOverDialogOpen: (gameOverDialogOpen: boolean) => {},
    });

    export const useGameState = () => {
        return useContext(GameContext);
    };

    export const GameStateProvider = ({ children }: any) => {
        const [findCity, setFindCity] = useState<ICity>({ name: '', position: { lat: 0.0000, lng: 0.0000 } });
        const [score, setScore] = useState<number>(1500);
        const [gameOver, setGameOver] = useState<boolean>(false);
        const [markersVisible, setMarkersVisible] = useState<boolean>(false);
        const [marker, setMarker] = useState<IMarkerType>({ lat: 0.0000, lng: 0.0000 });
        const [distance, setDistance] = useState<number>(0);
        const [cityCount, setCityCount] = useState<number>(0);
        const [welcomeDialogOpen, setWelcomeDialogOpen] = useState<boolean>(true);
        const [scoreUpdateDialogOpen, setScoreUpdateDialogOpen] = useState<boolean>(false);
        const [gameOverDialogOpen, setGameOverDialogOpen] = useState<boolean>(false);

      
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
            setCityCount,
            welcomeDialogOpen,
            setWelcomeDialogOpen,
            scoreUpdateDialogOpen,
            setScoreUpdateDialogOpen,
            gameOverDialogOpen,
            setGameOverDialogOpen,
            }}>
              {children}
          </GameContext.Provider>
        );
      };
      

  
    