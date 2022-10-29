/**
 * This will manage all the imports and exports related to the repository classes
 */

// Imports related to item.repository.js
import { 
    createItem,
    fetchItems,
    fetchItemById,
    updateItem,
    deleteItem
} from "./item.repository.js";

// Imports related to order.repository.js
import {
    createOrder,
    fetchOrders,
    fetchOrderById,
    updateOrder,
    deleteOrder
} from "./order.repository.js";

//Exports

export {
//  Exports related to item.repository.js
    createItem,
    fetchItems,
    fetchItemById,
    updateItem,
    deleteItem,

// Exports related to order.repository.js
    createOrder,
    fetchOrders,
    fetchOrderById,
    updateOrder,
    deleteOrder
};