import { 
    createOrderService, 
    deleteOrderService, 
    fetchOrderService, 
    fetchOrdersService, 
    udpateOrderService 
} from "../services/index.js";
import HTTP from "../utils/http.js";
import Messages from "../utils/messages.js";
import { jsonResponse } from "../utils/serviceUtilities.js";

/**
 * Handles the service logic sent from createOrderService() method
 * @param {*} req 
 * @param {*} res 
 */
export const createOrder = async(req, res) =>{
    try{
        const result = await createOrderService(req.body);
        res.status(HTTP.CREATED).send(jsonResponse(true, Messages.CREATE_SUCCESS, result));
    }catch(error) {
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
        const orders = await fetchOrdersService();
        res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, orders));
    }catch(error) {
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
        const order = await fetchOrderService(req.params.id);
        order
        ? res.status(HTTP.OK).send(jsonResponse(true, order))
        : res.status(HTTP.NO_CONTENT).send(jsonResponse(false, Messages.NO_DETAILS, order))
    }catch(error) {
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
        const result = await udpateOrderService(req.params.id, req.body);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.UPDATE_SUCCESS, result));
    }catch(error) {
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
        const result = await deleteOrderService(req.params.id);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.DELETE_SUCCESS, result));
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.DELETE_FAILED, error));
    }
}