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
exports.CreateOrderDetails = void 0;
const model_1 = require("../../model");
const CreateOrderDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, productQuantity, amount, orderId } = req.body;
    try {
        // const OrderDetailExist = await OrderDetailsModel.findOne({ productId });
        // if (OrderDetailExist) {
        //   res.status(404).json({ message: "OrderDetails already exist" });
        // }
        const orderDetails = yield new model_1.OrderDetailsModel({
            productId: productId,
            productQuantity: productQuantity,
            amount: amount,
            orderId: orderId,
        }).save();
        const { _id } = orderDetails;
        const updatedOrder = yield model_1.OrderModel.findByIdAndUpdate({
            _id: orderId,
        }, { $push: { orderItem: _id } }, { new: true });
        res.json({ orderDetails: orderDetails, updatedOrder: updatedOrder });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.CreateOrderDetails = CreateOrderDetails;
