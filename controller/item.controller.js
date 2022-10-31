import { 
    createItemService, 
    fetchItemsService, 
    fetchItemService, 
    updateItemService, 
    deleteItemService 
} from "../services/index.js";
import Messages from "../utils/messages.js";
import { jsonResponse } from "../utils/serviceUtilities.js";
import HTTP from "../utils/http.js";

/**
 * Handles the service logic sent from createItemService() method
 * @param {*} req 
 * @param {*} res 
 */
export const createItem = async(req, res) => {
    try{
        const result = await createItemService(req.body);
        res.status(HTTP.CREATED).send(jsonResponse(true, Messages.CREATE_SUCCESS, result));
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.CREATE_FAILED, error));
    }
};

/**
 *  Handles the service logic sent from the getItemsService() method
 * @param {*} req 
 * @param {*} res 
 */
export const getItems = async(req, res) =>{
    try{
        const items = await fetchItemsService();
        res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, items));
    }catch(error){
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false,Messages.FETCH_FAILED, error));
    }
};

/**
 * Handles the service logic sent from the getItemService() method
 * @param {*} req 
 * @param {*} res 
 */
export const getItem = async(req, res) =>{
    try{
        const item = await fetchItemService(req.params.id);
        item
        ? res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, item))
        : res.status(HTTP.NO_CONTENT).send(jsonResponse(false, Messages.NO_DETAILS, item))
    }catch(error){
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.FETCH_FAILED, error));
    }
};

/**
 * Handles the service logic sent from the updateItemService() method
 * @param {*} req 
 * @param {*} res 
 */
export const updateItem = async(req, res) =>{
    try{
        const result = await updateItemService(req.params.id, req.body);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.UPDATE_SUCCESS, result));
    }catch(error){
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.UPDATE_FAILED, error));
    }
};

/**
 * Handles the service logic sent from the deleteItemService() method
 * @param {*} req 
 * @param {*} res 
 */
export const deleteItem = async(req, res) =>{
    try{
        const result = await deleteItemService(req.params.id);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.DELETE_SUCCESS, result));
    }catch(error){
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.DELETE_FAILED, error));
    }
};
