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
    Item.find()
        .select("_id itemName stock unitPrice status createdAt")
        .populate("owner",{
            _id:1,
            owner:1,
            name:1,
            itemName:1,
            stock:1,
            unitPrice:1,
            status:1,
            createdAt:1
        });


//Get item repository logic
export const fetchItemById = (itemId) =>
    Item.findById(itemId)
    .select("_id itemName stock unitPrice status createdAt")
    .populate("owner",{
        _id:1,
        owner:1,
        name:1,
        itemName:1,
        stock:1,
        unitPrice:1,
        status:1,
        createdAt:1
    });

// Update item repository logic
export const updateItem = (itemId, data) =>
    Item.findByIdAndUpdate(itemId, data, {new : true});

// Remove item repository logic
export const deleteItem = (itemId) =>
    Item.findByIdAndDelete(itemId);
