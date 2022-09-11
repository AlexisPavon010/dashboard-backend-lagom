"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.createTransaction = exports.getTransaction = exports.getTransactions = void 0;
const transactions_1 = __importDefault(require("../models/transactions"));
const getTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield transactions_1.default.find({}).sort({ 'createdAt': 'desc' });
        res.status(200).send({ ok: true, data: transaction });
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ ok: false, error: 'product not found' });
    }
});
exports.getTransactions = getTransactions;
const getTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield transactions_1.default.findById(req.params.id);
        res.status(200).send({ ok: true, data: transaction });
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ ok: false, error: 'product not found' });
    }
});
exports.getTransaction = getTransaction;
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // paymentTypeId 1 efectivo
    // paymentTypeId 2 tarjeta
    // paymentTypeId 3 transferencia
    // paymentTypeId 4 otro
    // transactionStatusId 1 efectivo
    // transactionStatusId 2 a credito
    // transactionTypeId
    try {
        const transaction = new transactions_1.default(req.body);
        yield transaction.save();
        res.status(200).send({ ok: true, data: transaction });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error: 'an error occurred' });
    }
});
exports.createTransaction = createTransaction;
const updateTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    try {
        const transaction = yield transactions_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({ ok: true, data: transaction });
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ ok: false, error: 'an error occurred' });
    }
});
exports.updateTransaction = updateTransaction;
const deleteTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transactions_1.default.findByIdAndDelete(req.params.id);
        res.status(200).send({ ok: true, message: 'transaction deleted successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error: 'an error occurred' });
    }
});
exports.deleteTransaction = deleteTransaction;
