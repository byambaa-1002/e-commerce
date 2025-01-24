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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const model_1 = require("../../model");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, categoryId, price, quantity, thumbnails, images, coupon, salePercent, description, } = req.body;
    console.log(req.body);
    try {
        const product = yield new model_1.ProductModel({
            productName,
            categoryId,
            price,
            quantity,
            thumbnails,
            images,
            coupon,
            salePercent,
            description,
            viewsCount: 0,
        }).save();
        res.status(200).json({ message: "Created new product", product: product });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.createProduct = createProduct;
