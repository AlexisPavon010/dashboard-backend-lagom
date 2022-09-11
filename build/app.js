"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const categories_routes_1 = __importDefault(require("./routes/categories.routes"));
const transaction_routes_1 = __importDefault(require("./routes/transaction.routes"));
const balance_routes_1 = __importDefault(require("./routes/balance.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(products_routes_1.default);
app.use(categories_routes_1.default);
app.use(transaction_routes_1.default);
app.use(balance_routes_1.default);
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
exports.default = app;
