import { Schema, model } from 'mongoose'

const productSchema = new Schema({
	name: {
		type: String,
	},
	category_id: {
		type: Schema.Types.ObjectId,
		required: false,
	},
	cost: {
		type: Number
	},
	price: {
		type: Number,
	},
	stock: {
		type: Number
	},
	description: {
		type: String
	},
	imageUrl: {
		type: String
	}
}, {
	versionKey: false,
	timestamps: true
})

export default model('products', productSchema)