import mongoose from 'mongoose'

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

const planSchema = new Schema ({
  who:{
    type: String,
    required: true
  },
  where: {
    type: String,
    required: true
  },
  what: {
    type: String,
    required: true
  },
  when : {
    type: String,
    required: true
  },
  note: {
    type: String,
  }

})

const loveArmySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
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
    planSchema
  }],
  status: {
    type: Boolean,
    default: true,
  }
})

const profileSchema = new Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  loveArmy: [
    loveArmySchema
  ],
  plans: [{
    planSchema
  }],
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}