import * as tokenService from '../services/tokenService'

const BASE_URL = '/api/profiles'

const getLoveArmy = async () => {
  try {
    const res = await fetch(`${BASE_URL}/loveArmy`, {
      method: "GET",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

const getProfileInfo = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

const getSoldierInfo = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/loveArmy/${id}`, {
      method: "GET",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export { 
  getLoveArmy,
  getProfileInfo,
  getSoldierInfo
}