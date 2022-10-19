import express from "express";
import { addOrdertoCart, addOrder, getOrders, getOrdersByOrderId, updateOrder, deleteOrder, updateStatus, updateAcceptance } from "../services/index.js";

const OrderRouter = express.Router();
OrderRouter.post("/addToCart", addOrdertoCart);
OrderRouter.post("/add", addOrder);
OrderRouter.get("/", getOrders);
OrderRouter.get("/:id", getOrdersByOrderId);
OrderRouter.put("/:id", updateOrder);
OrderRouter.delete("/:id", deleteOrder);
OrderRouter.put("/status/:id", updateStatus);
OrderRouter.put("/acceptance/:id", updateAcceptance);

export default OrderRouter;