import mongoose from "mongoose";

const Schema = mongoose.Schema

const loveArmySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  totalPoints: {
    type: Number,
    default: 250,
  },
  currentPoints: {
    type: Number,
    default: 125,
  },
  status: {
    type: Boolean,
    default: true,
  }
})

const LoveArmy = mongoose.model('LoveArmy', loveArmySchema)

export {LoveArmy}


