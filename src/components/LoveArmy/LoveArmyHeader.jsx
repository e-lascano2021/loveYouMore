import { useNavigate } from "react-router-dom"

const LoveArmyHeader = () => {
  const navigate = useNavigate()
  
  const handleAddSoldier = () => {
    navigate("/loveArmy/new")
  }
  
  return(
    <>
      <h5>LoveArmy</h5>
      <button onClick={handleAddSoldier}>Add Soldier</button>
    </>
  )
}
export default LoveArmyHeader
