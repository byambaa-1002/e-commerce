import { Request, Response } from "express";
import brcypt from "bcrypt";
import { UserModel } from "../../model";

export const register = async (req: Request, res: Response) => {
  const {
    email,
    userName,
    phoneNumber,
    password,
    address,
    cartId,
    zipCode,
    role,
  } = req.body;
  const saltRounds = 10;

  try {
    const hashedPassword = await brcypt.hash(password, saltRounds);

    await new UserModel({
      email: email,
      userName: userName,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      address: address,
      cartId: cartId,
      zipCode: zipCode,
      role: role,
    }).save();

    res.json({ email, userName, phoneNumber });
  } catch (error) {
    res.json({ message: error });
  }
};
