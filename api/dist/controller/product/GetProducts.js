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
exports.getProducts = void 0;
const model_1 = require("../../model");
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield model_1.ProductModel.find()
            .sort({ _id: -1 })
            .populate("categoryId");
        res.json({ product: product });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.getProducts = getProducts;
