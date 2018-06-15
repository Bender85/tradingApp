const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axois = require('axios');

const outApi = 'https://api.cryptonator.com/api/full/btc-usd';

const Trade = require('../models/trade');

axois.get(outApi)
    // .then((res) => {
    //     // console.log(req.data);
    //     const tradeData = res.data;
    //     const trade = new Trade(tradeData);
    //     trade
    //     .save()
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(err => console.log(err));
    //     // err.status(201).json({
    //     // message: 'handling post request'
    //     // });
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    .then((response) => {
        const tradeData = response.data;
        const trade = new Trade(tradeData);
        trade
        .save()
        .then((doc) => {
            console.log("Сохранен объект", doc);
            mongoose.disconnect();  // отключение от базы данных
        })
        .catch((err) => {
            console.log(err);
            mongoose.disconnect();
        });
    })
    .catch((error) => {
        console.log(error);
    });

// const tradesController = require('../controllers/trades');

// router.get("/", tradesController.trades_get_all);

// router.post("/", checkAuth, OrdersController.orders_create_order);
//
// router.get("/:orderId", checkAuth, OrdersController.orders_get_order);
//
// router.delete("/:orderId", checkAuth, OrdersController.orders_delete_order);




module.exports = router;
