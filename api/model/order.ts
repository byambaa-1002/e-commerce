import mongoose, { ObjectId, Schema } from "mongoose";

export interface Order {
  _id: string;
  status: "Ordered" | "PreparingToShip" | "Shipped" | "Delivered";
  userId: ObjectId;
  orderNumber: String;
  phoneNumber?: string;
  deliveryDate: Date;
  totalAmount: string;
  coupon: string;
  description: string;
  orderItem: Schema.Types.ObjectId[];
}

const OrderSchema = new Schema<Order>(
  {
    status: {
      type: String,
      enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
      default: "Ordered",
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    orderNumber: { type: String },
    phoneNumber: { type: String, require: true },
    deliveryDate: { type: Date, require: true },
    totalAmount: { type: String },
    coupon: { type: String },
    description: { type: String },
    orderItem: [{ type: Schema.Types.ObjectId, ref: "OrderDetails" }],
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model<Order>("Order", OrderSchema);
