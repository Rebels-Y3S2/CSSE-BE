import { 
    createItem, 
    deleteItem, 
    fetchItemById, 
    fetchItems, 
    updateItem 
} from "../repository/index.js";

/**
 * Handles the repository logic sent from the createItem() method 
 * @param {*} data 
 * @returns - itemObject
 */
export const createItemService = (data) => {
    const { itemName, stock, unitPrice, owner, visibility } = data;
    return createItem({ itemName, stock, unitPrice, owner, visibility });
};

/**
 * Handles the repository logic sent from fetchItems() method
 * @returns - itemsArray
 */
export const fetchItemsService = () => {
    return fetchItems();
};

/**
 * Handles the repository logic sent from the fetchItemById() method
 * @param {*} itemId 
 * @returns - itemObject
 */
export const fetchItemService = (itemId) => {
    return fetchItemById(itemId);
};

/**
 * Handles the repository logic sent from the updateItem() method
 * @param {*} itemId 
 * @param {*} data 
 * @returns - updatedItemObject
 */
export const updateItemService = (itemId, data) => {
    return updateItem(itemId, data);
};

/**
 * Handles the repository logic set from the deleteItem() method
 * @param {*} itemId 
 * @returns 
 */
export const deleteItemService = (itemId) => {
    return deleteItem(itemId);
};