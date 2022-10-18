import express from "express";
import ItemRouter from "./item.routes.js";
import UserRouter from "./user.routes.js";

const ApiRouter = express.Router();

ApiRouter.use("/users", UserRouter);
ApiRouter.use("/item", ItemRouter);

export default ApiRouter;