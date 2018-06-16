const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const tradingSchema = new Schema({},{ strict : false }); // если сохранять данные как есть

const marketSchema = new Schema({
    market: String,
    price: String,
    volume: String
});

const tickerSchema = new Schema({
    base: String,
    target: String,
    price: String,
    volume: String,
    change: String,
    markets: [marketSchema]
});

const tradingSchema = new Schema({
    ticker: tickerSchema,
    timestamp: Number,
    success: String,
    error: ''
});

// var TradeModel = mongoose.model('Trade',tradingSchema);
//
// tradingSchema.pre('update', function (next) {
//     var self = this;
//     TradeModel.find({_id : self._id}, function (err, docs) {
//         if (!docs.length){
//             next();
//         }else{
//             console.log('user exists: ',self._id);
//             next(new Error("User exists!"));
//         }
//     });
// }) ;

module.exports = mongoose.model('Trade', tradingSchema);
