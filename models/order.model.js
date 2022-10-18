import mongoose from "mongoose";
import Config from "../utils/config.js";

const { Schema } = mongoose;

const orderSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId, ref:'Item',
        required: true
    },
    referenceNo: {
        type: String,
        required: true
    },
    supplierDetails: {
        type: Schema.Types.ObjectId, ref:'User',
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    agreedPrice: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    isAccepted: {
        type: String,
        default: "false"
    },
    
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;