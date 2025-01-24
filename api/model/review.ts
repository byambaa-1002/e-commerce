import mongoose, { Schema } from "mongoose";

export interface Review {
  _id: string;
  productId: String;
  stars: {
    star1: number;
    star2: number;
    star3: number;
    star4: number;
    star5: number;
  };
}

const ReviewSchema = new Schema<Review>(
  {
    _id: { type: String },
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
    stars: {
      star1: { type: Number },
      star2: { type: Number },
      star3: { type: Number },
      star4: { type: Number },
      star5: { type: Number },
    },
  },
  { timestamps: true }
);
export const ReviewModel = mongoose.model<Review>("Review", ReviewSchema);
