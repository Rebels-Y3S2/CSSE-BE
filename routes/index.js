import express from "express";
import UserRouter from "./user.routes.js";

const ApiRouter = express.Router();

ApiRouter.use("/users", UserRouter);

export default ApiRouter;