import { Profile } from '../models/profile.js'

const create = async(req, res) => {
  try {
    const profile= await Profile.findById(req.user.profile)
    profile.loveArmy.push(req.body)
    console.log("req", profile);
    await profile.save()
    const newSoldier = profile.loveArmy[profile.loveArmy.length - 1];
		return res.status(201).json(newSoldier);
  } catch (error) {
    throw error
  }
}

export {
  create
  }
