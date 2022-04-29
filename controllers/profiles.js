import { Profile } from '../models/profile.js'


const show = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    return res.status(201).json(profile);
  } catch (error) {
    throw error
  }
}

const index = async(req, res) => {
  try {
    const profile = await Profile.findById(req.user.profile);
    return res.status(201).json(profile.loveArmy);
  } catch (error) {
    throw error
  }
}

const create = async(req, res) => {
  try {
    const profile= await Profile.findById(req.user.profile)
    profile.loveArmy.push(req.body)
    await profile.save()
    const newSoldier = profile.loveArmy[profile.loveArmy.length - 1];
    return res.status(201).json(newSoldier);
  } catch (error) {
    throw error
  }
}

export {
  show,
  index,
  create
}
