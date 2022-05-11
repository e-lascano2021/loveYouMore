import React, { useState, useEffect } from "react"
import { getSoldierInfo } from "../../services/profileService"
import { useParams } from "react-router-dom"
import SoldierHeader from "../../components/Soldier/SoldierHeader"

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
    <>
    <SoldierHeader soldier={soldier}/>  
    </>
  )
}

export default Soldier
