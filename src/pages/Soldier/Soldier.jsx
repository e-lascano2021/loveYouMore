import { useState, useEffect } from "react"
import { getSoldierInfo } from "../../services/profileService"
import { useParams } from "react-router-dom"

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
    <h1>{soldier.name}</h1>
    </>
  )
}

export default Soldier