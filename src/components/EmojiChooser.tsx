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
import loveFace from "../assets/love.png";
import cryingFace from "../assets/crying.png";
import annoyedFace from "../assets/sarcastic.png";

import { newCity } from "../tools/findNewCity";



const EmojiChooser = () => {

    const {
        distance,
      } = useContext<any>(GameContext);

  return (
    <>
        {distance <= 50 && 
            <img src={loveFace} alt="Love face :D" id="draggable-dialog-title" />}


        {distance > 50 && distance <= 100 && 
            <img src={sadFace} alt="Sade face :(" id="draggable-dialog-title" />}

        {distance > 100 && distance <= 300 && 
            <img src={cryingFace} alt="Crying face ;(" id="draggable-dialog-title" />}

        {distance > 300 &&
             <img src={annoyedFace} alt="Annoyed face :/" id="draggable-dialog-title" />}

    </>

  )
}

export default EmojiChooser