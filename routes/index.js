import express from "express";

// Imports relating to routes
import ItemRouter from "./item.routes.js";
import OrderRouter from "./order.routes.js";
import UserRouter from "./user.routes.js";

// Createing a router instance
const ApiRouter = express.Router();

// Using the created router instance to route the requests.
ApiRouter.use("/users", UserRouter);
ApiRouter.use("/items", ItemRouter);
ApiRouter.use("/orders", OrderRouter);

export default ApiRouter;