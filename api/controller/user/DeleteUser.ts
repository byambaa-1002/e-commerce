import { UserModel } from "../../model";
import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await UserModel.deleteOne({ _id: userId });

    res.json({ message: `succesfully deleted user${userId}`, user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
