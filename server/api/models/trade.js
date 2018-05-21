const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

module.exports = mongoose.model('Trade', tradingSchema);
