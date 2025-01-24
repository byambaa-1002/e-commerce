import mongoose from "mongoose";

type Category = {
  _id: mongoose.Types.ObjectId;
  name: string;
};

export type Product = {
  _id: string;
  productName: string;
  categoryId: Category;
  price: string;
  quantity: number;
  thumbnails: string;
  images: string[];
  coupon: string;
  salePercent: string;
  description: string;
  viewCount: number;
};
