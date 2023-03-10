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
        setGameOverDialogOpen,
        setLabelsVisibility,
        setMapZoom
      } = useContext<any>(GameContext);
    
      const restart = () => {
        setScore(1500)
        setCityCount(0)
        setGameOver(false)
        setDistance(0)
        setMarkersVisible(false)
        setGameOverDialogOpen(false)
        setLabelsVisibility("off");
        setMapZoom(4);
      }
  return (
    <Button variant="contained" color="primary" onClick={restart}>Restart</Button>
  )
}

export default RestartGameButton