import React from 'react'
import { Container } from '@mui/material'
import Button from '@mui/material/Button'


const StartGame = ({setPlayerReady}:any) => {
  return (
    <Container>
        <h1>Ready?</h1>
        <p>Click the button to start the game</p>
        <Button variant="contained" onClick={() => setPlayerReady(true)}>Start Game</Button>
    </Container>
    
  )
}

export default StartGame