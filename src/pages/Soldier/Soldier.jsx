import React, { useState, useEffect } from "react"
import { getSoldierInfo } from "../../services/profileService"
import { useParams } from "react-router-dom"
import SoldierHeader from "../../components/Soldier/SoldierHeader"
import "../../assets/cssPages/Soldier.css"

const Soldier = () => {
  const { id } = useParams()
  const [soldier, setSoldier] = useState({})
  
  
  useEffect(() => {
    const getSoldier = async () => {
      const soldierData = await getSoldierInfo(id)
      setSoldier(soldierData)
    }
    getSoldier()
  },[id])

  return (
    <main className="flex-column center">
      <div className="soldier-header flex-row">
        <SoldierHeader soldier={soldier}/>  
      </div>
      <div className="soldier-body">
      </div>
    </main>
  )
}

export default Soldier
