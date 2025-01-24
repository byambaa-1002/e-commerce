import { Request, Response } from "express";
import {
  Order,
  OrderDetails,
  OrderDetailsModel,
  OrderModel,
} from "../../model";

import currency = require("currency.js");

type CreateOrderRequsetBody = Order & { orderItems: OrderDetails[] };

export const createOrder = async (req: Request, res: Response) => {
  const { userId, phoneNumber, coupon, description, orderItems } =
    req.body as CreateOrderRequsetBody;

  try {
    // const totalAmount = orderItems.reduce((totalAmountAcc, orderItem) => {
    //   const formattedAmount = Number(orderItem.amount);
    //   const formattedQuantity = Number(orderItem.productQuantity);

    //   const orderItemAmount =
    //     currency(formattedAmount).multiply(formattedQuantity).value;
    //   totalAmountAcc = totalAmountAcc + orderItemAmount;

    //   return totalAmountAcc;
    // }, 0);
    const newOrderItems = await OrderDetailsModel.insertMany<OrderDetails>(
      orderItems
    );

    const newOrderItemIds = newOrderItems.map(
      (newOrderItem) => newOrderItem._id
    );
    console.log(newOrderItemIds);

    const order = await new OrderModel({
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
  } catch (error) {
    console.log(error);

    res.json({ message: error });
  }
};
