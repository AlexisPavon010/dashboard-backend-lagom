"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controller_1 = require("../controllers/categories.controller");
const route = (0, express_1.Router)();
route.get('/api/categories', categories_controller_1.getCategories);
route.post('/api/category', categories_controller_1.createCategory);
route.delete('/api/category/id', categories_controller_1.deletedCategory);
exports.default = route;
