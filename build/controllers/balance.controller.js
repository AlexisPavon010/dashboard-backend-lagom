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
exports.deleteBalances = exports.updateBalances = exports.createBalances = exports.getBalance = exports.getBalances = void 0;
const transactions_1 = __importDefault(require("../models/transactions"));
const getBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield transactions_1.default.find({});
        function calculateBalances() {
            const efectivo = transactions.filter(({ transactionStatusId }) => transactionStatusId == 1);
            const credito = transactions.filter(({ transactionStatusId }) => transactionStatusId == 2);
            let totalSales = 0;
            efectivo.map(({ value }) => {
                totalSales = totalSales + value;
            });
            return {
                sales: 0,
                spendings: totalSales,
                utility: totalSales,
            };
        }
        res.status(200).send({
            ok: true,
            balanceReport: calculateBalances()
        });
    }
    catch (error) {
        res.status(404).send({ ok: false, message: 'balances not found' });
    }
});
exports.getBalances = getBalances;
const getBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send({ ok: true });
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ ok: false, message: 'balance not found' });
    }
});
exports.getBalance = getBalance;
const createBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send({ ok: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error: 'an error occurred' });
    }
});
exports.createBalances = createBalances;
const updateBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send({ ok: true, message: 'Balances updated successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ ok: false, message: 'balances not found' });
    }
});
exports.updateBalances = updateBalances;
const deleteBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send({ ok: true, message: 'Balances deleted successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ ok: false, message: 'balances not found' });
    }
});
exports.deleteBalances = deleteBalances;
