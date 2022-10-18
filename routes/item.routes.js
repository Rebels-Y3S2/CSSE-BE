import express from "express";
import { addItem } from "../services/index.js";

const ItemRouter = express.Router();
ItemRouter.post('/', addItem);

export default ItemRouter;