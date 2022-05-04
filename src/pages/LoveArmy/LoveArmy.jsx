import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
          <Link to={`/loveArmy/${soldier._id}`} key={soldier._id} state={soldier._id}>
            <LoveArmyCard cardInfo={soldier} key={soldier._id}/>
          </Link>
        )
      })}
    </main>
  )
}

export default LoveArmy
