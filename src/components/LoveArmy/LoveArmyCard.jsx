import React, { useState, useEffect } from "react"
import BrowniePoints from "../BrowniePoints/BrowniePoints"
import { getSoldierInfo } from "../../services/profileService"


const LoveArmyCard = (props) => {
  const [cardInfo, setCardInfo] = useState({})
  
  useEffect(() => {
    const getSoldier = async () => {
      const soldierData = await getSoldierInfo(props.cardInfo._id)
      setCardInfo(soldierData)
    }
    getSoldier()
  },[props.cardInfo._id])

  return (
    <div className="flex-row">
      <img src={cardInfo.image} alt= "temp"/>

      <div className="flex-column center contain-content width-eighty">
        <h2 className="margin-zero">{cardInfo.name}</h2>
        <br/>
        <h6 className="margin-zero">Love Types: </h6>
        <p className="margin-zero">{cardInfo?.loveTypes?.join(", ")}</p>
        <br/>
        <h6 className="margin-zero">Love Languages: </h6>
        <p className="margin-zero">{cardInfo?.loveLanguages?.join(", ")}</p>
        <BrowniePoints soldier={cardInfo}/>
      </div>
    </div>
  )
}
export default LoveArmyCard
