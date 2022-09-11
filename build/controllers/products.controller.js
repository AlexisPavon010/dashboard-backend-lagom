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
exports.deleteProduct = exports.createProduct = exports.updateProduct = exports.getProduct = exports.getProducts = void 0;
const categories_1 = __importDefault(require("../models/categories"));
const products_1 = __importDefault(require("../models/products"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_1.default.find();
    res.status(200).send(products);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    products_1.default.findById(req.params.id)
        .then((products) => {
        res.status(200).send(products);
    })
        .catch((error) => {
        console.log(`<-----${error}----->`);
        res.status(400).send({ erorr: 'product not found' });
    });
};
exports.getProduct = getProduct;
const updateProduct = (req, res) => {
    products_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((products) => {
        res.status(200).send(products);
    })
        .catch((error) => {
        console.log(error);
        res.status(400).send({ erorr: 'product not found' });
    });
};
exports.updateProduct = updateProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const product = new products_1.default(req.body);
        const category = yield categories_1.default.findById(product.category_id);
        (_a = category === null || category === void 0 ? void 0 : category.products) === null || _a === void 0 ? void 0 : _a.push(product.id);
        yield product.save();
        yield (category === null || category === void 0 ? void 0 : category.save());
        res.status(200).send(product);
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ error: 'product not found' });
    }
});
exports.createProduct = createProduct;
const deleteProduct = (req, res) => {
    products_1.default.findByIdAndDelete(req.params.id)
        .then(() => {
        res.send({ message: 'product deleted successfully' });
    })
        .catch((error) => {
        console.log(error);
        res.status(404).send({ error: 'product not found' });
    });
};
exports.deleteProduct = deleteProduct;
