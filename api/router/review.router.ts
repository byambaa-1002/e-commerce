import { Router } from "express";
import { createReview } from "../controller/review/CreateReview";

export const reviewRouter = Router();

reviewRouter.post("/", createReview);
