import { createOrder, deleteOrder, fetchOrderById, fetchOrders, updateOrder } from "../repository/index.js";

// Create order related service logic
export const createOrderService = (data) =>{
    const {itemId, supplierDetails, quantity, agreedPrice } = data;
    return createOrder ({itemId, supplierDetails, quantity, agreedPrice});
};

// Fetch orders related service logic
export const fetchOrdersService = () => {
    return fetchOrders();
};

// Fetch order related service logic
export const fetchOrderService = (orderId) => {
    return fetchOrderById();
};

// Update order related service logic
export const udpateOrderService = (orderId, order) => {
    return updateOrder(orderId, order);
};

// Delete order related service Logic
export const deleteOrderService = (orderId) => {
    return deleteOrder(orderId);
};