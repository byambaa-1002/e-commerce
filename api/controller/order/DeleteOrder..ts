import { Request, Response } from "express";
import { OrderModel } from "../../model";


export const deleteOrder = async (_req: Request, res: Response) => {
    try {
      const order = await OrderModel.findByIdAndDelete();
      res.json({ Orders: order });
    } catch (error) {
      res.json({ message: error });
    }
  };
