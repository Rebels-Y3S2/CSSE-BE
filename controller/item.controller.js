import { 
    createItemService, 
    fetchItemsService, 
    fetchItemService, 
    updateItemService, 
    deleteItemService 
} from "../services/index.js";
import Messages from "../utils/constants/messages.js";
import { jsonResponse } from "../utils/serviceUtilities.js";
import HTTP from "../utils/constants/http.js";
import { logger } from "../utils/logger.js";
import { LoggerConstants } from "../utils/constants/loggerConstants.js";

/**
 * Handles the service logic sent from createItemService() method
 * @param {*} req 
 * @param {*} res 
 */
export const createItem = async(req, res) => {
    try{
        logger.info(LoggerConstants.CREATE_ITEM);
        const result = await createItemService(req.body);
        res.status(HTTP.CREATED).send(jsonResponse(true, Messages.CREATE_SUCCESS, result));
    }catch(error) {
        logger.error(LoggerConstants.ITEM_CREATE_ERROR)
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
        logger.info(LoggerConstants.FETCH_ITEMS)
        const items = await fetchItemsService();
        res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, items));
    }catch(error){
        logger.error(LoggerConstants.FETCH_ITEMS_ERROR)
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
        logger.info(LoggerConstants.FETCH_ITEM_BY_ID)
        const item = await fetchItemService(req.params.id);
        item
        ? res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, item))
        : res.status(HTTP.NO_CONTENT).send(jsonResponse(false, Messages.NO_DETAILS, item))
    }catch(error){
        logger.error(LoggerConstants.FETCH_ITEM_BY_ID_ERROR)
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
        logger.info(LoggerConstants.UPDATE_ITEM)
        const result = await updateItemService(req.params.id, req.body);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.UPDATE_SUCCESS, result));
    }catch(error){
        logger.error(LoggerConstants.UPDATE_ITEM_ERROR)
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
        logger.info(LoggerConstants.DELETE_ITEM)
        const result = await deleteItemService(req.params.id);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.DELETE_SUCCESS, result));
    }catch(error){
        logger.error(LoggerConstants.DELETE_ITEM_ERROR)
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.DELETE_FAILED, error));
    }
};
