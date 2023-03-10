import { useState } from "react";
import * as React from "react";

import Button from "@mui/material/Button";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import ProgressBar from "./ProgressBar";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// interface IStepsProps {
//   label: string;
//   description: string;
// }

const steps = [
  {
    label: "Aim of the game",
    description: `Click on the map to guess the location of each city. `,
    hint: `How many cities can you guess before running out of health?`,
  },
  {
    label: "Scoring",
    description: `You score 1 point every time your guess is within 50km of the city center.`,
    hint: `Check the top of the screen to keep track of your score and health.`,
  },
  {
    label: "Health",
    description: `You lose health based on how far away your guess is from the city center.`,
    hint: `Keep track of your health by looking at the progress bar at the top of the screen.`,
  },
  {
    label: "End of the game",
    description: `When your health reaches 0 the game is over. How many cities can you get before that happens?`,
    hint: `You can restart the game at any time by clicking the restart button.`,
  },
];

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

  const [activeStep, setActiveStep] = useState(0);
  const stepsLength = steps.length;

  const handleNext = () => {
    if (activeStep === stepsLength - 1) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          color: "black",
          borderRadius: "50px",
          padding: "40px",
          maxWidth: "500px",
          textAlign: "center",
        },
      }}
      onClose={handleStartGame}
      open={welcomeDialogOpen}
    >
      <DialogTitle variant="h4">City Finder</DialogTitle>
      <Container
        sx={{
          backgroundColor: "rgb(235, 235, 235, 0.7)",
          borderRadius: "50px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "200px",
        }}
      >
        <Typography variant="h5">{steps[`${activeStep}`].label}</Typography>
        <Typography variant="body1">
          {steps[`${activeStep}`].description}
        </Typography>
        <Typography variant="body2">{steps[`${activeStep}`].hint}</Typography>
        <Container>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </Container>
        <ProgressBar
          progress={(activeStep / (stepsLength-1)) * 100}
          width={300}
          height={10}
          color="green"
        />
      </Container>
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
      >
        Start
      </Button>
    </Dialog>
  );
};

export default WelcomeDialog;
