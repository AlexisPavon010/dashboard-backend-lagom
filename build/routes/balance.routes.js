"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const balance_controller_1 = require("../controllers/balance.controller");
const route = (0, express_1.Router)();
route.get('/api/balances', balance_controller_1.getBalances);
route.get('/api/balance/:id', balance_controller_1.getBalance);
route.post('/api/balance/:id', balance_controller_1.createBalances);
route.patch('/api/balance/:id', balance_controller_1.updateBalances);
route.delete('/api/balance/:id', balance_controller_1.deleteBalances);
exports.default = route;