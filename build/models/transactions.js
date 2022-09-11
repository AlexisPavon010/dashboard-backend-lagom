"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TransactionSchema = new mongoose_1.Schema({
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
});
exports.default = (0, mongoose_1.model)('transaction', TransactionSchema);
