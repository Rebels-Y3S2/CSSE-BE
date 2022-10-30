import mongoose from "mongoose";

const { Schema } = mongoose;

// The schema for the Orders document in mongodb
const orderSchema = new Schema({
    orderItems:[
        {
            item: {
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
        required: true
    },
    description: {  
        type: String,
    },
    orderStatus: {
        type: Number,
    },
    paymentStatus:{
        type: Number,
    },
    comment:{
        type: String,
    }
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;