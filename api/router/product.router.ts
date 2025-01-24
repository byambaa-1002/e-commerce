import express from "express";
import { createProduct } from "../controller/product/CreateProduct";
import { getProducts } from "../controller/product/GetProducts";
import { getProduct } from "../controller/product/GetProduct";
import { deleteProduct } from "../controller/product/DeleteProduct";

export const productRouter = express.Router();

productRouter
  .post("/", createProduct)
  .get("/", getProducts)
  .get("/:productId", getProduct)
  .delete("/:productId", deleteProduct);
