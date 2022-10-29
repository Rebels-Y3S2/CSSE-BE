/**
 *  This will handle all the imports and exports related to the service classes.
 */

// Imports related to the user.service.js
import {
    register, 
    login, 
    updateUser, 
    deleteUser, 
    findUser, 
    findUsers
} from "./user.service.js";

// Imports related to the item.service.js
import {
    addItem, 
    getItems, 
    updateItem, 
    deleteItem, 
    getItemsByItemId,
    updateItemStatus, 
    updateItemAcceptance
} from "./item.service.js";

//Imports related to the order.service.js
import {
    addOrdertoCart, 
    addOrder, 
    getOrders, 
    getOrdersByOrderId,
    updateOrder, 
    deleteOrder, 
    updateStatus, 
    updateAcceptance
} from "./order.service.js";

export {
    // Exports related to the user.service.js
    login,
    register,
    updateUser,
    deleteUser,
    findUser,
    findUsers,

    // Exports related to the item.service.js
    addItem,
    getItems,
    updateItem,
    deleteItem,
    getItemsByItemId,
    updateItemStatus,
    updateItemAcceptance,

    // Exports related to the order.service.js
    addOrdertoCart,
    getOrders,
    addOrder,
    getOrdersByOrderId,
    updateOrder,
    deleteOrder,
    updateStatus,
    updateAcceptance
};