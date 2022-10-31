import express from "express";
import { 
    getItems, 
    getItem, 
    updateItem, 
    createItem, 
    deleteItem,  
} from "../controller/index.js";

// Creates a router instance
const ItemRouter = express.Router();

// Using the created router instance to route the requests through REST API Paths
ItemRouter.post("/", createItem);
ItemRouter.get("/", getItems);
ItemRouter.get("/:id", getItem);
ItemRouter.put("/:id", updateItem);
ItemRouter.delete("/:id", deleteItem);

export default ItemRouter;
