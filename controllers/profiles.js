import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

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
  index,
  create
  }
