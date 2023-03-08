import { useState, useContext } from 'react';
import { GameStateProvider } from './Context/GameContext';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import StartGame from './components/StartGame';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { Container } from '@mui/material';

function App() {

  const [playerReady, setPlayerReady] = useState<boolean>(true);

  return (
      // {!playerReady? <StartGame setPlayerReady={setPlayerReady}/> :
      <>
      <GameStateProvider>
        <Button variant="contained">Hello World</Button>
        <Chip label="Score" />
        <Map/>
      </GameStateProvider>
      </>
      
  );
}

export default App;
