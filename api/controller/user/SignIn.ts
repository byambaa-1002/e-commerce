import { UserModel } from "../../model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email }).exec();

    if (!user) {
      res.status(400).json({ message: "user not found" });
      return;
    }

    const isMachedPassword = await bcrypt.compare(
      password,
      user.password as string
    );

    if (!isMachedPassword) {
      res.status(400).json({ message: "password is incorrect" });
      return;
    }
    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
      "secret",
      { expiresIn: "10h" }
    );

    res.json({
      user: {
        email: user.email,
        userName: user.userName,
        id: user._id,
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
