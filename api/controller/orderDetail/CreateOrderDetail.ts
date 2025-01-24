import { OrderDetailsModel, OrderModel } from "../../model";
import { Request, Response } from "express";

export const CreateOrderDetails = async (req: Request, res: Response) => {
  const { productId, productQuantity, amount, orderId } = req.body;
  try {
    // const OrderDetailExist = await OrderDetailsModel.findOne({ productId });

    // if (OrderDetailExist) {
    //   res.status(404).json({ message: "OrderDetails already exist" });
    // }

    const orderDetails = await new OrderDetailsModel({
      productId: productId,
      productQuantity: productQuantity,
      amount: amount,
      orderId: orderId,
    }).save();
    const { _id } = orderDetails;
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      {
        _id: orderId,
      },
      { $push: { orderItem: _id } },
      { new: true }
    );

    res.json({ orderDetails: orderDetails, updatedOrder: updatedOrder });
  } catch (error) {
    res.json({ message: error });
  }
};
