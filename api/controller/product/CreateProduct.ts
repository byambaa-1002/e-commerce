import { Request, Response } from "express";
import { ProductModel } from "../../model";

export const createProduct = async (req: Request, res: Response) => {
  const {
    productName,
    categoryId,
    price,
    quantity,
    thumbnails,
    images,
    coupon,
    salePercent,
    description,
  } = req.body;

  console.log(req.body);

  try {
    const product = await new ProductModel({
      productName,
      categoryId,
      price,
      quantity,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
      viewsCount: 0,
    }).save();

    res.status(200).json({ message: "Created new product", product: product });
  } catch (error) {
    res.json({ message: error });
  }
};
