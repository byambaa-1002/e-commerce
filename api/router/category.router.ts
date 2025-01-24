import express from "express";

import { createCategory } from "../controller/category/createCategory";
import { getCategory } from "../controller/category/getCategory";
import { getCategories } from "../controller/category/getCategories";

export const categoryRouter = express.Router();

categoryRouter
  .post("/", createCategory)
  .get("/:id", getCategory)
  .get("/", getCategories);
