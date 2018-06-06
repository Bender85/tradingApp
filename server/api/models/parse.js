const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const tradingSchema = new Schema({},{ strict : false }); // если сохранять данные как есть

const dataSchema = new Schema({
    tsexchange: String,
    producttype: String,
    issueclass: String,
    bondtype: String,
    listings: String,
    underlyingtype: String,
    strategytypes: String,
    series: String,
    contracts: String,
    region: String,
    country: String
});

const parseSchema = new Schema({
    sheetName: String,
    data: [dataSchema]
});

module.exports = mongoose.model('Parse', parseSchema);
