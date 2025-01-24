import { Request, Response } from "express";
import { ProductModel } from "../../model";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const product = await ProductModel.find()
      .sort({ _id: -1 })
      .populate("categoryId");
    res.json({ product: product });
  } catch (error) {
    res.json({ message: error });
  }
};
