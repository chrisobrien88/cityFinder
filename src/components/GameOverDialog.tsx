import { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import RestartGameButton from "./RestartGameButton";

const GameOverDialog = () => {
  const {
    cityCount,
    gameOverDialogOpen,
    setGameOverDialogOpen,
  } = useContext<any>(GameContext);

  const handleClose = () => {
    setGameOverDialogOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={gameOverDialogOpen}>
      <DialogTitle variant="h4">GAME OVER!</DialogTitle>
      <Divider />
          <Typography>You managed to guess {cityCount} cities</Typography>
        <RestartGameButton />
    </Dialog>
  );
};

export default GameOverDialog;
