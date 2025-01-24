import express from "express";
import { createOrder } from "../controller/order/CreateOrder";
import { getOrder } from "../controller/order/GetOrder";

export const orderRouter = express.Router();

orderRouter.post("/", createOrder).get("/", getOrder);
