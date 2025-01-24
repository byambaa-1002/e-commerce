import express from "express";
import { CreateOrderDetails } from "../controller/orderDetail/CreateOrderDetail";
import { getOrderDetail } from "../controller/orderDetail/GetOrderDetail";

export const orderDetailRouter = express.Router();

orderDetailRouter.post("/", CreateOrderDetails).get('/',getOrderDetail);
