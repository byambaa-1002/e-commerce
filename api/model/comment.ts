import mongoose, { Schema } from "mongoose";

export type Comment = {
  _id: String;
  reviewId: String;
  userId: String;
};
const CommentSchema = new Schema<Comment>(
  {
    reviewId: { type: Schema.Types.ObjectId, ref: "Review" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const CommentModel = mongoose.model<Comment>("Comment", CommentSchema);
