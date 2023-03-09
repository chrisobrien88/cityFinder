import Button from "@mui/material/Button";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const WelcomeDialog = () => {
  const {
    setScore,
    setGameOver,
    setMarkersVisible,
    setDistance,
    setCityCount,
    welcomeDialogOpen,
    setWelcomeDialogOpen,
  } = useContext<any>(GameContext);

  const handleClose = () => {
    setWelcomeDialogOpen(false);
  };

  const handleStartGame = () => {
    setScore(1500);
    setCityCount(0);
    setGameOver(false);
    setDistance(0);
    setMarkersVisible(false);
    setWelcomeDialogOpen(false);
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          width: "100%",
          backgroundColor: "white",
          color: 'black',
          borderRadius: "50px",
          padding: "40px",
          maxWidth: "500px",
          textAlign: "center",
        },
      }}
      onClose={handleClose}
      open={welcomeDialogOpen}
      
    >
      <DialogTitle variant="h3">City Finder</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem>
          <Typography
            variant="body1"
            className="{classes.h1}"
            >
            Click the map to guess the location of the city
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            For each guess you will lose points equal to the distance between the city and your guess.
          </Typography>
        </ListItem>
        <Button 
          onClick={handleStartGame}
          variant="contained"
          sx={{
            width: "100%",
            mt: 2,
            backgroundColor: "#50b230",
            color: "white",
            "&:hover": {
              backgroundColor: "#3d8924",
            },
          }}
          >Start</Button>
      </List>
    </Dialog>
  );
};

export default WelcomeDialog;
