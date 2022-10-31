import { 
    createOrder, 
    deleteOrder, 
    fetchOrderById, 
    fetchOrders, 
    updateOrder 
} from "../repository/index.js";

/**
 * Handles the repository logic sent from the createOrder() method 
 * @param {*} data 
 * @returns - orderObject
 */
export const createOrderService = (data) =>{
    const {orderItems, totalAmount, referenceNo, description, orderStatus, paymentStatus, comment} = data;
    return createOrder({orderItems, totalAmount, referenceNo, description, orderStatus, paymentStatus, comment})
};

/**
 * Handles the repository logic sent from fetchOrders() method
 * @returns - ordersArray
 */
export const fetchOrdersService = () => {
    return fetchOrders();
};

/**
 * Handles the repository logic sent from the fetchOrderById() method
 * @param {*} orderId 
 * @returns - orderObject
 */
export const fetchOrderService = (orderId) => {
    return fetchOrderById(orderId);
};

/**
 * Handles the repository logic sent from the updateOrder() method
 * @param {*} orderId 
 * @param {*} data 
 * @returns - updatedOrderObject
 */
export const udpateOrderService = (orderId, data) => {
    return updateOrder(orderId, data);
};

/**
 * Handles the repository logic set from the deleteOrder() method
 * @param {*} orderId 
 * @returns 
 */
export const deleteOrderService = (orderId) => {
    return deleteOrder(orderId);
};