import { Order } from "../models/index.js";

/**
 * This will handle the database related logic when handling the
 * order related data
 * @param {*} data 
 * @returns 
 */

// Create order repository logic
export const createOrder = (data) =>
    Order.create(data);

// Get orders repository logic
export const fetchOrders = () =>
    Order.find();

// Get order repository logic
export const fetchOrderById = (orderId) =>
    Order.findById(orderId);

// Update order repository logic
export const updateOrder = (orderId, data) =>
    Order.findByIdAndUpdate(orderId, data, {new : true});

// Delete order repository logic
export const deleteOrder = (orderId) =>
    Order.findByIdAndDelete(orderId);
