"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./database/index");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 8000;
app.use((0, cors_1.default)());
app.use("/users", router_1.userRouter);
app.use("/products", router_1.productRouter);
app.use("/order", router_1.orderRouter);
app.use("/comment", router_1.commentRouter);
app.use("/review", router_1.reviewRouter);
app.use("/orderDetail", router_1.orderDetailRouter);
app.use("/category", router_1.categoryRouter);
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, index_1.connectDb)();
    app.listen(port, () => {
        console.log(`server running at a http://localhost:${port}/`);
    });
});
server();
