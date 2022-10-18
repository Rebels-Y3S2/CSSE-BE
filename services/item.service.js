import {Item} from "../models/index.js";

export const addItem = (req, res) => {
    const item = new Item(req.body);
    item.save((err, document) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to add Order",
                    msgError: true
                }
            });
        else
            res.send(order);
    });
}