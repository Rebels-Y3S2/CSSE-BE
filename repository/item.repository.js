import { Item } from "../models/index.js"; 

/**
 * Handles the repository logic related to creating an item in database
 * @param {*} data 
 * @returns - createdItemObject
 */
export const createItem = (data) => 
    Item.create(data);

/**
 * Handles the repository logic related to retrieving items from the database.
 * @returns - itemId, itemName, stock, unitPrice, ownerId, ownerName, visibility, createdAt
 */
export const fetchItems = () =>
    Item.find()
        .select("_id itemName stock unitPrice owner visibility createdAt")
        .populate("owner",{
            _id:1,
            name:1,
        });

/**
 * Handles the repository logic related to retrieving an item from the database relating to the itemId.
 * @param {*} itemId 
 * @returns - itemId, itemName, stock, unitPrice, ownerId, ownerName, visibility, createdAt
 */
export const fetchItemById = (itemId) =>
    Item.findById(itemId)
    .select("_id itemName stock unitPrice status visibility createdAt")
    .populate("owner",{
        _id:1,
        name:1,
    });

/**
 * Handles the repository logic related to updating an item in the database relating to the itemId
 * @param {*} itemId 
 * @param {*} data 
 * @returns - updatedItemObject
 */
export const updateItem = (itemId, data) =>
    Item.findByIdAndUpdate(itemId, data, {new : true});

/**
 * Handles the repository logic related to deleting an item from the database relating to the itemId
 * @param {*} itemId 
 * @returns 
 */
export const deleteItem = (itemId) =>
    Item.findByIdAndDelete(itemId);
