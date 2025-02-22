"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateOrder_1 = require("../controller/order/CreateOrder");
const GetOrder_1 = require("../controller/order/GetOrder");
exports.orderRouter = express_1.default.Router();
exports.orderRouter.post("/", CreateOrder_1.createOrder).get("/", GetOrder_1.getOrder);
