import { createItemService, fetchItemsService, fetchItemService, updateItemService, deleteItemService } from "../service/index.js";
import { jsonResponse } from "../utils/serviceUtilities.js";

// Handles the service logic sent from createItemService
export const createItem = async(req, res) => {
    try{
        const result = await createItemService(req.body);
        res.json(jsonResponse(true, result));
    }catch(error) {
        res.json(jsonResponse(false, error));
    }
};

// Handles the service logic sent from the getItemService
export const getItems = async(req, res) =>{
    try{
        const items = await fetchItemsService();
        res.json(jsonResponse(true, items));
    }catch(error){
        res.json(jsonResponse(false, error));
    }
};

export const getItem = async(req, res) =>{
    try{
        const item = await fetchItemService(req.params.id);
        res.json(jsonResponse(true, item));
    }catch(error){
        res.json(jsonResponse(false, error));
    }
};

export const updateItem = async(req, res) =>{
    try{
        const item = await updateItemService(req.params.id, req.body);
        res.json(jsonResponse(true, item));
    }catch(error){
        res.json(jsonResponse(false, error));
    }
};

export const deleteItem = async(req, res) =>{
    try{
        const result = await deleteItemService(req.params.id);
        res.json(jsonResponse(true, result));
    }catch(error){
        res.json(jsonResponse(false, error));
    }
};