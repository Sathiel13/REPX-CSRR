const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
        }
    ],
    total: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
