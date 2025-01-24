import { Request, Response } from "express";
import { UserModel } from "../../model";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const user = await UserModel.find();
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
