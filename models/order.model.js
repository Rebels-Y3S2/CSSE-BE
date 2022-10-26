import mongoose from "mongoose";
import { v1 as uuidv1 } from "uuid";

const { Schema } = mongoose;

const v1options = {
    node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
    clockseq: 0x1234,
    msecs: new Date("2011-11-01").getTime(),
    nsecs: 5678,
};

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
    totalAmount: {
        type: String,
        required: true,
    },
    referenceNo: {
        type: String,
        default: uuidv1(v1options),
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