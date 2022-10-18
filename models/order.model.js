import mongoose from "mongoose";
import Config from "../utils/config.js";
import {v4} from 'uuid';

const { Schema } = mongoose;

const orderSchema = new Schema({
    itemIds: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    referenceNo: {
        type: String,
        default: v4(),
        required: true
    },
    supplierDetails: {
        type: Schema.Types.ObjectId, ref:'User',
    },
    quantity: [{ type: Number, required: true }],
    description: {
        type: String,
        required: true
    },
    agreedPrice: [{ type: String, required: true }],
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

const Order = mongoose.model("Order", orderSchema);

export default Order;