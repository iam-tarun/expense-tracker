import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
  }
}, {timestamps: true});

const User = model('User', UserSchema)
export default User;