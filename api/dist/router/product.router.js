"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateProduct_1 = require("../controller/product/CreateProduct");
const GetProducts_1 = require("../controller/product/GetProducts");
const GetProduct_1 = require("../controller/product/GetProduct");
const DeleteProduct_1 = require("../controller/product/DeleteProduct");
exports.productRouter = express_1.default.Router();
exports.productRouter
    .post("/", CreateProduct_1.createProduct)
    .get("/", GetProducts_1.getProducts)
    .get("/:productId", GetProduct_1.getProduct)
    .delete("/:productId", DeleteProduct_1.deleteProduct);
