import { Schema, model } from 'mongoose';

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {timestamps: true})

export default model('Transaction', TransactionSchema);