import { Request, Response } from "express";
import "dotenv";
import { UserModel } from "../../model";

interface CustomRequets extends Request {
  user?: {
    email: string;
  };
}

export const me = async (
  req: CustomRequets,
  res: Response
): Promise<void | any> => {
  const { email }: any = req.user;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "user not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
