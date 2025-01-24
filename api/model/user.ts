import mongoose, { Schema } from "mongoose";
type User = {
  _id: string;
  userName: String;
  email: String;
  phoneNumber: Number;
  password: String;
  address: String;
  zipCode: Number;
  role: "ADMIN" | "USER";
};

const UserSchema = new Schema<User>(
  {
    userName: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: Number },
    password: { type: String, require: true },
    address: { type: String },
    zipCode: { type: Number },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<User>("User", UserSchema);
