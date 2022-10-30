// Imports of Item related controller methods from item.controller.js
import { 
    createItem, 
    getItems, 
    getItem, 
    updateItem, 
    deleteItem 
} from "./item.controller.js";

// Imports of Order related controller methods from order.controller.js
import { 
    createOrder, 
    getOrders, 
    getOrder, 
    updateOrder, 
    deleteOrder 
} from "./order.controller.js";

// Imports of User related controller methods from user.controller.js
import { 
    login, 
    register, 
    fetchUser, 
    fetchUsers, 
    updateUser, 
    deleteUser 
} from "./user.controller.js";

export{
    // Exports of Item related controller methods from item.controller.js
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem,

    /// Exports of Order related controller methods from order.controller.js
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,

    // Exports of User related controller methods from user.controller.js
    login,
    register,
    fetchUser,
    fetchUsers,
    updateUser,
    deleteUser
};