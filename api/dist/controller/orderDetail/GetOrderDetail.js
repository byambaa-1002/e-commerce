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
exports.getOrderDetail = void 0;
const model_1 = require("../../model");
const getOrderDetail = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderDetailId } = _req.body;
    try {
        const orderDetail = yield model_1.OrderDetailsModel.findOne({ _id: orderDetailId });
        res.json({ orderDetail: orderDetail });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.getOrderDetail = getOrderDetail;
