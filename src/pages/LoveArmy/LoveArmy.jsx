import { useState, useEffect } from "react"
import LoveArmyCard from "../../components/LoveArmy/LoveArmyCard.jsx"
import LoveArmyHeader from "../../components/LoveArmy/LoveArmyHeader.jsx"
import { getLoveArmy } from "../../services/profileService.js"

const LoveArmy = (props) => {
  const [army, setArmy] = useState([])

  useEffect(() => {
    const getArmyList = async () => {
      try {
        const armyList = await getLoveArmy()
        setArmy(armyList)
      } catch (error) {
        throw error
      }
    }
    getArmyList()
  }, [])

  return (
    <main>
      <LoveArmyHeader/>
      {army.map((soldier) => {
      return( 
        <>
          <LoveArmyCard cardInfo={soldier} key={soldier._id}/>
        </>
      )
    })}
    </main>
  )
}

export default LoveArmy