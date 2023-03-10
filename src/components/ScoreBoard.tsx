import React from "react";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import Button from "@mui/material/Button";
import RestartGamebutton from "./RestartGameButton";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ProgressBar from "./ProgressBar";

const ScoreBoard = () => {
  const { findCity, score, setWelcomeDialogOpen, cityCount } =
    useContext<any>(GameContext);

  return (
    <Container
      sx={{
        backgroundColor: "rgb(255, 255, 255, 0.1)",
        paddingTop: "20px",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        flexWrap: "wrap",  
      }}
    >
      <Button onClick={() => setWelcomeDialogOpen(true)}>Rules</Button>
      <Box
        sx={{
          width: 200,
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
            margin: "10px",
          },
        }}
      >
        <Typography variant="body1">Find </Typography>
        <Typography variant="h4">{findCity.name} </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          width: 100,
          backgroundColor: "green",
          color: "white",
          margin: "10px",
        }}
      >
        <Typography variant="body1">Score </Typography>
        <Typography variant="h4">{cityCount} </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "400px",
          margin: "10px",
        }}
      >
        <FavoriteIcon sx={{ color: "pink" }} />
        <ProgressBar
          progress={(score / 1500) * 100}
          width={200}
          height={20}
          color="pink"
        />
      </Box>
      <RestartGamebutton />
    </Container>
  );
};

export default ScoreBoard;
