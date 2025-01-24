import { connectDb } from "./database/index";
import express from "express";
import cors from "cors";
import {
  commentRouter,
  orderDetailRouter,
  orderRouter,
  productRouter,
  reviewRouter,
  userRouter,
  categoryRouter,
} from "./router";

const app = express();

app.use(express.json());

const port = 8000;

app.use(cors());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/order", orderRouter);
app.use("/comment", commentRouter);
app.use("/review", reviewRouter);
app.use("/orderDetail", orderDetailRouter);
app.use("/category", categoryRouter);

const server = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server running at a http://localhost:${port}/`);
  });
};

server();
