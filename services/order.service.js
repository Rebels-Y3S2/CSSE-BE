import {Order} from "../models/index.js";

export const addOrder = (req, res) => {
    const order = new Order(req.body);
    order.save((err, document) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to add Order",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true, order});
    });
}

export const getOrders = (req, res) => {
    Order.find()
        .select("_id referenceNo description status isAccepted createdAt")
        .populate('itemIds supplierDetails quantity agreedPrice')
        .exec()
        .then(formattedReq => {
            res.status(200).json({
                isSuccess: true,
                count: formattedReq.length,
                Item: formattedReq.map(d => {
                    return {
                        _id: d._id,
                        items: d.itemIds.map(data => {
                            return {
                                itemId : data._id,
                                itemName: data.itemName,
                                stock : data.stock,
                                unitPrice: data.unitPrice,
                            };
                        }),
                        supplierDetails: {
                            name: d.supplierDetails.name || "",
                            email: d.supplierDetails.email || "",
                            contactNo: d.supplierDetails.contactNo || "",
                            address: d.supplierDetails.address || "",
                            shopName: d.supplierDetails.shopName || "",
                            description: d.supplierDetails.description || "",
                        },
                        quantity: d.quantity,
                        agreedPrice: d.agreedPrice,
                        referenceNo: d.referenceNo,
                        status: d.status,
                        isAccepted: d.isAccepted,
                        createdAt: d.createdAt
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

export const getOrdersByOrderId = (req, res) => {
    const order = req.params.id;
    Order.find({_id: order})
        .populate('itemIds supplierDetails quantity agreedPrice')
        .exec()
        .then(formattedReq => {
            res.status(200).json({
                isSuccess: true,
                count: formattedReq.length,
                Item: formattedReq.map(d => {
                    return {
                        _id: d._id,
                        items: d.itemIds.map(data => {
                            return {
                                itemId : data._id,
                                itemName: data.itemName,
                                stock : data.stock,
                                unitPrice: data.unitPrice,
                            };
                        }),
                        supplierDetails: {
                            name: d.supplierDetails.name || "",
                            email: d.supplierDetails.email || "",
                            contactNo: d.supplierDetails.contactNo || "",
                            address: d.supplierDetails.address || "",
                            shopName: d.supplierDetails.shopName || "",
                            description: d.supplierDetails.description || "",
                        },
                        quantity: d.quantity,
                        agreedPrice: d.agreedPrice,
                        referenceNo: d.referenceNo,
                        status: d.status,
                        isAccepted: d.isAccepted,
                        createdAt: d.createdAt
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });        
}

export const updateOrder = (req, res) => {
    Order.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Update Order",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , response});
    });
}

export const deleteOrder = (req, res) => {
    const order = new Order(req.body);
    Order.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Delete Order",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , order});
    });
}

export const updateStatus = (req, res) =>{
    const order = {id: req.params.id};
    const status = {
        status: req.body.status
    }
    Order.findOneAndUpdate(order, status, { runValidators: true }, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Update Status",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , response});
    });
}

export const updateAcceptance = (req, res) =>{
    const order = {id: req.params.id};
    const isAccepted = {
        isAccepted: req.body.isAccepted
    }
    Order.findOneAndUpdate(order, isAccepted, { runValidators: true }, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Update Acceptance",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true , response});
    });
}