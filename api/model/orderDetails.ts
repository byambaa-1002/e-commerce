import mongoose, { ObjectId, Schema } from "mongoose";

export interface OrderDetails {
  _id: string;
  productId: ObjectId;
  productQuantity: string;
  amount: string;
  orderId?: ObjectId;
}

const OrderDetailsSchema = new Schema<OrderDetails>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
    productQuantity: { type: String, require: true },
    amount: { type: String, require: true },
    orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  },
  { timestamps: true }
);

export const OrderDetailsModel = mongoose.model<OrderDetails>(
  "OrderDetails",
  OrderDetailsSchema
);
