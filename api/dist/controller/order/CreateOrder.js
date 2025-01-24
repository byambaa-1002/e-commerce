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
exports.createOrder = void 0;
const model_1 = require("../../model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, phoneNumber, coupon, description, orderItems } = req.body;
    try {
        // const totalAmount = orderItems.reduce((totalAmountAcc, orderItem) => {
        //   const formattedAmount = Number(orderItem.amount);
        //   const formattedQuantity = Number(orderItem.productQuantity);
        //   const orderItemAmount =
        //     currency(formattedAmount).multiply(formattedQuantity).value;
        //   totalAmountAcc = totalAmountAcc + orderItemAmount;
        //   return totalAmountAcc;
        // }, 0);
        const newOrderItems = yield model_1.OrderDetailsModel.insertMany(orderItems);
        const newOrderItemIds = newOrderItems.map((newOrderItem) => newOrderItem._id);
        console.log(newOrderItemIds);
        const order = yield new model_1.OrderModel({
            userId,
            orderStatus: "Ordered",
            totalAmount: "0",
            description,
            coupon,
            phoneNumber,
            orderItem: newOrderItemIds,
        }).save();
        res
            .status(200)
            .json({ message: "Order successfully created", order: order });
    }
    catch (error) {
        console.log(error);
        res.json({ message: error });
    }
});
exports.createOrder = createOrder;
