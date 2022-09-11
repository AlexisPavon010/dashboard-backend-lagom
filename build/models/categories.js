"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'products',
            default: []
        }]
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)('category', categorySchema);