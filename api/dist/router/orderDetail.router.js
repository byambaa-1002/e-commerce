"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetailRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateOrderDetail_1 = require("../controller/orderDetail/CreateOrderDetail");
const GetOrderDetail_1 = require("../controller/orderDetail/GetOrderDetail");
exports.orderDetailRouter = express_1.default.Router();
exports.orderDetailRouter.post("/", CreateOrderDetail_1.CreateOrderDetails).get('/', GetOrderDetail_1.getOrderDetail);
