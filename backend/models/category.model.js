import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

export default model('Category', CategorySchema);