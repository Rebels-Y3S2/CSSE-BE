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
            res.send(order);
    });
}

export const getOrders = (req, res) => {
    Order.find()
        .select("_id referenceNo description status isAccepted createdAt")
        .populate('item supplierDetails quantity agreedPrice')
        .exec()
        .then(formattedReq => {
            res.status(200).json({
                count: formattedReq.length,
                Item: formattedReq.map(d => {
                    return {
                        _id: d._id,
                        item: {
                            itemId : d.item._id,
                            itemName: d.item.itemName,
                            stock : d.item.stock,
                            unitPrice: d.item.unitPrice,
                        },
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
        .populate('item supplierDetails quantity agreedPrice')
        .exec()
        .then(formattedReq => {
            res.status(200).json({
                count: formattedReq.length,
                Item: formattedReq.map(d => {
                    return {
                        _id: d._id,
                        item: {
                            itemId : d.item._id,
                            itemName: d.item.itemName,
                            stock : d.item.stock,
                            unitPrice: d.item.unitPrice,
                        },
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
            res.send(response);
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
            res.send(order);
    });
}