import express from "express";
import { addItem, getItems, updateItem, deleteItem, getItemsByItemId } from "../services/index.js";

const ItemRouter = express.Router();
ItemRouter.post('/', addItem);
ItemRouter.get('/', getItems);
ItemRouter.get('/:id', getItemsByItemId);
ItemRouter.put('/:id', updateItem);
ItemRouter.delete('/:id', deleteItem);

export default ItemRouter;