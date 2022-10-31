import express from "express";
import { 
    createOrder, 
    deleteOrder, 
    getOrder, 
    getOrders, 
    updateOrder 
} from "../controller/index.js";

// Creating a router instance
const OrderRouter = express.Router();

// Using the created router instance to route the requests through REST API Paths
OrderRouter.post("/", createOrder);
OrderRouter.get("/", getOrders);
OrderRouter.get("/:id", getOrder);
OrderRouter.put("/:id", updateOrder);
OrderRouter.delete("/:id", deleteOrder);

export default OrderRouter;