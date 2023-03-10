import { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import thumbsUp from "../assets/thumbs-up.png";
import medal from "../assets/medal.png";

import RestartGameButton from "./RestartGameButton";

const GameOverDialog = () => {
  const {
    cityCount,
    gameOverDialogOpen,
    setGameOverDialogOpen,
    setScore,
    setDistance,
    setCityCount,
    setGameOver,
    setMarkersVisible,
  } = useContext<any>(GameContext);

  const handleStartGame = () => {
    setScore(1500);
    setCityCount(0);
    setGameOver(false);
    setDistance(0);
    setMarkersVisible(false);
    setGameOverDialogOpen(false);
  };

  const handleClose = () => {
    setGameOverDialogOpen(false);
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          width: "100%",
          backgroundColor: "white",
          color: "black",
          borderRadius: "50px",
          padding: "40px",
          maxWidth: "500px",
          textAlign: "center",
          alignItems: "center",
        },
      }}
      onClose={handleStartGame}
      open={gameOverDialogOpen}
    >
      <DialogTitle variant="h4">GAME OVER!</DialogTitle>
      <Divider />
      {cityCount > 5 ? (
        <img
          src={medal}
          alt="medal"
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src={thumbsUp}
          alt="thumbs up"
          style={{ width: "100px", height: "100px" }}
        />
      )}
      <Box
        m={2}
        sx={{
          borderRadius: "10px",
          width: 100,
          backgroundColor: "green",
          color: "white",
        }}
      >
        <Typography variant="body1">Final Score: </Typography>
        <Typography variant="h4">{cityCount} </Typography>
      </Box>
      <Typography variant="body2">Think you can do better? </Typography>

      <RestartGameButton />
    </Dialog>
  );
};

export default GameOverDialog;
