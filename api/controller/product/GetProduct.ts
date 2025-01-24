import { Request, Response } from "express";
import { ProductModel } from "../../model";

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await ProductModel.findById(productId).populate(
      "categoryId"
    );
    res.json({ product: product });
  } catch (error) {
    res.json({ message: error });
  }
};
