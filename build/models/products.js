"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    category_id: {
        type: mongoose_1.Schema.Types.ObjectId,
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
});
exports.default = (0, mongoose_1.model)('products', productSchema);
