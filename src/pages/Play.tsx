import Map from "../components/Map";
import ScoreBoard from "../components/ScoreBoard";
import WelcomeDialog from "../components/WelcomeDialog";
import { useEffect } from "react";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

import ScoreUpdateDialog from "../components/ScoreUpdateDialog";
import GameOverDialog from "../components/GameOverDialog";

const Play = () => {

  const {
    score,
    setScore,
    distance,
    setGameOverDialogOpen,
    setScoreUpdateDialogOpen,
    setCityCount,
    marker
  } = useContext<any>(GameContext);

  useEffect(() => {
    const newScore = score - distance;
    setScore(newScore);
   console.log(newScore);
   
    if (newScore <= 0) {
      setGameOverDialogOpen(true);
      return 
    } 
    if (newScore < 1500) {
    setCityCount((cityCount: number) => cityCount + 1);
    setScoreUpdateDialogOpen(true);
    }

  }, [marker]);

  return (
    <>
      <WelcomeDialog />
      <ScoreUpdateDialog />
      <GameOverDialog />
      <ScoreBoard />
      <Map />
    </>
  );
};

export default Play;
