import mongoose from "mongoose";
import {v4} from "uuid";

const { Schema } = mongoose;

const orderSchema = new Schema({
    orderItems:[
        {
            itemId: {
                type : mongoose.Schema.Types.ObjectId,
                required: true,
                ref:"Item"
            },
            supplierDetails: {type: Schema.Types.ObjectId, ref: "User"},
            quantity: {type : Number, required: true},
            agreedPrice: {type: String, required: true},
        }
    ],
    referenceNo: {
        type: String,
        default: v4(),
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: Number,
        default: 0
    },
    isAccepted: {
        type: Number,
        default: 0
    },
    orderStatus: {
        type: Number,
        default: 0
    },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;