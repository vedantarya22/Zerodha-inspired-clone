const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode : String, // buy or sell
    time : {
        type : Date,
        default:Date.now // default time is set if no time is passed from elsewhere
    }
    
});

module.exports = { OrdersSchema};