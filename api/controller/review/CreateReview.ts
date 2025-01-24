import { Request, Response } from "express";
import { Review, ReviewModel, Comment, CommentModel } from "../../model";
import mongoose from "mongoose";

type CreateReviewBody = Review & { comments: Comment[] };

export const createReview = async (req: Request, res: Response) => {
  const { productId, stars, comments } = req.body as CreateReviewBody;
  try {
    // const productObjectId =
    //   mongoose.Types.ObjectId.createFromHexString(productId);
    const review = await new ReviewModel({ productId, stars, comments }).save();

    const formatComments = comments.map((comment) => ({
      ...comment,
      commentId: comment._id,
    }));

    await CommentModel.insertMany(formatComments);

    res.json({ message: "succesfully review created", review });
  } catch (error) {
    res.json({ error: error });
  }
};
