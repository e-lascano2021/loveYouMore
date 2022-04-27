import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  loveArmy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "LoveArmy"
  }],
  plans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan"
  }],
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
