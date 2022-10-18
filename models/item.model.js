import mongoose from "mongoose";
import Config from "../utils/config.js";

const { Schema } = mongoose;

const itemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    isAccepted: {
        type: Number,
        default: 0
    },
    
    },
    { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;