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
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt= "temp"/>

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
