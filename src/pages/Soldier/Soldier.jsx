import { useState, useEffect } from "react"
// import { getProfileInfo } from "../../services/profileService"

const Soldier = (props) => {
  const [soldier, setSoldier] = useState({})


  // useEffect(() => {
  //   const getSoldier = async () => {
  //     // const profileData = await getProfileInfo(props.user.profile)
  //     setProfile(props.)
  //   }
  //   getProfile()
  // },[props.user.profile])

  return (
    <>
    <h1>{soldier.name}</h1>
    </>
  )
}

export default Soldier