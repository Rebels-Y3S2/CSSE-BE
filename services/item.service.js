import {Item} from "../models/index.js";

export const addItem = (req, res) => {
    const item = new Item(req.body);
    item.save((err, document) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to add Item",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send(item);
    });
}

export const getItems = (req, res) => {
    Item.find()
        .select("_id itemName stock unitPrice createdAt")
        .populate('owner')
        .exec()
        .then(formattedReq => {
            res.status(200).json({
                count: formattedReq.length,
                Item: formattedReq.map(d => {
                    return {
                        _id: d._id,
                        owner: d.owner._id,
                        name: d.owner.name,
                        itemName: d.itemName,
                        stock: d.stock,
                        unitPrice: d.unitPrice,
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

export const getItemsByItemId = (req, res) => {
    const item = req.params.id;
    Item.find({_id: item})
        .populate('owner')
        .exec()
        .then(formattedReq => {
            res.status(200).json({
                count: formattedReq.length,
                Item: formattedReq.map(d => {
                    return {
                        _id: d._id,
                        owner: d.owner._id,
                        name: d.owner.name,
                        itemName: d.itemName,
                        stock: d.stock,
                        unitPrice: d.unitPrice,
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

export const updateItem = (req, res) => {
    Item.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Update Item",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send(response);
    });
}

export const deleteItem = (req, res) => {
    const item = new Item(req.body);
    Item.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Delete Item",
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send(item);
    });
}

export const updateItemStatus = (req, res) =>{
    const item = {id: req.params.id};
    const status = {
        status: req.body.status
    }
    Item.findOneAndUpdate(item, status, { runValidators: true }, (err, response) => {
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

export const updateItemAcceptance = (req, res) =>{
    const item = {id: req.params.id};
    const isAccepted = {
        isAccepted: req.body.isAccepted
    }
    Item.findOneAndUpdate(item, isAccepted, { runValidators: true }, (err, response) => {
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