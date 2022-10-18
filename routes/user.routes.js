import express from "express";
import { register, login, findUser, updateUser, deleteUser, findUsers } from "../services/index.js";

const UserRouter = express.Router();
UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.get("/:id", findUser);
UserRouter.get("/", findUsers);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

export default UserRouter;