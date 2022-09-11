import { Schema, model } from 'mongoose'


const categorySchema = new Schema({
  name: { type: String, required: true },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'products',
    default: []
  }]
}, {
  versionKey: false,
  timestamps: true
})

export default model('category', categorySchema)