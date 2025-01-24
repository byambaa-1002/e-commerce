import { Request, Response } from "express";
import { CategoryModel } from "../../model";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const category = await CategoryModel.find();
    res.json({ category: category });
  } catch (error) {
    res.json({ message: error });
  }
};
