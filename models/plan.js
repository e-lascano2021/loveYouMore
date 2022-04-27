import mongoose from "mongoose";

const Schema = mongoose.Schema

const planSchema = new Schema ({
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

const Plan = mongoose.model('Plan', planSchema)

export {Plan}