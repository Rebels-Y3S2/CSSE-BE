import { createItem, deleteItem, updateItem } from "../repository/index.js";
import { getItems, getItemsByItemId } from "../services";

// Create item related service logic
export const createItemService = (data) => {
    const { orderItems, totalAmount, referenceNo, description, isAccepted } = data;
    return createItem( { orderItems, totalAmount, referenceNo, description, isAccepted });
};

// Fetch items realted service logic
export const fetchItemsService = () => {
    return getItems();
};

// Fetch items service logic
export const fetchItemService = (itemId) => {
    return getItemsByItemId(itemId);
};

// Update item service logic
export const updateItemService = (itemId, data) => {
    return updateItem(itemId, data);
};

// Delete item service logic
export const deleteItemService = (itemId) => {
    return deleteItem(itemId);
};