import { Request, Response } from "express";
import { OrderModel } from "../../model";

export const getOrder = async (_req: Request, res: Response) => {
  const { orderId } = _req.body;
  try {
    const order = await OrderModel.findOne({ _id: orderId })
      .populate("userId")
      .populate({
        path: "orderItem",
        populate: { path: "productId" },
      });
    res.json({ order: order });
  } catch (error) {
    res.json({ message: error });
  }
};
