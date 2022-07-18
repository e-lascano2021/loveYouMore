import React, { useState, useEffect } from "react"
import "../../assets/cssPages/LoveArmy.css"
import { Link } from "react-router-dom"
import LoveArmyCard from "../../components/LoveArmy/LoveArmyCard.jsx"
import LoveArmyHeader from "../../components/LoveArmy/LoveArmyHeader.jsx"
import { getLoveArmy } from "../../services/profileService.js"

const LoveArmy = (props) => {
  const [inputText, setInputText] = useState("")
console.log(props)
  useEffect(() => {
    const getArmyList = async () => {
      try {
        const armyList = await getLoveArmy()
        props.setArmy(armyList)
      } catch (error) {
        throw error
      }
    }
    getArmyList()
  }, [])

  const inputHandler = (e) => {
    const search = e.target.value
    setInputText(search)
  }

  const filteredArmy = props.army.filter((soldier) => {
    if (inputText === "") {
      return soldier
    } else {
      return soldier.name.includes(inputText)
    }
  })

  return (
    <main className="flex-column center" >
      <LoveArmyHeader/>
      <br/>
      <div className="flex-row center">
      <label>
        Search for soldier:
      </label>  
        <input onChange={inputHandler}/>
      </div>
      <div>
        {filteredArmy.map((soldier) => 
          
          <Link to={`/loveArmy/${soldier._id}`} key={soldier._id} state={soldier._id}>
            <LoveArmyCard 
              cardInfo={soldier} 
              key={soldier._id}
            />
          </Link>
        
        )}
      </div>
    </main>
  )
}

export default LoveArmy
