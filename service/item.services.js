import { createItem, deleteItem, fetchItemById, fetchItems, updateItem } from "../repository/index.js";

// Create item related service logic
export const createItemService = (data) => {
    const { itemName, stock, unitPrice, owner, status, isAccepted } = data;
    return createItem({ itemName, stock, unitPrice, owner, status, isAccepted });
};

// Fetch items realted service logic
export const fetchItemsService = () => {
    return fetchItems();
};

// Fetch items service logic
export const fetchItemService = (itemId) => {
    return fetchItemById(itemId);
};

// Update item service logic
export const updateItemService = (itemId, data) => {
    return updateItem(itemId, data);
};

// Delete item service logic
export const deleteItemService = (itemId) => {
    return deleteItem(itemId);
};