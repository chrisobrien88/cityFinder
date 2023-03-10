import * as React from "react";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Draggable from "react-draggable";
import Paper, { PaperProps } from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import plusOne from "../assets/plusOne.png";
import sadFace from "../assets/sadFace.png";

import { newCity } from "../tools/findNewCity";

const windowHeight = window.innerHeight;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const ScoreUpdateDialog = () => {
  const {
    distance,
    findCity,
    setFindCity,
    scoreUpdateDialogOpen,
    setScoreUpdateDialogOpen,
    setMarkersVisible,
    setMapZoom,
    setMapCenter,
    setLabelsVisibility,
    mapCenter,
  } = useContext<any>(GameContext);

  const handleNextCity = () => {
    setMarkersVisible(false);
    setScoreUpdateDialogOpen(false);
    setFindCity(newCity());
    setMapZoom(4);
    setMapCenter(mapCenter);
    setLabelsVisibility("off");
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      PaperProps={{
        sx: { position: "fixed", top: 20, left: -20, m: 0 },
        style: {
          width: "100%",
          backgroundColor: "white",
          color: "black",
          borderRadius: "20px",
          boxShadow: "none",
          padding: "40px",
          maxWidth: "200px",
          textAlign: "center",
        },
      }}
      onClose={handleNextCity}
      open={scoreUpdateDialogOpen}
    >
      {distance >= 50 ? (
        <img src={sadFace} alt="sad face :(" id="draggable-dialog-title" />
      ) : (
        <img src={plusOne} alt="plus one" id="draggable-dialog-title" />
      )}
      <Typography mt={2} variant="body1">Your guess was</Typography>
      <Typography variant="h3">{distance}km</Typography>
      <Typography mb={2} variant="h6">from {findCity.name}</Typography>

      {distance > 50 ? 
        <Typography mb={2} variant="body1">Get 50km or lower to score a point</Typography> :
        <Typography mb={2} variant="body1">Nice! 1 point added to your score!</Typography>
      }
      <Button
        variant="contained"
        sx={{
          width: "200px",
          backgroundColor: "green",
          alignSelf: "center",
        }}
        onClick={handleNextCity}
      >
        Next City
      </Button>
    </Dialog>
  );
};

export default ScoreUpdateDialog;
