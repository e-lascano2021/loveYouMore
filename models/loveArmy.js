import mongoose from "mongoose";

const Schema = mongoose.Schema

const giftSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  where: String,
  note: String
})

const reminderSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  link: {
    type: String
  }
})

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
  gifts: [{
    giftSchema
  }],
  reminders: [{
    reminderSchema
  }],
  plans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan"
  }],
  status: {
    type: Boolean,
    default: true,
  }
})

const LoveArmy = mongoose.model('LoveArmy', loveArmySchema)

export {LoveArmy}


