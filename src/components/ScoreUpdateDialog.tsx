import Button from "@mui/material/Button";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import Divider from "@mui/material/Divider";

import LessSmileyEmoji from '@mui/icons-material/SentimentSatisfiedAlt';
import MoreSmileyEmoji from '@mui/icons-material/SentimentVerySatisfied';

import { newCity } from "../tools/findNewCity";

const ScoreUpdateDialog = () => {
  const {
    score,
    distance,
    findCity,
    setFindCity,
    scoreUpdateDialogOpen,
    setScoreUpdateDialogOpen,
    setMarkersVisible,
    cityCount,
  } = useContext<any>(GameContext);

  const handleClose = () => {
    setScoreUpdateDialogOpen(false);
  };

  const handleNextCity = () => {
  setMarkersVisible(false);
  setScoreUpdateDialogOpen(false);
  setFindCity(newCity());
};
  
  return (
    <Dialog
    sx={
      {
        backgroundColor: "rgb(255, 255, 255, 0.1)",
    }}
    PaperProps={{
      style: {
        opacity: 0.7,
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
      open={scoreUpdateDialogOpen}
      
    >
      {distance >= 50 ? 
        <LessSmileyEmoji
          sx={{
            color: "grey",
            fontSize: "100px",
            alignSelf: "center",
          }}
        />
        : 
        <MoreSmileyEmoji 
          sx={{
            color: "green",
            fontSize: "150px",
            alignSelf: "center",
          }}
        />
      }
        <Typography variant="body1">
          Your guess was
        </Typography>
        <Typography variant="h3">
          {distance}km 
        </Typography>
        <Typography variant="h6">
        from {findCity.name}
        </Typography>
        <Divider 
        sx={{
          width: "100%",
          margin: "20px 0px",
          backgroundColor: "orange",
        }}
        />

        <Typography variant="h6">
          {score} points remaining
        </Typography>
        <MobileStepper
          variant="progress"
          steps={1500}
          position="static"
          activeStep={score}
          sx={{
            flexGrow: 1,
          }}
          nextButton={
            <Button>
            </Button>
          }
          backButton={
            <Button>
            </Button>
          }
        />
         <Divider 
        sx={{
          width: "100%",
          margin: "20px 0px",
          backgroundColor: "orange",
        }}
        />
        <Typography variant="h5"
        sx={
          {
            margin: "20px 0px",
          }}>
          Score: {cityCount}
        </Typography>
        <Button variant="contained" onClick={handleNextCity}>Next City</Button>
    </Dialog>
  );
};

export default ScoreUpdateDialog;
