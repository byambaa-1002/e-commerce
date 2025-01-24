import mongoose from "mongoose";
import { UserModel } from "../../model";
import { Request, Response } from "express";

export const updateUser = async (req: Request, res: Response) => {
  const { email, id } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const user = await UserModel.findOneAndUpdate(
      { id: objectId }, //condition
      { email: email }, //update hiih data
      { new: true } //update hiisnii daraah utga harah
    );
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
