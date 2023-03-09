import { useContext } from 'react'
import { GameContext } from '../Context/GameContext'
import Button from '@mui/material/Button'

const RestartGameButton = () => {
    const {
        setScore,
        setDistance,
        setCityCount,
        setGameOver,
        setMarkersVisible,
        setGameOverDialogOpen
      } = useContext<any>(GameContext);
    
      const restart = () => {
        setScore(1500)
        setCityCount(0)
        setGameOver(false)
        setDistance(0)
        setMarkersVisible(false)
        setGameOverDialogOpen(false)
      }
  return (
    <Button variant="contained" color="primary" onClick={restart}>Restart</Button>
  )
}

export default RestartGameButton