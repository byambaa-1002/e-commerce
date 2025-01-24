import { ProductModel } from "../../model";
import { Request, Response } from "express";

export const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    await ProductModel.deleteOne({ _id: productId });

    res.json({ message: `succesfully deleted${productId}` });
  } catch (error) {
    res.json({ message: error });
  }
};
