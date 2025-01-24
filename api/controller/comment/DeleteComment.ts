import { CommentModel } from "../../model/comment";
import { Request, Response } from "express";
export const deleteComment = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  try {
    await CommentModel.deleteOne({ _id: commentId });
    res.json({
      message: `succesfully deleted Comment`,
    });
  } catch (error) {
    res.json({ message: error });
  }
};
