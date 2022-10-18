import mongoose from "mongoose";
import Config from "../utils/config.js";

const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId, ref:'user'
    }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;