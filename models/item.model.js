import mongoose from "mongoose";

const { Schema } = mongoose;

// The schema for the Items document in mongodb
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
        type: Schema.Types.ObjectId, ref: "User",
        required: true
    },
    visibility: {
        type: Boolean,
        default:true
    }
    },
    { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;