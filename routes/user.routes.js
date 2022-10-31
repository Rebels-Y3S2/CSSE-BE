import express from "express";
import { 
    deleteUser, 
    fetchUser, 
    fetchUsers, 
    login, 
    register, 
    updateUser 
} from "../controller/index.js";

// Createing a router instance
const UserRouter = express.Router();

// Using the created router instance to route the requests through REST API Paths
UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.get("/:id", fetchUser);
UserRouter.get("/", fetchUsers);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

export default UserRouter;