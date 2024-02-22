const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    id: {
        type: Long,
        required: true,
        unique: true,
    },
    gateway: {
        type: String,
        required: true,
    },
    amount: {
        type: Double,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
},{
    timestamps:true,
}
);
