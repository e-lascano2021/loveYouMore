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
    req.body.loveTypes = req.body.loveTypes?.map(el => {return el.value})
    req.body.loveLanguages = req.body.loveLanguages?.map(el => {return el.value})
    profile.loveArmy.push(req.body)
    await profile.save()
    const newSoldier = profile.loveArmy[profile.loveArmy.length - 1];
    return res.status(201).json(newSoldier);
  } catch (error) {
    throw error
  }
}

const showSoldier = async(req, res) => {
  try {
    Profile.findById(req.user.profile, function (err, myProfile) {
    const subDocument = myProfile.loveArmy.id(req.params.id);
      return res.status(201).json(subDocument)
    });
  } catch (error) {
    throw error
  }
}

const updatePoints = async(req, res) => {
  try {
    Profile.findById(req.user.profile, function (err, myProfile) {
      let subDocument = myProfile.loveArmy.id(req.params.id)

      if(subDocument.currentPoints > subDocument.totalPoints) {
        subDocument.totalPoints = subDocument.currentPoints
      }

      if (subDocument.currentPoints + req.body.currentPoints < 0) {
        subDocument.currentPoints = 0
      } else {
        subDocument.currentPoints += req.body.currentPoints
      }
      
      myProfile.save()
      return res.status(201).json(subDocument)
    })
  } catch (error) {
    throw error
  }
}

export {
  show,
  index,
  create,
  showSoldier,
  updatePoints
}
