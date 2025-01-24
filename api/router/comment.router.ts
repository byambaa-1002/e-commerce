import express from "express";
import { createComment } from "../controller/comment/CreateComment";
import { getComment } from "../controller/comment/GetComment";
import { deleteComment } from "../controller/comment/DeleteComment";

export const commentRouter = express.Router();

commentRouter
  .post("/", createComment)
  .get("/:commentId", getComment)
  .delete("/", deleteComment);
