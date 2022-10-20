import {Item} from "../models/index.js";
import Messages from "../utils/messages.js";
import HTTP from "../utils/http.js";

export const addItem = (req, res) => {
    const item = new Item(req.body);
    // eslint-disable-next-line no-unused-vars
    item.save((err, document) => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_ADD_ITEM,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true, item});
    });
};

export const getItems = (req, res) => {
    Item.find()
        .select("_id itemName stock unitPrice createdAt")
        .populate("owner")
        .exec()
        .then(formattedReq => {
            res.status(HTTP.OK).json({
                isSuccess: true,
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
            res.status(HTTP.SERVER_ERROR).json({
                error: err
            });
        });
};

export const getItemsByItemId = (req, res) => {
    const item = req.params.id;
    Item.find({_id: item})
        .populate("owner")
        .exec()
        .then(formattedReq => {
            res.status(HTTP.OK).json({
                isSuccess: true,
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
            res.status(HTTP.SERVER_ERROR).json({
                error: err
            });
        });        
};

export const updateItem = (req, res) => {
    Item.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, (err, response) => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_UPDATE_ITEM,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true, response});
    });
};

export const deleteItem = (req, res) => {
    const item = new Item(req.body);
    Item.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(HTTP.SERVER_ERROR).json({
                message: {
                    msgBody: Messages.UNABLE_TO_DELETE_ITEM,
                    actualError: err._message,
                    msgError: true
                }
            });
        else
            res.send({isSuccess: true, item});
    });
};

export const updateItemStatus = (req, res) =>{
    const item = {id: req.params.id};
    const status = {
        status: req.body.status
    };
    Item.findOneAndUpdate(item, status, { runValidators: true }, (err, response) => {
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

export const updateItemAcceptance = (req, res) =>{
    const item = {id: req.params.id};
    const isAccepted = {
        isAccepted: req.body.isAccepted
    };
    Item.findOneAndUpdate(item, isAccepted, { runValidators: true }, (err, response) => {
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