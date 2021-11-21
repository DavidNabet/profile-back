import { Schema, model } from "mongoose";
const ProfileSchema = new Schema({
  name: String,
  email: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("profile", ProfileSchema);
