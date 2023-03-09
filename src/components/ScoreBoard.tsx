import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GameContext } from '../Context/GameContext'
import Button from '@mui/material/Button'
import RestartGamebutton from './RestartGameButton'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

const ScoreBoard = () => {

  const {
    findCity,
    score,
    distance,
    setWelcomeDialogOpen,
  } = useContext<any>(GameContext);



  return (
    <Container 
    sx={
      {
        backgroundColor: "rgb(255, 255, 255, 0.1)",
        borderRadius: "50px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        
        textAlign: "center",

    }}
    >
    <Button onClick={()=> (setWelcomeDialogOpen(true))}>Rules</Button>
    <Box>
    <Typography variant="body1">Find </Typography>
    <Chip 
    color='success'
    size='medium'
    label={`${findCity.name}`} />
    </Box>
    <p>Last Guess: {distance}km</p>
    <p>Points Remaining: {score}/1500</p>
    
    <RestartGamebutton/>
    </Container>
  )
}

export default ScoreBoard