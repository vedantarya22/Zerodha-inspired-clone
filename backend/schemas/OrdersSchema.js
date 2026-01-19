const {Schema} = require("mongoose");

const OrdersSchema = new Schema({

     userId: {
      type: Schema.Types.ObjectId,
      ref: "user", 
      required: true,
    },
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