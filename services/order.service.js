import {Order} from "../models/index.js";
import Messages from "../utils/messages.js";
import HTTP from "../utils/http.js";

export const addOrdertoCart = (req, res) => {
    const order = new Order(req.body);
    // eslint-disable-next-line no-unused-vars
    order.save((err, document) => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_ADD_ITEM,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true, order});
    });
};

export const addOrder = (req, res) =>{
    const order = {id: req.params.id};
    const oStatus = {
        orderStatus: req.body.orderStatus
    };
    Order.findOneAndUpdate(order, oStatus, { runValidators: true }, (err, response) => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_UPDATE_ORDER_STATUS,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , response});
    });
};

export const getOrders = (req, res) => {
    Order.find()
        .select("_id  referenceNo description status isAccepted createdAt orderStatus")
        .populate("orderItems.itemId orderItems.supplierDetails orderItems.quantity orderItems.agreedPrice")
        .exec()
        .then(formattedReq => {
            res.status(200).json({
                isSuccess: true,
                count: formattedReq.length,
                Order_Items: formattedReq.map(d => {
                    return {
                        _id: d._id,
                        order: d.orderItems.map(order => {
                            return {
                                orderId: order._id,
                                item: {
                                    itemId: order.itemId._id,
                                    itemName: order.itemId.itemName,
                                    stock : order.itemId.stock,
                                    unitPrice: order.itemId.unitPrice,
                                },
                                supplierDetails: {
                                    name: order.supplierDetails.name || "",
                                    email: order.supplierDetails.email || "",
                                    contactNo: order.supplierDetails.contactNo || "",
                                    address: order.supplierDetails.address || "",
                                    shopName: order.supplierDetails.shopName || "",
                                    description: order.supplierDetails.description || "",
                                },
                                quantity: order.quantity,
                                agreedPrice: order.agreedPrice
                            };

                        }),
                        referenceNo: d.referenceNo,
                        status: d.status,
                        isAccepted: d.isAccepted,
                        orderStatus: d.orderStatus,
                        createdAt: d.createdAt
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
            console.log(err);
        });
};

export const getOrdersByOrderId = (req, res) => {
    const order = req.params.id;
    Order.find({_id: order})
    .select("_id  referenceNo description status isAccepted createdAt orderStatus")
    .populate("orderItems.itemId orderItems.supplierDetails orderItems.quantity orderItems.agreedPrice")
    .exec()
    .then(formattedReq => {
        res.status(200).json({
            isSuccess: true,
            count: formattedReq.length,
            Order_Items: formattedReq.map(d => {
                return {
                    _id: d._id,
                    order: d.orderItems.map(order => {
                        return {
                            orderId: order._id,
                            item: {
                                itemId: order.itemId._id,
                                itemName: order.itemId.itemName,
                                stock : order.itemId.stock,
                                unitPrice: order.itemId.unitPrice,
                            },
                            supplierDetails: {
                                name: order.supplierDetails.name || "",
                                email: order.supplierDetails.email || "",
                                contactNo: order.supplierDetails.contactNo || "",
                                address: order.supplierDetails.address || "",
                                shopName: order.supplierDetails.shopName || "",
                                description: order.supplierDetails.description || "",
                            },
                            quantity: order.quantity,
                            agreedPrice: order.agreedPrice
                        };

                    }),
                    referenceNo: d.referenceNo,
                    status: d.status,
                    isAccepted: d.isAccepted,
                    orderStatus: d.orderStatus,
                    createdAt: d.createdAt
                };
            })
        });
    })
        .catch(err => {
            res.status(HTTP.SERVER_ERROR).json({
                error: err
            });
        });        
};

export const updateOrder = (req, res) => {
    Order.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, (err, response) => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_UPDATE_ORDER,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , response});
    });
};

export const deleteOrder = (req, res) => {
    const order = new Order(req.body);
    Order.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_DELETE_ORDER,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , order});
    });
};

export const updateStatus = (req, res) =>{
    const order = {id: req.params.id};
    const status = {
        status: req.body.status
    };
    Order.findOneAndUpdate(order, status, { runValidators: true }, (err, response) => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_UPDATE_STATUS,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , response});
    });
};

export const updateAcceptance = (req, res) =>{
    const order = {id: req.params.id};
    const isAccepted = {
        isAccepted: req.body.isAccepted
    };
    Order.findOneAndUpdate(order, isAccepted, { runValidators: true }, (err, response) => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_UPDATE_ACCEPTANCE,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , response});
    });
};