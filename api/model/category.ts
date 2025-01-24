import mongoose, { Schema } from "mongoose";

interface Category {
  _id: mongoose.Types.ObjectId;
  name: string;
}

const CategorySchema = new Schema<Category>(
  {
    name: { type: String, require: true },
  },
  { timestamps: true }
);

export const CategoryModel = mongoose.model<Category>(
  "Category",
  CategorySchema
);
