import mongoose, { Schema } from "mongoose";

interface Product {
  _id: string;
  productName: string;
  categoryId: Schema.Types.ObjectId;
  price: string;
  quantity: number;
  thumbnails: string;
  images: string[];
  coupon: string;
  salePercent: string;
  description: string;
  viewCount: number;
}

const ProductSchema = new Schema<Product>(
  {
    productName: { type: String, require: true },
    categoryId: { type: Schema.Types.ObjectId, require: true, ref: "Category" },
    price: { type: String, require: true },
    quantity: { type: Number, require: true },
    thumbnails: { type: String },
    images: { type: [String] },
    coupon: { type: String },
    salePercent: { type: String },
    description: { type: String },
    viewCount: { type: Number },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model<Product>("Product", ProductSchema);
