import express from "express";
import { addItem, getItems, updateItem, deleteItem, getItemsByItemId, updateItemStatus, updateItemAcceptance } from "../services/index.js";

const ItemRouter = express.Router();
ItemRouter.post('/', addItem);
ItemRouter.get('/', getItems);
ItemRouter.get('/:id', getItemsByItemId);
ItemRouter.put('/:id', updateItem);
ItemRouter.delete('/:id', deleteItem);
ItemRouter.put('/status/:id', updateItemStatus);
ItemRouter.put('/acceptance/:id', updateItemAcceptance);

export default ItemRouter;
