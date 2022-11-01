import { Order } from "../models/index.js";

/**
 * Handles the repository logic related to creating an order in database
 * @param {*} data 
 * @returns - createdOrderObject
 */
export const createOrder = (data) =>
    Order.create(data);

/**
 * Handles the repository logic related to retrieving orders from the database.
 * @returns - _id, orderItems[{itemId, itemName}], referenceNo, totalAmount, description, orderStatus, paymentStatus, createdAt
 */
export const fetchOrders = () =>
    Order.find()
        .select("_id orderItems referenceNo totalAmount description orderStatus paymentStatus createdAt")
        .populate("orderItems.item", {
            _id: 1,
            itemName: 1
        })

/**
 * Handles the repository logic related to retrieving an order from the database relating to the orderId.
 * @param {*} orderId 
 * @returns - _id, orderItems[{itemId, itemName}], referenceNo, totalAmount, description, orderStatus, paymentStatus, createdAt
 */
export const fetchOrderById = (orderId) =>
    Order.findById(orderId)
        .select("_id orderItems referenceNo totalAmount description orderStatus paymentStatus createdAt comment")
        .populate("orderItems.item", {
            _id: 1,
            itemName: 1
        })

/**
 * Handles the repository logic related to updating an order in the database relating to the orderId
 * @param {*} orderId 
 * @param {*} data 
 * @returns - updatedOrderObject
 */
export const updateOrder = (orderId, data) =>
    Order.findByIdAndUpdate(orderId, data, {new : true});

/**
 * Handles the repository logic related to deleting an order from the database relating to the orderId
 * @param {*} orderId 
 * @returns 
 */
export const deleteOrder = (orderId) =>
    Order.findByIdAndDelete(orderId);
