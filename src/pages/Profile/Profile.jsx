import React, { useState, useEffect } from "react"
import { getProfileInfo } from "../../services/profileService"

const Profile = (props) => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const getProfile = async () => {
      const profileData = await getProfileInfo(props.user.profile)
      setProfile(profileData)
    }
    getProfile()
  },[props.user.profile])

  return (
    <>
    <h1>{profile.name}'s profile</h1>
    </>
  )
}

export default Profile