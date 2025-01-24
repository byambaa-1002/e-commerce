import { Request, Response } from "express";
import { CategoryModel } from "../../model/category";

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  console.log(req.body);

  try {
    const Category = await new CategoryModel({
      name,
    }).save();

    res
      .status(200)
      .json({ message: "Created new Category", Category: Category });
  } catch (error) {
    res.json({ message: error });
  }
};
