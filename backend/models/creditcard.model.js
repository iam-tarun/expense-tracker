import { Schema, model } from 'mongoose';

const CreditCardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  creditLimit: {
    type: Number,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  rewardPoints: {
    type: Number,
    required: true
  }
}, {timestamps: true});

export default model('CreditCard', CreditCardSchema);