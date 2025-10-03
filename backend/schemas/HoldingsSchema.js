const {Schema} =require('mongoose');

const HoldingsSchema =new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: { type: Boolean, default: false }
});
module.exports={HoldingsSchema};