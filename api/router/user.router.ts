import express from "express";
import { register } from "../controller/user/SignUp";
import { getUsers } from "../controller/user/GetUsers";
import { login } from "../controller/user/SignIn";
import { updateUser } from "../controller/user/UpdateUser";
import { deleteUser } from "../controller/user/DeleteUser";
import { body } from "express-validator";
import { authenticateToken } from "../middleware";
import { me } from "../controller/user/me";

export const userRouter = express.Router();

const addUserValidation = [
  body("firstN", "Invalid does not Empty").notEmpty(),
  body("email").isEmail(),
];

userRouter
  .post("/", addUserValidation, register)
  .delete("/:userId", deleteUser)
  // .get("/", getUsers)
  .post("/login", login)
  .put("/", updateUser)
  .post("/me", authenticateToken, me);
