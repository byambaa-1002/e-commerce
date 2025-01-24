import { Request, Response } from "express";
import { CommentModel } from "../../model/comment";

export const getComment = async (_req: Request, res: Response) => {
  const { commentId } = _req.params;
  try {
    const comment = await CommentModel.findOne({ _id: commentId });
    res.json({ comment: comment });
  } catch (error) {
    res.json({ message: error });
  }
};
