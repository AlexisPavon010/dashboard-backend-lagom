import { model, Schema } from 'mongoose'


const TransactionSchema = new Schema({
  description: {
    type: String,
  },
  isOffline: {
    type: Number,
  },
  paymentTypeId: {
    type: Number,
  },
  transactionCount: {
    type: Number,
  },
  transactionStatusId: {
    type: Number,
  },
  transactionTypeId: {
    type: Number,
  },
  value: {
    type: Number,
  },
}, {
  versionKey: false,
  timestamps: true
})

export default model('transaction', TransactionSchema)