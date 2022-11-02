import { 
    createOrderService, 
    deleteOrderService, 
    fetchOrderService, 
    fetchOrdersService, 
    udpateOrderService 
} from "../services/index.js";
import HTTP from "../utils/constants/http.js";
import { logger } from "../utils/logger.js";
import { LoggerConstants } from "../utils/constants/loggerConstants.js";
import Messages from "../utils/constants/messages.js";
import { jsonResponse } from "../utils/serviceUtilities.js";

/**
 * Handles the service logic sent from createOrderService() method
 * @param {*} req 
 * @param {*} res 
 */
export const createOrder = async(req, res) =>{
    try{
        logger.info(LoggerConstants.CREATE_ORDER)
        const result = await createOrderService(req.body);
        res.status(HTTP.CREATED).send(jsonResponse(true, Messages.CREATE_SUCCESS, result));
    }catch(error) {
        logger.error(LoggerConstants.ORDER_CREATE_ERROR)
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.CREATE_FAILED, error));
    }
}

/**
 *  Handles the service logic sent from the getOrdersService() method
 * @param {*} req 
 * @param {*} res 
 */
export const getOrders = async(req, res) =>{
    try{
        logger.info(LoggerConstants.FETCH_ORDERS)
        const orders = await fetchOrdersService();
        res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, orders));
    }catch(error) {
        logger.error(LoggerConstants.FETCH_ORDERS_ERROR)
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false,Messages.FETCH_FAILED, error));
    }
}

/**
 *  Handles the service logic sent from the getOrderService() method
 * @param {*} req 
 * @param {*} res 
 */
export const getOrder = async(req, res) =>{
    try{
        logger.info(LoggerConstants.FETCH_ORDER_BY_ID)
        const order = await fetchOrderService(req.params.id);
        order
        ? res.status(HTTP.OK).send(jsonResponse(true, order))
        : res.status(HTTP.NO_CONTENT).send(jsonResponse(false, Messages.NO_DETAILS, order))
    }catch(error) {
        logger.error(LoggerConstants.FETCH_ORDER_BY_ID_ERROR)
        res.json(jsonResponse(false, error))
    }
}

/**
 *  Handles the service logic sent from the updateOrderService() method
 * @param {*} req 
 * @param {*} res 
 */
export const updateOrder = async(req, res) =>{
    try{
        logger.info(LoggerConstants.UPDATE_ORDER)
        const result = await udpateOrderService(req.params.id, req.body);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.UPDATE_SUCCESS, result));
    }catch(error) {
        logger.info(LoggerConstants.UPDATE_ORDER_ERROR)
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.UPDATE_FAILED, error));
    }
}

/**
 *  Handles the service logic sent from the deleteOrderService() method
 * @param {*} req 
 * @param {*} res 
 */
export const deleteOrder = async(req, res) =>{
    try{
        logger.info(LoggerConstants.DELETE_ORDER)
        const result = await deleteOrderService(req.params.id);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.DELETE_SUCCESS, result));
    }catch(error) {
        logger.info(LoggerConstants.DELETE_ORDER_ERROR)
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.DELETE_FAILED, error));
    }
}