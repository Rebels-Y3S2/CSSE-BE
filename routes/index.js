import express from "express";
import ItemRouter from "./item.routes.js";
import OrderRouter from "./order.routes.js";
import UserRouter from "./user.routes.js";

const ApiRouter = express.Router();

ApiRouter.use("/users", UserRouter);
ApiRouter.use("/item", ItemRouter);
ApiRouter.use("/order", OrderRouter);

export default ApiRouter;