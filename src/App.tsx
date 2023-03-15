import { GameStateProvider } from "./Context/GameContext";

import "./App.css";

import Play from "./pages/Play";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // {!playerReady? <StartGame setPlayerReady={setPlayerReady}/> :
    <>
      <Router>
        <GameStateProvider>
            <Routes>
              <Route path="/" element={<Play />} />
            </Routes>
        </GameStateProvider>
      </Router>
    </>
  );
}

export default App;
