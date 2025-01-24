import { Request, Response } from "express";
import { CategoryModel } from "../../model";

export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById({ _id: id });
    res.json({ category: category });
  } catch (error) {
    res.json({ error: error });
  }
};
