import { Item } from "../models/index.js"; 
/**
 * This will handle the database related logic when handling the
 * item related data
 * @param {*} data 
 * @returns 
 */

// Create item repository logic
export const createItem = (data) => 
    Item.create(data);

// Get item repository logic
export const fetchItems = () =>
    Item.find();

//Get item repository logic
export const fetchItemById = (itemId) =>
    Item.findById(itemId);

// Update item repository logic
export const updateItem = (itemId, data) =>
    Item.findByIdAndUpdate(itemId, data, {new : true});

// Remove item repository logic
export const deleteItem = (itemId) =>
    Item.findByIdAndDelete(itemId);
