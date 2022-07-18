import React, { useState, useEffect } from "react"
import "../../assets/cssPages/LoveArmy.css"
import { Link } from "react-router-dom"
import LoveArmyCard from "../../components/LoveArmy/LoveArmyCard.jsx"
import LoveArmyHeader from "../../components/LoveArmy/LoveArmyHeader.jsx"
import { getLoveArmy } from "../../services/profileService.js"
import Pagination from "../../components/LoveArmy/Pagination"

const LoveArmy = (props) => {
  const [inputText, setInputText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(4)

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

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = filteredArmy.slice(indexOfFirstCard, indexOfLastCard)
  const paginate = pageNumber => setCurrentPage(pageNumber)

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
      <div className="scrollLoveArmy">
        {filteredArmy.length > 0 ? 
          currentCards.map((soldier) => 
            <Link to={`/loveArmy/${soldier._id}`} key={soldier._id} state={soldier._id}>
              <LoveArmyCard 
                cardInfo={soldier} 
                key={soldier._id}
              />
            </Link>
          )
          :
          <h3>Create your Love Army!</h3>
        }
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={props.army.length}
        paginate={paginate}
      />
      </div>
  </main>
  )
}

export default LoveArmy
