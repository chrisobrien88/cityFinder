import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

import Container from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Draggable from "react-draggable";
import Paper, { PaperProps } from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import plusOne from "../assets/plusOne.png";
import sadFace from "../assets/sadFace.png";

import { newCity } from "../tools/findNewCity";

const windowWidth = window.innerWidth;

const FindCityDialog = () => {
  const {
    findCity,
  } = useContext<any>(GameContext);

  return (
    <Container
        style={{
            width: "auto",
          backgroundColor: "white",
          color: "black",
          borderRadius: "20px",
          boxShadow: "none",
          padding: "20px",

          maxWidth: "400px",
          textAlign: "center",
          position: "fixed", bottom: 20, left: `${windowWidth *0.5 -200}px`,
          zIndex: 100,
        }}
      
        
    >
      <Typography
        variant="body1"

        >find </Typography>
        <Typography variant="body1" color="inherit" noWrap>
    &nbsp;
  </Typography>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold",
        color: "green",

     }}

        >{findCity.name}</Typography>
    </Container>
  );
};

export default FindCityDialog;
