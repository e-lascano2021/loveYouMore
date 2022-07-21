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

const createLoveArmy = async (post) => {
  try {
    const res = await fetch(`${BASE_URL}/loveArmy/new`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(post)
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

const updatePoints = async (id, points) => {
  try {
    const res = await fetch(`${BASE_URL}/loveArmy/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(points)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export { 
  getLoveArmy,
  createLoveArmy,
  getProfileInfo,
  getSoldierInfo,
  updatePoints,
}