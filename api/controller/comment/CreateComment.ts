import { Request, Response } from "express";
import { CommentModel } from "../../model";

export const createComment = async (req: Request, res: Response) => {
  const { reviewId, userId } = req.body;
  try {
    if (!reviewId) {
      res.status(400).json({ message: "reviewId not found" });
    }
    if (!userId) {
      res.status(400).json({ message: "need to Sign In" });
    }

    await new CommentModel({
      message: "succesfully comment created",
      reviewId: reviewId,
      userId: userId,
    }).save();
    res.json({ reviewId, userId });
  } catch (error) {
    res.json({ error });
  }
};
