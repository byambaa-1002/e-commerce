import { Request, Response } from "express";
import { OrderDetailsModel } from "../../model";

export const getOrderDetail = async (_req: Request, res: Response) => {
  const { orderDetailId } = _req.body;
  try {
    const orderDetail = await OrderDetailsModel.findOne({ _id: orderDetailId })
    res.json({ orderDetail: orderDetail });
  } catch (error) {
    res.json({ message: error });
  }
};
