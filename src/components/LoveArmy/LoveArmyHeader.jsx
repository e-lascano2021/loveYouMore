import { useNavigate } from "react-router-dom"

const LoveArmyHeader = () => {
  const navigate = useNavigate()
  
  const handleAddSoldier = () => {
    navigate("/loveArmy/new")
  }
  
  return(
    <div className="flex-column center">
      <h1>LoveArmy</h1>
      <button onClick={handleAddSoldier}>Add Soldier</button>
    </div>
  )
}
export default LoveArmyHeader
